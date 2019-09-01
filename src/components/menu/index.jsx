import styles from './index.module.css';
import React, { Component } from 'react';

class MenuComponent extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>Blog · 博客</h2>
      </div>
    );
  }
}

export default MenuComponent;

