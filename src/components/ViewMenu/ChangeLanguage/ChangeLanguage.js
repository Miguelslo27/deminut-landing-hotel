import './index.css';
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { Backdrop, Modal, Fade } from '@material-ui/core';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga';
import { languages } from './languages';
import {
  ACCEPT,
  CHANGE_LANGUAGE_PROMPT_TITLE,
  CHANGE_LANGUAGE_PROMPT_DESCRIPTION,
} from '../../../i18n/keys';

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [finalLanguageValue, setFinalLanguageValue] = useState();
  const [dropdownLanguage, setDropdownLanguage] = useState();

  const handleAcceptLanguage = () => {
    setFinalLanguageValue(dropdownLanguage.value);
    setModalVisible(false);
    i18n.changeLanguage(dropdownLanguage.key);
    ReactGA.event({ category: 'Menu', action: 'Change Language' });
  }

  useEffect(() => {
    const [, spanishLanguage] = languages;
    const currentLanguage = languages.find(l => l.key === i18n.language);
    setDropdownLanguage(currentLanguage);
    setFinalLanguageValue(currentLanguage?.value || spanishLanguage?.value);
  }, []);

  return (
    <>
      <div
        className="view-order-top-options"
        onClick={() => setModalVisible(true)}
      >
        <FontAwesomeIcon
          icon={faGlobe}
          className="view-order-language-icon"
        />
        <small className="view-order-language-text">{finalLanguageValue}</small>
      </div>
      <Modal
        open={modalVisible}
        onClose={() => setModalVisible(false)}
        BackdropComponent={Backdrop}
        className="modal-container"
        style={{ marginBottom: '10%' }}
      >
        <Fade in={modalVisible}>
          <div className="bg-white rounded shadow-lg p-4" style={{ margin: '0 auto' }}>
            <h3>{t(CHANGE_LANGUAGE_PROMPT_TITLE)}</h3>
            <p>{t(CHANGE_LANGUAGE_PROMPT_DESCRIPTION)}</p>
            <hr />
            <div className="modal-container">
              <div className="col-12 change-language-selector">
                <Select
                  isSearchable={false}
                  value={dropdownLanguage}
                  onChange={r => setDropdownLanguage(r)}
                  placeholder="Seleccione"
                  options={languages}
                />
              </div>
            </div>
            <button
              className="btn btn-w100 mt-3 mt-sm-4 create-order-button"
              onClick={handleAcceptLanguage}
            >
              {t(ACCEPT)}
            </button>
          </div>
        </Fade>
      </Modal>
    </>
  )
};

export default ChangeLanguage;
