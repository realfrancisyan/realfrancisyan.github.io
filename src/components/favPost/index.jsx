import React from 'react';
import styles from './index.module.css';
import MenuComponent from '../menu'
import SidebarComponent from '../sidebar'

const FavPostComponent = props => {
  // const { state } = props;
  const menu = {
    title: 'Favorites',
    desc: '收藏',
    showBack: true,
    path: '/favorites'
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <MenuComponent menu={menu}></MenuComponent>
        
      </div>
      <SidebarComponent></SidebarComponent>
    </section>
  );
};

export default FavPostComponent;
