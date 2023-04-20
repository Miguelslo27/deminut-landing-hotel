import './index.css';
import React, { Component } from 'react';
import Ticker from 'react-ticker';

const data = {
  heading: 'Confían en nosotros',
};

const clientImages = Array.from(Array(12), (_, x) => `/img/clients/${x + 1}.png`);
const clientImagesSecondRow = Array.from(Array(12), (_, x) => `/img/clients/${x + 1}b.png`);

class TrustUsSection extends Component {
  render() {
    return (
      <section id="contact" className="contact-area bg-gray ptb_100">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-6">
            {/* Section Heading */}
            <div className="section-heading text-center">
              <h2>{data.heading}</h2>
            </div>
            <div className="section-heading text-center">
              <h4>Estos son algunos de los locales que han decidido cambiarse a la carta QR utilizando Deminut.</h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-12 col-md-12">
            <Ticker>
              {({ index }) => (
                <div className="image-slide-container">
                  {clientImages.map(img => (
                    <div className="image-container">
                      <img
                        src={img}
                        className="image"
                      />
                    </div>
                  ))}
                </div>
              )}
            </Ticker>
          </div>
          <div className="col-12 col-md-12">
            <Ticker direction='toRight'>
              {({ index }) => (
                <div className="image-slide-container">
                  {clientImagesSecondRow.map(img => (
                    <div className="image-container">
                      <img
                        src={img}
                        className="image"
                      />
                    </div>
                  ))}
                </div>
              )}
            </Ticker>
          </div>
        </div>
      </section>
    );
  }
}

export default TrustUsSection;
