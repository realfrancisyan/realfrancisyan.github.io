import React from 'react'
import styles from './index.module.css'
import MenuComponent from '../menu'
import SidebarComponent from '../sidebar'
import SpinnerComponent from '../spinner'
import { Link } from 'react-router-dom'
import moment from 'moment'

const FavoritesComponent = props => {
  const { state } = props
  const menu = {
    title: 'Favorites',
    desc: '收藏'
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <MenuComponent menu={menu}></MenuComponent>
        {!state.categoryList.length ? (
          <SpinnerComponent></SpinnerComponent>
        ) : (
          <ul>
            {state.categoryList.map((item, index) => {
              return (
                <li className={styles.post} key={index}>
                  <Link to={{ pathname: `/favorites/post/${item.type}` }}>
                    {item.title}
                  </Link>
                  <span className={styles.date}>
                    {moment(item.createdAt).format('MMMM Do, YYYY')} ·{' '}
                    {item.count} items
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <SidebarComponent></SidebarComponent>
    </section>
  )
}

export default FavoritesComponent
