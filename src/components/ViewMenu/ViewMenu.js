
/*
  This is now marked as legacy code. This was our first menu version.
  While it served its purpose for a while and did a really great job,
  it will be removed on a future release and should not longer be on production.
  Farewell, V1!
*/

import './index.css';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Element } from 'react-scroll';
import { Fab } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactGA from 'react-ga';
import MenuController from '../../controllers/MenuController';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import {
  BACKGROUND_IMAGES,
  MENU_VARIANTS,
  FAB_VARIANTS,
  BOTTOM_PANEL_VARIANTS,
} from './Constants';
import Search from './Search';
import SectionBar from './SectionBar';
import Loading from './Loading';
import Item from './Item';
import { ViewOrder, getTotalPrice } from './Order';
import { filterBySearchTerms } from './Search/SearchHelpers';
import OrderStatus from './OrderStatus';
import useInterval from '../../hooks/useInterval';
import { REFETCH_ORDER_INTERVAL } from './Constants';
import { PENDING, DELIVERED } from '../../constants/OrderStatus';
import OrderController from '../../controllers/OrderController';
import { addTwoHours } from '../../constants/DateTime';
import { LocalStorageKeys } from '../../constants/LocalStorage';
import { PLAN_PRO_ID } from '../../constants/Plans';
import { VIEW_ORDER } from '../../i18n/keys';
import { getPrice } from './Order/OrderHelpers';
import DisabledMenu from './DisabledMenu';
import Meta from '../common/Meta';
import { IN_STORE } from '../../constants/MenuTypes';

const logViewMenuEvent = menuId => {
  ReactGA.event({
    category: "Menu",
    action: "View",
    label: menuId,
  });
  ReactGA.pageview('/menu');
}

const ViewMenu = ({ menuId }) => {
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState(null);

  const [areOrdersEnabled, setOrdersEnabled] = useState();

  const { t } = useTranslation();

  useEffect(() => {
    logViewMenuEvent();
    MenuController.getClientMenu(menuId)
      .then(({ menu }) => {
        setMenu(menu);
        setOrdersEnabled(menu?.store?.customer?.planId === PLAN_PRO_ID || menu?.type !== IN_STORE);
      })
      .catch(err => setError(err));
  }, []);

  const [sectionsDisplayed, setSectionsDisplayed] = useState();
  const [currentSearchTerm, setCurrentSearchTerm] = useState();

  useEffect(() => {
    setSectionsDisplayed(menu?.sections);
  }, [])

  const handleOnSearchChange = searchTerms => {
    setCurrentSearchTerm(searchTerms);
    setSectionsDisplayed(filterBySearchTerms(menu, searchTerms));
  }

  const inputRef = useRef(null);
  const sectionListRef = useRef();
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, menu?.sections.length);
  }, [menu]);

  useEffect(() => {
    localStorage.removeItem(LocalStorageKeys.SELECTED_ITEMS);
  }, []);

  const MenuComponent = ({
    sections,
    store,
    searchTerms,
    onSearchChange,
  }) => {
    const [isSectionHeaderEnabled, setSectionHeaderEnabled] = useState(0);
    useScrollPosition(({ currPos }) => {
      setSectionHeaderEnabled(currPos.y < -210);
    });

    useEffect(() => {
      if (inputRef?.current) {
        inputRef.current.focus();
      }
    }, []);

    const [selectedItems, setSelectedItems] = useState(JSON.parse(localStorage.getItem(LocalStorageKeys.SELECTED_ITEMS)) || []);

    useEffect(() => {
      if (selectedItems) {
        localStorage.setItem(LocalStorageKeys.SELECTED_ITEMS, JSON.stringify(selectedItems));
      }
    }, [selectedItems]);

    const getTopBackgroundImage = type => {
      return BACKGROUND_IMAGES.find(f => f.type === type)?.postalImage;
    }

    const isItemSelected = useCallback(item => {
      return selectedItems?.find(i => i.id === item.id);
    }, [selectedItems]);

    const handleSelectItem = useCallback(item => {
      if (!isItemSelected(item)) {
        setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
      }
    }, [selectedItems]);

    const handleUnselectItem = useCallback(item => {
      if (isItemSelected(item)) {
        setSelectedItems(selectedItems.filter(i => i.id !== item.id));
      }
    }, [selectedItems])

    const handleChangeAmount = useCallback((item, amount) => {
      if (amount == 0) {
        handleUnselectItem(item);
      } else {
        const currentItemIndex = selectedItems.findIndex(i => i.id == item.id);
        const updatedSelectedItems = [...selectedItems];
        updatedSelectedItems[currentItemIndex].quantity = amount;
        setSelectedItems(updatedSelectedItems);
      }
    }, [selectedItems]);

    const [activeOrder, setActiveOrder] = useState();

    const handleOnCreateOrder = useCallback(orderId => {
      setSelectedItems([]);
      localStorage.setItem(LocalStorageKeys.ACTIVE_ORDER_ID, orderId);
      setBottomPanelExpanded(false);
      fetchOrder(orderId);
    }, []);

    const handleOnSetComment = (item, comment) => {
      const currentItemIndex = selectedItems.findIndex(i => i.id == item.id);
      const updatedSelectedItems = [...selectedItems];
      updatedSelectedItems[currentItemIndex].comments = comment;
      setSelectedItems(updatedSelectedItems);
    }

    const handleRemoveOrder = useCallback(() => {
      removeOrder();
      setBottomPanelExpanded(false);
      setSelectedItems([]);
    }, []);

    const removeOrder = () => {
      localStorage.removeItem(LocalStorageKeys.PENDING_SEND_TO);
      localStorage.removeItem(LocalStorageKeys.ACTIVE_ORDER_ID);
      localStorage.removeItem(LocalStorageKeys.SELECTED_ITEMS);
    }

    const fetchOrder = orderId => {
      OrderController.getOrder(orderId).then(response => {
        const responseOrder = response.data.order;
        const { status, createdAt, storeId } = responseOrder;
        if (status === DELIVERED || moment().isSameOrAfter(addTwoHours(createdAt))) {
          removeOrder();
        } else if (storeId !== menu.storeId) {
          removeOrder();
        } else {
          setActiveOrder(responseOrder);
        }
      }).catch(() => removeOrder());
    };

    useEffect(() => {
      const orderId = localStorage.getItem(LocalStorageKeys.ACTIVE_ORDER_ID);
      if (orderId) {
        fetchOrder(orderId);
      }
    }, []);

    useInterval(() => {
      const orderId = localStorage.getItem(LocalStorageKeys.ACTIVE_ORDER_ID);
      if (orderId && activeOrder?.status !== PENDING) {
        fetchOrder(orderId);
      }
    }, REFETCH_ORDER_INTERVAL);

    const [isBottomPanelExpanded, setBottomPanelExpanded] = useState(false);
    const getBottomPanelAnimationVariant = () => {
      if (isBottomPanelExpanded) {
        return "expanded";
      } else if (selectedItems?.length) {
        return "mini";
      } else {
        return "off";
      }
    }

    useEffect(() => {
      if (isBottomPanelExpanded) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    });

    return (
      <>
        <Meta title={`${store.title} | Carta`} />
        <div
          className={`view-container ${isBottomPanelExpanded && "view-container-bottom-panel-expanded"}`}
          onClick={() => setBottomPanelExpanded(false)}
        >
          <div
            className={menu.enableTopOverlayFilter ? "view-top-container" : "view-top-container-no-filter"}
            style={{ backgroundImage: `url(${store?.postalImageUrl || getTopBackgroundImage(store?.type)})` }}>
            {menu.displayStoreTitle && (<h2 className="view-top-text">{store.title}</h2>)}
          </div>
          <motion.div
            animate={isSectionHeaderEnabled ? "sections" : "search"}
            className="view-search-container"
            style={isSectionHeaderEnabled ? { position: 'fixed', marginTop: 0 } : { position: 'absolute', marginTop: 230 }}
            variants={MENU_VARIANTS}
          >
            <Search
              animate={isSectionHeaderEnabled ? "sections" : "search"}
              inputRef={inputRef}
              searchTerms={searchTerms}
              onSearchChange={value => onSearchChange(value)}
            />
            <SectionBar
              animate={isSectionHeaderEnabled ? "search" : "sections"}
              listRef={sectionListRef}
              sectionRefs={sectionRefs}
              searchTerms={searchTerms}
              sections={sections}
            />
          </motion.div>
          <div className="view-menu-container">
            {activeOrder && (<OrderStatus order={activeOrder} />)}
            {sections.map((section, index) => (
              <Element
                key={section.id}
                className="view-section-container"
                name={`section-${index}`}
              >
                <h3 className="view-section-title">{section.name}</h3>
                {section?.items?.map?.(item => (
                  <Item
                    key={item.id}
                    item={isItemSelected(item) || item}
                    currency={menu?.currency}
                    isBottomPanelExpanded={isBottomPanelExpanded}
                    isSelected={isItemSelected(item)}
                    onSelect={item => areOrdersEnabled && handleSelectItem(item)}
                    onUnselect={item => handleUnselectItem(item)}
                    onChangeAmount={(item, amount) => handleChangeAmount(item, amount)}
                  />
                ))}
              </Element>
            ))}
          </div>
          <div className="view-bottom-container">
            <p className="view-bottom-poweredby-text">con tecnología de
            <a href="https://www.deminut.com" style={{ marginTop: 0, alignItems: 'center' }}>
                <img
                  src="/img/logo-black.png"
                  style={{ display: 'inline', width: 64, marginLeft: 6, opacity: 0.7 }}
                />
              </a>
            </p>
          </div>
          <motion.div
            className="view-scrolltotop-container"
            animate={isSectionHeaderEnabled && !selectedItems.length ? "sections" : "search"}
            variants={FAB_VARIANTS}
          >
            <Fab
              color="#212121"
              size="medium"
              onClick={() => window.scrollTo(0, 0)}
              aria-label="add">
              <FontAwesomeIcon
                icon={faArrowUp}
              />
            </Fab>
          </motion.div>
        </div>
        {areOrdersEnabled && (
          <motion.div
            className="view-order-bottom-panel bg-white shadow-lg"
            animate={getBottomPanelAnimationVariant()}
            variants={BOTTOM_PANEL_VARIANTS}
          >
            {isBottomPanelExpanded ? (
              <ViewOrder
                menuId={menu?.id}
                menuType={menu?.type}
                storeType={menu?.store?.type}
                shippingPrice={menu?.store?.shippingPrice}
                currency={menu?.currency}
                selectedItems={selectedItems}
                onChangeAmount={(item, amount) => handleChangeAmount(item, amount)}
                onClose={() => setBottomPanelExpanded(false)}
                onCreateOrder={orderId => handleOnCreateOrder(orderId)}
                onRemoveOrder={() => handleRemoveOrder()}
                onSetComment={(item, comment) => handleOnSetComment(item, comment)}
              />
            ) : (
              <button
                onClick={() => setBottomPanelExpanded(true)}
                className="btn btn-w100 mt-3 mt-sm-4 view-order-button"
              >
                {t(VIEW_ORDER)} ({getPrice(menu?.currency, getTotalPrice(selectedItems, menu?.store?.shippingPrice).toFixed(2), 1)})
              </button>
            )}
          </motion.div>
        )}
      </>
    );
  };

  if (menu) {
    return (
      <MenuComponent
        searchTerms={currentSearchTerm}
        sections={sectionsDisplayed || menu.sections}
        store={menu.store}
        onSearchChange={handleOnSearchChange}
      />
    );
  } else if (error) {
    return <DisabledMenu />
  } else {
    return <Loading />
  }
}

export default ViewMenu;
