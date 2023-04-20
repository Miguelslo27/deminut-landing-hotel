import React, { useState, useRef } from 'react';
import UserController from '../../../controllers/UserController';
import { store } from 'react-notifications-component';

const ContactForm = () => {
  const formRef = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [contactMessage, setContactMessage] = useState();
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    formRef.current.reset();
    UserController.createInterestedUser(name, email, null, subject, contactMessage).then(() => {
      setName();
      setEmail();
      setSubject();
      setContactMessage();
      store.addNotification({
        title: 'Muchas gracias',
        message: 'Tu mensaje se ha enviado. Nos contactaremos a la brevedad.',
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
    }, []).catch(() => setError("No pudimos enviar la información a través de este canal. Por favor, envíanos un mail o escríbenos a nuestro WhatsApp."));
  };

  return (
    <div className="contact-box text-center">
      <form
        ref={formRef}
        onSubmit={submitHandler}
        className="contact-form"
        noValidate="novalidate"
      >
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Nombre"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Correo electrónico (requerido)"
                required="required"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Asunto"
                onChange={e => setSubject(e.target.value)}
                value={subject}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                placeholder="Mensaje (requerido)"
                required="required"
                onChange={e => setContactMessage(e.target.value)}
                value={contactMessage}
              />
            </div>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-lg btn-block mt-3"
              disabled={!email || !contactMessage}
            >
              <span className="text-white pr-3">
                <i className="fas fa-paper-plane" />
              </span>
                Enviar
              </button>
            <p className="mt-4" style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
