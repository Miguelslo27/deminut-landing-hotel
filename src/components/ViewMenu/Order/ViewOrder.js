import './index.css';
import React, { useState } from 'react';
import QuantitySelector from '../QuantitySelector';
import { getPrice, getTotalPrice } from './OrderHelpers';
import { useTranslation } from 'react-i18next';
import SendTo from '../SendTo/SendTo';
import OrderController from '../../../controllers/OrderController';
import { LocalStorageKeys } from '../../../constants/LocalStorage';
import ChangeLanguage from '../ChangeLanguage';
import Remove from '../Remove';
import {
  MY_ORDER,
  SENDING_ORDER,
  MAKE_ORDER,
  EDIT_ORDER,
  SEND_TO,
  TOTAL,
  SHIPPING,
  PAYMENT_METHOD,
  CASH
} from '../../../i18n/keys';
import Comments from '../Comments/Comments';
import ReactGA from 'react-ga';
import { DELIVERY, IN_STORE } from '../../../constants/MenuTypes';

const ViewOrder = ({
  menuId,
  menuType,
  storeType,
  shippingPrice,
  currency,
  selectedItems,
  onChangeAmount,
  onSetComment,
  onClose,
  onCreateOrder,
  onRemoveOrder,
}) => {

  const savedLocation = localStorage.getItem(LocalStorageKeys.PENDING_SEND_TO);
  const [location, setLocation] = useState(savedLocation && JSON.parse(savedLocation));
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSetLocation = location => {
    setLocation(location);
  };

  const handleCreateOrder = () => {
    setLoading(true);
    OrderController.createOrder(menuId, selectedItems, location)
      .then(response => {
        setLoading(false);
        onCreateOrder(response.data.order.id);
        ReactGA.event({ category: 'Menu', action: 'Create order' });
      }).catch(error => {
        ReactGA.exception({ description: 'Menu: create order failed', fatal: true })
        setLoading(false);
      });
  };

  const handleRemoveOrder = () => {
    localStorage.removeItem(LocalStorageKeys.SELECTED_ITEMS);
    onRemoveOrder();
  }

  return (
    <div className="view-order-detail">
      <div>
        <div className="view-order-top-detail">
          <Remove onConfirm={handleRemoveOrder} />
          <h3>{t(MY_ORDER)}</h3>
          <ChangeLanguage />
        </div>
        <div className="view-order-items">
          {selectedItems.map(item => (
            <div className="view-order-item">
              <div className="view-order-item-row">
                <>
                  <span className="view-order-item-title">{item.name}</span>
                  <QuantitySelector
                    secondary
                    initialAmount={item?.quantity}
                    onChangeAmount={amount => onChangeAmount(item, amount)}
                  />
                </>
                <span className="view-order-item-price">{getPrice(currency, item?.discountPrice || item?.price, item.quantity)}</span>
              </div>
              <Comments
                item={item}
                onAdd={(item, comment) => onSetComment(item, comment)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="view-order-buttons-container">
        <hr />
        {shippingPrice > 0 && menuType !== IN_STORE && (
          <div className="view-order-item-total-container">
            <span className="view-order-item-total-title">
              {t(SHIPPING)}
            </span>
            <span className="view-order-item-shipping-amount">
              {currency}{Number(shippingPrice)}
            </span>
          </div>
        )}
        <div className="view-order-item-total-container">
          <span className="view-order-item-total-title">
            {t(TOTAL)}
          </span>
          <span className="view-order-item-total-amount">
            {getPrice(currency, getTotalPrice(selectedItems, menuType === DELIVERY ? shippingPrice : 0).toFixed(2), 1)}
          </span>
        </div>
        {menuType !== IN_STORE && (
          <div className="view-order-item-total-container">
            <span className="view-order-item-total-title">
              {t(PAYMENT_METHOD)}
            </span>
            <span className="view-order-item-shipping-amount">
              {t(CASH)}
            </span>
          </div>
        )}
        <div className="view-order-select-location">
          <span className="view-order-item-send-to-title">{t(SEND_TO)}</span>
          <SendTo
            locationValue={location}
            maxLength={5}
            menuType={menuType}
            storeType={storeType}
            onSetValue={handleSetLocation}
          />
        </div>
        <div
          className="edit-order-button"
          onClick={() => onClose()}
        >
          <span className="edit-order-button-text">{t(EDIT_ORDER)}</span>
        </div>
        <button
          disabled={isLoading || !location}
          onClick={() => handleCreateOrder()}
          className="btn btn-w100 mt-3 mt-sm-4 create-order-button"
        >
          {isLoading ? (
            <span>{t(SENDING_ORDER)}</span>
          ) : (
            <span>{t(MAKE_ORDER)}</span>
          )}
        </button>
      </div>
    </div >
  );
};

export default ViewOrder;
