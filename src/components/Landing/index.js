import React, { useState, useCallback, useEffect } from 'react';

import Header from './Header/Header';
import Hero from './Hero/Hero';
import OrderFeature from './Features/Order';
import MenuFeature from './Features/Menu';
import Functionality from './Functionality';
import Pricing from './Pricing/Pricing';
import Contact from './Contact/Contact';
import Footer from './Footer';
import Clients from './Clients';
import ReactGA from 'react-ga';

const Landing = () => {
  const [, setLoginVisible] = useState(false);
  const handleLoginVisible = useCallback(() => setLoginVisible(true), [setLoginVisible]);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="homepage-5">
      <div id="scrollUp" title="Scroll To Top">
        <i className="fas fa-arrow-up" />
      </div>
      <div className="main">
        <Header
          imageData={'/img/logo-white.png'}
          onHandleLogin={handleLoginVisible}
        />
        <Hero />
        <div id="features">
          <MenuFeature />
          <OrderFeature />
        </div>
        <Functionality />
        {/* <Clients /> */}
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
