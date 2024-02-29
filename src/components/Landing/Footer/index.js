import React, { Component } from 'react';
class FooterSection extends Component {
  render() {
    return (
      <>
        <div
          className="height-emulator d-lg-block"
          style={{ height: 75 }}
        />
        <footer className="footer-area footer-fixed">
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Copyright Area */}
                  <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                    {/* Copyright Left */}
                    <div className="copyright-left" style={{ fontSize: '12px' }}>
                      <strong>Teléfono de contacto:</strong><a href="https://wa.me/59892073609" target="_blank" style={{ color: 'blue' }}>(+598) 092 073 609 (Chat WhatsApp)</a> - Montevideo, Uruguay
                    </div>
                    {/* Copyright Right */}
                    <div className="copyright-right" style={{ fontSize: '12px', marginLeft: 16 }}>
                      © 2023 Deminut. Powered By{' '}
                      <a href="https://akalab.tech/es" style={{ color: '#f9b302' }}>AkaLab</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default FooterSection;
