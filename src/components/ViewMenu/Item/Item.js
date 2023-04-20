import './index.css';
import React, { useState, useEffect } from 'react';
import { Card } from '@material-ui/core';
import { motion } from 'framer-motion';
import QuantitySelector from '../QuantitySelector';
import {
  ITEM_AMOUNT_VARIANTS,
  ITEM_ORDER_VARIANTS,
} from '../Constants';
import { getPrice } from '../Order/OrderHelpers';
import { useTranslation } from 'react-i18next';
import { REMOVE_ITEM_FROM_ORDER } from '../../../i18n/keys';

const Item = ({
  isBottomPanelExpanded,
  currency,
  item,
  isSelected,
  onSelect,
  onUnselect,
  onChangeAmount
}) => {

  const [selectedAmount, setSelectedAmount] = useState(1);
  const { t } = useTranslation();

  useEffect(() => {
    setSelectedAmount(item?.quantity);
  }, [item, onSelect, onChangeAmount])

  const handleChangeAmount = amount => {
    setSelectedAmount(amount);
    onChangeAmount(item, amount);
  };

  return (
    <motion.div
      animate={isSelected ? "selected" : "normal"}
      variants={ITEM_ORDER_VARIANTS}
      onClick={() => !isBottomPanelExpanded && onSelect(item)}
      className={`view-item-container ${item.imageUrl && `height: 145px`}`}
    >
      <Card className="bg-white shadow-lg">
        <div className="view-item-content">
          {(item.imageUrl) && (
            <img src={item.imageUrl} className="view-image-content" />
          )}
          <div className="view-item-details">
            <div>
              <strong className="view-item-details-title">{item.name}</strong>
              <div>
                <div className="view-item-details-description">{item.description}</div>
              </div>
            </div>
            <motion.div
              className="view-price-container"
              animate={isSelected ? "normal" : "selected"}
              variants={ITEM_AMOUNT_VARIANTS}
            >
              {(item.price && item.discountPrice) && (
                <>
                  {!isSelected && (
                    <h3 className="view-discount-price-text">{getPrice(currency, item.price)}</h3>
                  )}
                  <h3 className="view-price-text">{getPrice(currency, item.discountPrice)}</h3>
                </>
              )}
              {(item.price && !item.discountPrice) && (
                <>
                  <motion.h3 className="view-price-text">
                    {getPrice(currency, item.price)}
                  </motion.h3>
                </>
              )}
            </motion.div>
          </div>
        </div>
        <motion.div
          className="view-order"
          animate={isSelected ? "selected" : "normal"}
          variants={ITEM_AMOUNT_VARIANTS}
        >
          <div className="view-order-amount-container">
            <div
              onClick={() => onUnselect(item)}
              className="view-order-title-text"
            >
              {t(REMOVE_ITEM_FROM_ORDER)}
            </div>
            <QuantitySelector
              onChangeAmount={amount => handleChangeAmount(amount)}
              initialAmount={selectedAmount}
            />
            <motion.text className="view-order-amount-price">
              {getPrice(currency, item.discountPrice || item.price, selectedAmount)}
            </motion.text>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default Item;
