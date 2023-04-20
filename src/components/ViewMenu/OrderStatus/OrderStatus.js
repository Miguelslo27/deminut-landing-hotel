import './index.css';
import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faConciergeBell, faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { PENDING, APPROVED, REJECTED } from '../../../constants/OrderStatus';
import { useTranslation } from 'react-i18next';
import {
  PENDING as PENDING_LOCALE,
  PENDING_DESCRIPTION,
  CONFIRMED,
  CONFIRMED_DESCRIPTION,
  REJECTED as REJECTED_LOCALE,
  REJECTED_DESCRIPTION,
  FETCHING_ORDER,
  ORDER,
} from '../../../i18n/keys';

const OrderStatus = ({ order }) => {
  const { t } = useTranslation();

  const parseOrderByStatus = status => {
    switch (status) {
      case PENDING:
        return ({
          title: t(PENDING_LOCALE),
          description: t(PENDING_DESCRIPTION),
          icon: faClock,
          backgroundColor: '#0288d1',
        });
      case APPROVED:
        return ({
          title: t(CONFIRMED),
          description: t(CONFIRMED_DESCRIPTION),
          icon: faConciergeBell,
          backgroundColor: '#43a047',
        });
      case REJECTED:
        return ({
          title: t(REJECTED_LOCALE),
          description: t(REJECTED_DESCRIPTION),
          icon: faHeartBroken,
          backgroundColor: '#d32f2f',
        });
      default:
        return ({
          title: t(FETCHING_ORDER),
          icon: faClock,
          backgroundColor: '#d32f2f',
        })
    }
  }

  const [error, setError] = useState();
  const { title, description, icon, backgroundColor } = parseOrderByStatus(order?.status);
  return (
    <Paper
      className="order-status-c-container"
      elevation={2}
      style={{ backgroundColor }}
    >
      <div className="order-status-icon">
        <FontAwesomeIcon
          icon={icon}
          color="#ffffff"
          size="10x"
          opacity={0.07}
        />
      </div>
      <h3 className="order-status-c-title">{t(ORDER).toLocaleUpperCase()}</h3>
      <h3 className="order-status-c-text">{title}</h3>
      <h3 className="order-status-c-description">{description}</h3>
    </Paper>
  );
}

export default OrderStatus;
