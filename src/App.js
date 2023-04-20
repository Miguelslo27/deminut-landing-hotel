import React from 'react';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar';

// importing MyRouts where we located all of our theme
import MyRouts from './routers/routes';

// Bundles multi language support
import './i18n';

const GA_TRACKING_ID = 'UA-169918815-1';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(GA_TRACKING_ID);
  hotjar.initialize(1966468);
}

function App() {
  return (
    <div>
      <ReactNotification />
      <MyRouts />
    </div>
  );
}

export default App;
