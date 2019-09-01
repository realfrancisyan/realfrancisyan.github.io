import React from 'react';
import moment from 'moment'
import './index.module.css'

const FooterComponent = props => {
 return (
  <footer>
   <p>{moment(new Date()).format('YYYY')} &copy; Aura</p>
  </footer>
 );
};

export default FooterComponent;
