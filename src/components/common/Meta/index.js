import React from 'react';
import { Helmet } from "react-helmet";

const Meta = ({ title }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title}</title>
    <link rel="icon" type="image/png" href="/img/favicon.ico" sizes="16x16" />
    <link rel="canonical" href="https://www.deminut.com" />
  </Helmet>
);

export default Meta;
