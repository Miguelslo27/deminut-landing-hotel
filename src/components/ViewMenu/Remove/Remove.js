import React, { useState } from 'react';
import { Backdrop, Modal, Fade } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { REMOVE_ORDER_PROMPT_TITLE, REMOVE_ORDER_PROMPT_DESCRIPTION } from '../../../i18n/keys';

const Remove = ({
  onConfirm
}) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setModalVisible(false);
  };

  return (
    <>
      <div
        className="view-order-top-options"
        onClick={() => setModalVisible(true)}
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="view-order-trash-icon"
        />
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
            <div className="modal-container">
              <div className="col-12 change-language-selector">
                <p>{t(REMOVE_ORDER_PROMPT_DESCRIPTION)}</p>
              </div>
            </div>
            <button
              className="btn btn-w100 mt-3 mt-sm-4 create-order-button"
              onClick={handleConfirm}
            >
              {t(REMOVE_ORDER_PROMPT_TITLE)}
            </button>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default Remove;