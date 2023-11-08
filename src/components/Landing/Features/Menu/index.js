import './index.css';
import React, { Component } from 'react';

const data = {
  heading: 'Ofrezca a sus clientes la carta online de su restaurante.',
  headingText: 'Desde sus dispositivos móviles sus clientes podran ver los diferentes platos de su restaurante, utilizar el buscador para encontrar un plato o sección de interés, y ver imágenes de los productos que ofrece.',
  discoverData: [
    {
      id: 1,
      iconClass: 'fas fa-check',
      text: 'Fácil implementación y edición. Los cambios que realice en su carta tienen efecto inmediato.',
    },
    {
      id: 2,
      iconClass: 'fas fa-check',
      text: 'Formato amigable y fácil de usar.',
    },
    {
      id: 3,
      iconClass: 'fas fa-check',
      text: 'Sin necesidad de descargar ninguna app para su uso.',
    },
  ],
  footerText: 'Pruébalo ahora escaneando con la cámara de su celular el código QR que aparece debajo, o haga click en el siguiente',
};
class DiscoverSection extends Component {
  render() {
    return (
      <section className="section discover-area bg-white overflow-hidden ptb_100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              {/* Discover Thumb */}
              <div className="service-thumb discover-thumb mx-auto pt-5 pt-lg-0">
                <img
                  src="img/hero_demo.png"
                  className="device-frame"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              {/* Discover Text */}
              <div className="discover-text pt-4 pt-lg-0">
                <h2 className="pb-4 pb-sm-0">{data.heading}</h2>
                <p className="pt-3 pb-4">
                  {data.headingText}
                </p>
                {/* Check List */}
                <ul className="check-list">
                  {data.discoverData.map((item, idx) => {
                    return (
                      <div key={`do_${idx}`}>
                        <li className="py-2">
                          {/* List Box */}
                          <div className="list-box media">
                            <span className="icon align-self-center">
                              <i className={item.iconClass} style={{ color: '#f9b302' }} />
                            </span>
                            <span className="media-body pl-2">
                              {item.text}
                            </span>
                          </div>
                        </li>
                      </div>
                    );
                  })}
                </ul>
                <p className="pt-3 pb-4">
                  {data.footerText}{' '}
                  <a
                    href="https://portal-stg.deminut.com/menu/?id=dee6d2f0-f735-11ed-a86d-8dfaaa361644"
                    target="_blank"
                    style={{ fontWeight: 'bold', textDecoration: 'underline', display: 'inline' }}>link</a>.
                </p>
                <div className="qr-container" style={{
                  textAlign: 'center',
                }}>
                  <img
                    src="img/demo_qr.png"
                    width={340}
                    style={{ filter: "opacity(70%)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default DiscoverSection;
