import './styles.scss';
import React from 'react';

import * as PortisPowered from 'assets/images/powered-by-portis.png';

const Footer: React.FunctionComponent = () => (
  <footer className="pupper-footer">
    <div className="container">
      <div className="copyright">&copy; 2018 - {new Date().getFullYear()} Portis</div>

      <a href="https://portis.io" target="_blank">
        <img src={PortisPowered} />
      </a>
    </div>
  </footer>
);

export default Footer;
