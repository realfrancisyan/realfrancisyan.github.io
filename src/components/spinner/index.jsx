import styles from './index.module.css'
import React, { Component } from 'react'

class SpinnerComponent extends Component {
  render() {
    return <div className={styles.loader}></div>
  }
}

export default SpinnerComponent
