import './index.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const QuantitySelector = ({ onChangeAmount, secondary, initialAmount }) => {
  const [amount, setAmount] = useState(initialAmount);

  useEffect(() => {
    setAmount(initialAmount);
  }, [initialAmount])

  const handleOnDecreaseAmount = () => {
    const newAmount = amount - 1;
    if (amount > 1) {
      setAmount(newAmount);
      onChangeAmount(newAmount);
    }
  }

  const handleOnIncreaseAmount = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    onChangeAmount(newAmount);
  }

  return (
    <div className="sel-container">
      <FontAwesomeIcon
        size="lg"
        onClick={() => handleOnDecreaseAmount()}
        className={`sel-icon ${secondary && `sel-icon-secondary`}`}
        icon={faMinusCircle} />
      <div className="sel-amount-container">
        <span className={`sel-amount ${secondary && `sel-amount-secondary`}`}>{amount}</span>
      </div>
      <FontAwesomeIcon
        size="lg"
        onClick={() => handleOnIncreaseAmount()}
        className={`sel-icon ${secondary && `sel-icon-secondary`}`}
        icon={faPlusCircle} />
    </div>
  );
};

export default QuantitySelector;
