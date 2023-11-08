import React, { Component } from 'react';
import ContactForm from './ContactForm';

const data = {
  heading: 'Contáctenos',
  headingText: 'Envíenos su consulta y dentro de las próximas 24 horas hábiles nos contactaremos con usted.',
};
class ContactSection extends Component {
  render() {
    return (
      <section id="contact" className="contact-area bg-gray ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-6">
              {/* Section Heading */}
              <div className="section-heading text-center">
                <h2 className="text-capitalize">{data.heading}</h2>
                <p className="d-none d-sm-block mt-4">
                  {data.headingText}
                </p>
                <p className="d-block d-sm-none mt-4">
                  {data.headingTexttwo}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-12 col-md-5">
              {/* Contact Us */}
              <div className="contact-us">
                <p className="mb-3">{data.content}</p>
              </div>
            </div>
            <div className="col-12 col-md-12 pt-4 pt-md-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactSection;
