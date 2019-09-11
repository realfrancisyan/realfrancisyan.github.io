import React from 'react'
import styles from './index.module.css'
import MenuComponent from '../menu'
import SidebarComponent from '../sidebar'
// import moment from 'moment'

const FitnessComponent = props => {
  // const { state } = props
  const menu = {
    title: 'Fitness',
    desc: '运动'
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <MenuComponent menu={menu}></MenuComponent>
      </div>
      <SidebarComponent></SidebarComponent>
    </section>
  )
}

export default FitnessComponent
