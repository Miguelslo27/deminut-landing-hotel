import React, { Component } from 'react';

const data = {
  iconClass: 'far fa-lightbulb text-primary mr-1',
  preHeading: 'Flexible',
  preHeadingspan: 'Pricing',
  heading: 'Nuestros planes',
  headingText: 'Comience ahora a brindar un servicio que marca la diferencia.',
  text: 'Los precios están expresados en dólares estadounidenses (USD).',
  pricingData: [
    {
      id: 1,
      planImage: '/img/price_basic.png',
      planTitle: 'Basic',
      priceSub: '$',
      planPrice: '19.99',
      planBtn: 'Seleccionar',
      features: [
        {
          description: 'Primer mes gratis',
          enabled: true,
        },
        {
          description: '25 códigos QR de regalo*',
          enabled: true,
        },
        {
          description: 'Carta sin anuncios publicitarios',
          enabled: true,
        },
        {
          description: 'Ingreso y modificación de artículos ilimitada',
          enabled: true,
        },
        {
          description: 'Recepción de pedidos de mesa en tiempo real',
          enabled: false,
        },
        // {
        //   description: 'Integración con TPV e impresora térmica',
        //   enabled: false,
        // },
        // {
        //   description: 'Carta multi-idioma',
        //   enabled: false,
        // },
        {
          description: 'Soporte técnico preferencial',
          enabled: false,
        },
      ],
    },
    {
      id: 2,
      planImage: '/img/price_premium.png',
      planTitle: 'Pro',
      priceSub: '$',
      planPrice: '39.99',
      planBtn: 'Seleccionar',
      features: [
        {
          description: 'Primer mes gratis',
          enabled: true,
        },
        {
          description: '25 códigos QR de regalo*',
          enabled: true,
        },
        {
          description: 'Carta sin anuncios publicitarios',
          enabled: true,
        },
        {
          description: 'Ingreso y modificación de artículos ilimitada',
          enabled: true,
        },
        {
          description: 'Recepción de pedidos de mesa en tiempo real',
          enabled: true,
        },
        // {
        //   description: 'Integración con TPV e impresora térmica',
        //   enabled: true,
        // },
        // {
        //   description: 'Carta multi-idioma',
        //   enabled: true,
        // },
        {
          description: 'Soporte técnico preferencial',
          enabled: true,
        },
      ],
    },
  ],
};

class PricingSection extends Component {
  render() {
    return (
      <section
        id="pricing"
        className="section price-plan-area bg-gray overflow-hidden ptb_100"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7">
              {/* Section Heading */}
              <div className="section-heading text-center">
                <h2>{data.heading}</h2>
                <p className="d-none d-sm-block mt-4">
                  {data.headingText}
                </p>
                <p className="d-block d-sm-none mt-4">
                  {data.headingTexttwo}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-lg-12">
              <div className="row price-plan-wrapper">
                {data.pricingData.map((item, idx) => {
                  return (
                    <div
                      key={`p_${idx}`}
                      className="col-12 col-md-6 mt-2"
                    >
                      {/* Single Price Plan */}
                      <div className="single-price-plan text-center p-5">
                        {/* Plan Thumb */}
                        {/* Plan Title */}
                        <div className="plan-title my-2 my-sm-3">
                          <h3 className="text-uppercase" style={{ color: "#f9b302" }}>
                            {item.planTitle}
                          </h3>
                        </div>
                        {/* Plan Price */}
                        <div className="plan-price pb-2 pb-sm-3">
                          <h1 className="color-primary">
                            <small className="fw-7">
                              {item.priceSub}
                            </small>
                            {item.planPrice}
                            <small
                              style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                              }}
                            >
                              /mes
                            </small>
                          </h1>
                        </div>
                        {/* Plan Description */}
                        <div className="plan-description">
                          <ul className="plan-features">
                            {item.features.map((feature, index) => {
                              if (feature.enabled) {
                                return (
                                  <li
                                    className={[
                                      'border-top py-3',
                                      index == 5 &&
                                      'border-bottom py-3',
                                    ].join(' ')}
                                    style={{ color: '#000000' }}
                                  >
                                    <i
                                      className="fas fa-check"
                                      style={{
                                        marginRight: 8,
                                        color: '#43a047',
                                      }}
                                    ></i>
                                    {feature.description}
                                  </li>
                                );
                              } else {
                                return (
                                  <li
                                    className={[
                                      'border-top py-3',
                                      index == 5 &&
                                      'border-bottom py-3',
                                    ].join(' ')}
                                    style={{ color: '#757575' }}
                                  >
                                    {feature.description}
                                  </li>
                                );
                              }
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="row pt-5" style={{ display: 'flex', justifyContent: 'center' }}>
            <strong className="text-body pt-4 fw-5" style={{ textAlign: 'center' }}>{data.text}</strong>
          </div>
          <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
            <p className="fw-5" style={{ textAlign: 'center' }}>* Una vez completado el proceso de registro, nos contactaremos contigo para coordinar la impresión y envío de QRs.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default PricingSection;
