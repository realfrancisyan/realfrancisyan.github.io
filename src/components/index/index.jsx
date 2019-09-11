import React from 'react'
import styles from './index.module.css'
import { Route, Link } from 'react-router-dom'
import About from '../about'
import Favorites from '../../containers/favorites'
import FavPost from '../../containers/favPost'
import Blog from '../../containers/blog'
import BlogPost from '../../containers/blogPost'
import Fitness from '../../containers/fitness'

const IndexComponent = props => {
  const { state } = props

  return (
    <section className={styles.container}>
      <aside>
        <h1>
          <Link to='/'>Jiajun Yan</Link>
        </h1>
        <ul className={styles.links}>
          {state.links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  <div className={styles.link}>
                    <img src={item.icon} alt='icon'></img>
                    <span>{item.name}</span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
      <article>
        <Route path='/about' component={About}></Route>
        <Route exact path='/favorites' component={Favorites}></Route>
        <Route path='/favorites/post/:type' component={FavPost}></Route>
        <Route exact path='/blog' component={Blog}></Route>
        <Route path='/blog/post/:id' component={BlogPost}></Route>
        <Route path='/fitness' component={Fitness}></Route>
      </article>
    </section>
  )
}
export default IndexComponent
