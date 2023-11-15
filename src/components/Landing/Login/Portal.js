import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';
import validateEmail from '../../../helpers/mailValidator';
import UserController from '../../../controllers/UserController';

const SignupForm = ({ onLoginRequest }) => {
  const formRef = useRef();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const submitRegister = () => {
    history.location = 'https://portal.deminut.com';
  };

  return (
    <div className="col-12 col-md-8 col-lg-5 mt-5 mb-5">
      {/* Contact Box */}
      <div className="contact-box bg-white text-center rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg">
        {/* Contact Form */}
        <form
          ref={formRef}
          id="contact-form"
          onSubmit={submitRegister}
        >
          <div className="contact-top">
            <h3 className="contact-title">
              Comience ahora
            </h3>
            <h5 className="text-secondary fw-3 py-3">
              Regístrese ahora y disfrute de un servicio que colocará a sus restaurantes por delante de la competencia.
            </h5>
          </div>
          <div className="row">
            <a
              className="btn btn-bordered w-100"
              disabled={loading}
              href='https://portal.deminut.com'
            >
              Iniciar sesión
            </a>
          </div>
        </form>
        <p className="form-message" />
      </div>
    </div >
  )
};

export default SignupForm;
