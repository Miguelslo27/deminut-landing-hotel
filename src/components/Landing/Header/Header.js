import React from 'react';

const Header = props => {
  const { hideItems } = props;

  return (
    <header
      className="navbar navbar-sticky navbar-expand-lg navbar-dark"
      style={{ backgroundColor: hideItems && "#ffffff", paddingTop: '8px' }}
    >
      <div className="container position-relative">
        <a href="/" style={{ marginTop: 0 }}>
          <img
            className="navbar-brand-regular"
            src="/img/logo-white.png"
            alt="sticky brand-logo"
            style={{ width: 220, marginBottom: 12, marginTop: 16 }}
          />
          <img
            className="navbar-brand-sticky"
            src="/img/logo.png"
            alt="sticky brand-logo"
            style={{ width: 220, marginBottom: 12, marginTop: 12 }}
          />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="navbarToggler"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-inner">
          {/*  Mobile Menu Toggler */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="navbarToggler"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <nav>
            <ul className="navbar-nav" id="navbar-nav">
              {!hideItems && (
                <>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#features">
                      Solución para tu establecimiento
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link scroll" href="#pricing">
                      Planes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://portal.deminut.com">
                      Entrar al portal
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


export default Header;
