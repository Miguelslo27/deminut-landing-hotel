import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => (
  <div className="loading-container">
    <Loader type="Oval" color="#f9b302" height={40} width={40} />
  </div>
);

export default Loading;
