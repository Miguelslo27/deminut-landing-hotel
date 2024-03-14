import React, { useEffect } from 'react';

import Header from './Header/Header';
import Hero from './Hero/Hero';
import OrderFeature from './Features/Order';
import Functionality from './Functionality';
import Pricing from './Pricing/Pricing';
import Footer from './Footer';
import ReactGA from 'react-ga';
import Establishment from './Features/Establishment';

const Landing = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="homepage-5">
      <div id="scrollUp" title="Scroll To Top">
        <i className="fas fa-arrow-up" />
      </div>
      <div className="main">
        <Header imageData={'/img/logo-white.png'} />
        <Hero />
        <div id="features">
          <Establishment />
          <OrderFeature />
        </div>
        <Functionality />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
