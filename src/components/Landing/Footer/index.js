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
                      <strong>Teléfono de contacto:</strong><a href="https://wa.me/+59894157315" style={{ color: 'blue' }}>+59894157315 (Chat WhatsApp)</a> - Montevideo, Uruguay
                    </div>
                    {/* Copyright Right */}
                    <div className="copyright-right" style={{ fontSize: '12px', marginLeft: 16 }}>
                      © 2021 Deminut. Made with <i className="fas fa-heart" /> By{' '}
                      <a href="/#" style={{ color: '#ff1744' }}>Reach</a>
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
