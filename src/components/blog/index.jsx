import React from 'react'
import styles from './index.module.css'
import MenuComponent from '../menu'
import SidebarComponent from '../sidebar'
import { Link } from 'react-router-dom'
import moment from 'moment'

const BlogComponent = props => {
  const { state, handleFilterPosts } = props
  const menu = {
    title: 'Blog',
    desc: '博客'
  }

  const filter = () => (
    <div className={styles.component}>
      <h3>Filter By:</h3>
      <ul className={styles.tagWrapper}>
        {state.tags.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => handleFilterPosts(item)}
              className={item.isSelected ? styles.isSelected : null}
            >
              {item.name}
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <MenuComponent menu={menu}></MenuComponent>
        <ul>
          {state.posts.map((item, index) => {
            return (
              <li className={styles.post} key={index}>
                <div className={styles.top}>
                  <Link to={{ pathname: `/blog/post/${item.id}` }}>
                    {item.title}
                  </Link>
                  <span className={styles.tag}>{item.tagAlia}</span>
                </div>
                <span className={styles.date}>
                  {moment(item.createdAt).format('MMMM Do, YYYY')}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
      <SidebarComponent filter={filter()}></SidebarComponent>
    </section>
  )
}

export default BlogComponent
