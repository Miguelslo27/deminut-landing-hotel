import React, { Component } from 'react';

const data = {
  heading: '¿Cómo funciona?',
  headingText:
    'Tres simples pasos para tus cliente:',
  workData: [
    {
      id: 1,
      iconClass: 'fas fa-qrcode fa-3x',
      title: 'Escanear',
      content:
        'Escanea el código QR para acceder a la carta online.',
    },
    {
      id: 2,
      iconClass: 'fas fa-utensils fa-3x',
      title: 'Elegir',
      content:
        'Elige entre las opciones del menú.',
    },
    {
      id: 3,
      iconClass: 'fas fa-concierge-bell fa-3x',
      title: 'Pedir',
      content:
        'Realiza la orden de forma sencilla y abona desde su celular.',
    },
  ],
};

class Work extends Component {
  state = {
    data: {},
    workData: [],
  };

  render() {
    return (
      <section className="section work-area bg-overlay overflow-hidden ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              {/* Work Content */}
              <div className="work-content text-center">
                <h2 className="text-white">{data.heading}</h2>
                <p className="text-white my-3 mt-sm-4 mb-sm-5">
                  {data.headingText}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {data.workData.map((item, idx) => {
              return (
                <div key={`w_${idx}`} className="col-12 col-md-4">
                  {/* Single Work */}
                  <div className="single-work text-center p-3">
                    {/* Work Icon */}
                    <div className="work-icon">
                      <span className="icon align-self-center">
                        <i
                          className={item.iconClass}
                          color="#FFFFFF"
                        />
                      </span>
                    </div>
                    <h3 className="text-white py-3">{item.title}</h3>
                    <p className="text-white">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
