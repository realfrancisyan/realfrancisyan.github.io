import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import { Link } from 'react-router-dom'

const IndexComponent = props => {
  const { state } = props;

  return (
    <section className={styles.container}>
    </section>
  );
};

IndexComponent.propTypes = {
  state: PropTypes.object
};

export default IndexComponent;
