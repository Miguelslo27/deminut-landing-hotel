import React, { useState, useEffect } from 'react';
import { Backdrop, Modal, Fade } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { ADD_COMMENTS, ADD_COMMENTS_PLACEHOLDER, ACCEPT } from '../../../i18n/keys';
import ReactGA from 'react-ga';

const Comments = ({
  item,
  onAdd,
}) => {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState();

  const MAX_LENGTH = 100;
  useEffect(() => setComment(item?.comments), []);

  const handleConfirm = () => {
    onAdd(item, comment);
    setModalVisible(false);
    ReactGA.event({ category: 'Menu', action: 'Add comments' });
  };

  return (
    <>
      <div
        className="view-order-top-options"
        onClick={() => setModalVisible(true)}
      >
        <p className="view-order-item-comments">{item?.comments || t(ADD_COMMENTS)}</p>
      </div>
      <Modal
        open={modalVisible}
        onClose={() => setModalVisible(false)}
        BackdropComponent={Backdrop}
        className="modal-container"
        style={{ marginBottom: '30%' }}
      >
        <Fade in={modalVisible}>
          <div className="bg-white rounded shadow-lg p-4" style={{ margin: '0 auto', marginLeft: '5%', marginRight: '5%' }}>
            <div className="modal-container">
              <div className="row comments-container">
                <h3>{t(ADD_COMMENTS)}</h3>
                <hr />
                <input
                  autoFocus
                  type="name"
                  className="form-control mt-2"
                  style={{ fontSize: '16px' }}
                  required="required"
                  maxLength={MAX_LENGTH}
                  placeholder={t(ADD_COMMENTS_PLACEHOLDER)}
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                />
              </div>
            </div>
            <button
              disabled={!comment}
              className="btn btn-w100 mt-3 mt-sm-4 create-order-button"
              onClick={handleConfirm}
            >
              {t(ACCEPT)}
            </button>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default Comments;