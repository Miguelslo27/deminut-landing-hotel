import React, { Component } from 'react';
import './index.css';

const data = {
  heading: 'Haz que tus clientes pidan desde su celular',
  headingTwo:
    'Facilita la experiencia de tus clientes permitiéndoles realizar pedidos directamente desde sus celulares. Recibe las comandas en tu ordenador o tablet, incluyendo todos los detalles y peticiones especiales de tus comensales, para un servicio más eficiente y personalizado.',
  buttonText: 'Saber más',
  thumbOne: '/img/features_thumb.png',
  thumbTwo: '/img/service_thumb_2.png',
  thumbThree: '/img/welcome_mockup_2.png',
  thumbFour: '/img/discover_thumb.png',
  thumbFive: '/img/service_thumb_1.png',
  thumbSix: '/img/discover_thumb_2.png',
};

class ServiceSection extends Component {
  render() {
    return (
      <section className="section service-area bg-gray overflow-hidden ptb_100">
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-12 col-lg-8 order-2 order-lg-1">
              {/* Service Text */}
              <div className="mt-4 service-text pt-4 pt-lg-0">
                <h2 className="mb-2" style={{ textAlign: 'center' }}>{data.heading}</h2>
                <p className="pt-3 pb-4 mt-2" style={{ fontSize: '18px', lineHeight: '1.8em', textAlign: 'center' }}>
                  {data.headingTwo}
                </p>
              </div>
            </div>
            <img
              src="img/pro_demo.png"
              className="pc-frame"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceSection;
