import './index.css';
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Fade, Modal, Backdrop } from '@material-ui/core'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageKeys } from '../../../constants/LocalStorage';
import { DELIVERY, IN_STORE } from '../../../constants/MenuTypes';
import { HOTEL } from '../../../constants/StoreTypes';
import {
  SELECT,
  ACCEPT,
  SELECT_SEND_TO,
  SELECT_THE,
  SELECT_GETTING_THE_ORDER,
  WRITE_ADDRESS_SEND_TO,
  ROOM,
  TABLE,
  WRITE_ADDRESS,
  STREET,
  STREET_CORNER,
  APARTMENT_NUMBER,
  NUMBER,
  PHONE_NUMBER_DESCRIPTION,
  PHONE_NUMBER,
  MANDATORY,
} from '../../../i18n/keys';

const SendTo = ({ menuType, maxLength, storeType, onSetValue, locationValue }) => {
  const { t } = useTranslation();
  const [sendToModalVisible, setSendToModalVisible] = useState(false);

  const [tableNumber, setTableNumber] = useState();
  const [locationSummary, setLocationSummary] = useState(locationValue?.table);

  const [street, setStreet] = useState(locationValue?.street);
  const [number, setNumber] = useState(locationValue?.number);
  const [apartmentNumber, setApartmentNumber] = useState(locationValue?.apartmentNumber);
  const [streetCorner, setStreetCorner] = useState(locationValue?.streetCorner);
  const [phoneNumber, setPhoneNumber] = useState(locationValue?.phoneNumber);

  useEffect(() => {
    if (street || tableNumber) {
      if (menuType === IN_STORE) {
        setLocationSummary(tableNumber);
      } else if (menuType === DELIVERY) {
        setLocationSummary(
          `${street} -
         ${number}
         ${apartmentNumber ? `- Ap.${apartmentNumber}` : ''}
         ${phoneNumber ? `- Tel.${phoneNumber}` : ''}`);
      }
    }
  }, []);

  const handleAccept = () => {
    const locationObject = menuType === DELIVERY ? {
      street,
      number,
      apartmentNumber,
      streetCorner,
      phoneNumber,
    } : {
      table: tableNumber,
    };

    if (menuType === IN_STORE) {
      setLocationSummary(tableNumber);
    } else if (menuType === DELIVERY) {
      setLocationSummary(
        `${street} - 
         ${number}
         ${apartmentNumber ? `- Ap.${apartmentNumber}` : ''}
         ${phoneNumber ? `- ${phoneNumber}` : ''}`);
    }
    onSetValue(locationObject);
    setSendToModalVisible(false);
    localStorage.setItem(LocalStorageKeys.PENDING_SEND_TO, JSON.stringify(locationObject));
  };

  return (
    <>
      <div
        className="modal-input-container"
        style={{ border: !!locationSummary && !sendToModalVisible && '1px solid #04912e' }}
        onClick={() => setSendToModalVisible(true)}
      >
        {locationSummary ? (
          <>
            <div className="input-icon-container">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="input-icon-confirm"
              />
            </div>
            <small className="input-label input-label-confirm">
              {menuType === IN_STORE
                ? `${storeType === HOTEL ? t(ROOM) : t(TABLE)} ${locationValue?.table}`
                : `${locationSummary}`
              }
            </small>
          </>
        ) : (
          <>
            <div className="input-icon-container">
              <FontAwesomeIcon
                icon={faThumbtack}
                className="input-icon"
              />
            </div>
            <small className="input-label">
              {menuType === IN_STORE
                ? `${t(SELECT)} ${storeType === HOTEL ? t(ROOM) : t(TABLE)}`
                : `${t(WRITE_ADDRESS)}`
              }
            </small>
          </>
        )}
      </div>
      <Modal
        open={sendToModalVisible}
        onClose={() => setSendToModalVisible(false)}
        BackdropComponent={Backdrop}
        className="modal-container"
        style={{ marginBottom: '10%' }}
      >
        <Fade in={sendToModalVisible}>
          <div className="bg-white rounded shadow-lg p-3 send-to-modal" style={{ marginTop: menuType === DELIVERY ? '32px' : '0px' }}>
            {menuType === IN_STORE ? (
              <>
                <h3>{t(SELECT_SEND_TO)}</h3>
                <p>{t(SELECT_THE)} {storeType === HOTEL ? t(ROOM) : t(TABLE)} {t(SELECT_GETTING_THE_ORDER)}</p>
              </>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>{t(WRITE_ADDRESS_SEND_TO)}</h3>
                <div
                  onClick={() => setSendToModalVisible(false)}
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    size='1x'
                  />
                </div>
              </div>
            )}
            <hr />
            <div className="modal-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
              {menuType === IN_STORE ? (
                <>
                  <span className="modal-text">{storeType === HOTEL ? t(ROOM) : t(TABLE)}</span>
                  <div className="number-input-container">
                    <input
                      defaultValue={locationValue?.tableNumber}
                      autoFocus
                      className="number-input"
                      style={{ width: '75px' }}
                      type="text"
                      maxLength={maxLength}
                      onChange={e => setTableNumber(e.target.value)}
                      inputMode='numeric'
                      pattern="[0-9]*"
                    />
                  </div>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className='send-to-shipping-item'>
                    <span className="modal-text-small">{t(STREET)}</span>
                    <div className="number-input-container" style={{ marginTop: '8px' }}>
                      <input
                        defaultValue={locationValue?.street}
                        autoFocus
                        className="text-input"
                        type="text"
                        maxLength={80}
                        placeholder={t(MANDATORY)}
                        onChange={e => setStreet(e.target.value)}
                        inputMode='text'

                      />
                    </div>
                  </div>
                  <div className='send-to-shipping-item'>
                    <span className="modal-text-small">{t(NUMBER)}</span>
                    <div className="number-input-container" style={{ marginTop: '8px' }}>
                      <input
                        defaultValue={locationValue?.number}
                        className="text-input"
                        type="text"
                        placeholder={t(MANDATORY)}
                        maxLength={10}
                        onChange={e => setNumber(e.target.value)}
                        inputMode='text'
                      />
                    </div>
                  </div>
                  <div className='send-to-shipping-item'>
                    <span className="modal-text-small">{t(APARTMENT_NUMBER)}</span>
                    <div className="number-input-container" style={{ marginTop: '8px' }}>
                      <input
                        defaultValue={locationValue?.apartmentNumber}
                        className="text-input"
                        type="text"
                        minLength={3}
                        maxLength={10}
                        onChange={e => setApartmentNumber(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='send-to-shipping-item'>
                    <span className="modal-text-small">{t(STREET_CORNER)}</span>
                    <div className="number-input-container" style={{ marginTop: '8px' }}>
                      <input
                        defaultValue={locationValue?.streetCorner}
                        className="text-input"
                        type="text"
                        minLength={3}
                        maxLength={80}
                        onChange={e => setStreetCorner(e.target.value)}
                        inputMode='text'
                      />
                    </div>
                  </div>
                  <div className='send-to-shipping-item'>
                    <span className="modal-text-small">{t(PHONE_NUMBER)}</span>
                    <div className="number-input-container" style={{ marginTop: '8px' }}>
                      <input
                        defaultValue={locationValue?.phoneNumber}
                        className="text-input"
                        type="text"
                        minLength={4}
                        maxLength={12}
                        onChange={e => setPhoneNumber(e.target.value)}
                        inputMode='numeric'
                        pattern="[0-9]*"
                        placeholder={t(MANDATORY)}
                      />
                    </div>
                    <small>{t(PHONE_NUMBER_DESCRIPTION)}</small>
                  </div>
                </div>
              )}
            </div>
            <button
              disabled={
                (menuType === IN_STORE &&
                  (!tableNumber
                    || isNaN(tableNumber)
                    || tableNumber.includes(".")))
                || (menuType === DELIVERY && (street?.length < 2 || !number?.trim() || streetCorner?.length < 4 || !phoneNumber || phoneNumber?.length < 5))}
              className="btn btn-w100 mt-3 mt-sm-4 create-order-button"
              onClick={handleAccept}
            >
              {t(ACCEPT)}
            </button>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default SendTo;
