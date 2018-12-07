import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const IndexComponent = props => {
  const { state } = props;

  return <div>123</div>;
};

IndexComponent.propTypes = {
  state: PropTypes.object
};

export default IndexComponent;
