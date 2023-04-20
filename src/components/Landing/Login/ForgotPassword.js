import './index.css';
import React, { useState } from 'react';
import UserController from '../../../controllers/UserController';
import { store } from 'react-notifications-component';

const ForgotPassword = ({ onSendSuccess }) => {

  const [email, setEmail] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleOnSend = () => {
    setLoading(true);
    UserController.resetPasswordStart(email);
    onSendSuccess();
    store.addNotification({
      title: 'Bien!',
      message: 'La operación se completó correctamente.',
      type: "success",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        pauseOnHover: true,
      }
    })
  };

  return (
    <div className="bg-white rounded shadow-lg p-4 forgot-password-modal">
      <h3>Recuperar contraseña</h3>
      <hr />
      <strong className="mt-2">Ingrese su dirección de correo electrónico en el cuadro que aparece debajo. Si tu dirección de correo electrónico fue utilizada para crear una cuenta de Deminut.com, te enviaremos un correo a esa dirección con instrucciones para recuperar tu contraseña.</strong>
      <div className="mt-3">
        <p>Correo electrónico</p>
        <input
          type="email"
          className="form-control"
          required="required"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="modal-right-container">
        <button
          disabled={!email || isLoading}
          className="btn btn-bordered mt-3 mt-sm-4 ml-2"
          onClick={handleOnSend}
        >
          {isLoading ? "Cargando" : "Enviar"}
        </button>
      </div>
    </div >
  );
};

export default ForgotPassword;
