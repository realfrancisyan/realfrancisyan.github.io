import styles from './index.module.css';
import React, { Component } from 'react';

class MenuComponent extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>{this.props.menu.title} · {this.props.menu.desc}</h2>
      </div>
    );
  }
}

export default MenuComponent
