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

  const submitRegister = event => {
    setLoading(true);
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Tus contraseñas no coinciden. Verifícalo e inténtalo de nuevo');
      setLoading(false);
    } else if (email && !validateEmail(email)) {
      setError('Escribe una dirección de e-mail válida.');
      setLoading(false);
    } else {
      UserController.signUp(email, password)
        .then(() => {
          ReactGA.event({ category: 'User', action: 'Signup' });
          history.push('/signup/step_one')
        })
        .catch(() => {
          ReactGA.exception({ description: 'Signup: failed', fatal: false })
          setError("Este correo electrónico no está disponible.")
          setLoading(false);
        });
    }
  };

  return (
    <div className="col-12 col-md-8 col-lg-5 mt-5">
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
            <div className="col-12">

              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Correo electrónico"
                  required="required"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Contraseña"
                  required="required"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="verifyPassword"
                  placeholder="Confirmar contraseña"
                  required="required"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12" style={{ marginTop: '8px' }}>
              Al registrarte, confirmas que aceptas los <strong><a href="/signup/agreement">Términos de Servicio y Políticas de Privacidad</a></strong>
              <span>
                <br></br>
                <strong style={{ color: '#ff1744' }}> {error}</strong>
              </span>
              <button
                className="btn btn-bordered w-100 mt-3 mt-sm-4"
                type="submit"
                disabled={loading}
              >
                {loading ? "Cargando" : "Registrarse"}
              </button>
              <div className="login-container">
                <span className="mt-4">
                  <p className="login-title">¿Ya estás registrado?</p>
                  <a href="#" className="login-link" onClick={onLoginRequest}>Iniciar sesión</a>
                </span>
              </div>
            </div>
          </div>
        </form>
        <p className="form-message" />
      </div>
    </div >
  )
};

export default SignupForm;
