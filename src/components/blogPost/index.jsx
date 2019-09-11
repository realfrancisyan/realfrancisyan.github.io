import React from 'react'
import styles from './index.module.css'
import MenuComponent from '../menu'
import SidebarComponent from '../sidebar'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../containers/codeBlock'

const BlogPostComponent = props => {
  const { state } = props
  const menu = {
    title: 'Blog',
    desc: '博客',
    showBack: true,
    path: '/blog'
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <MenuComponent menu={menu}></MenuComponent>
        <div className={styles.post}>
          <div className={styles.top}>
            <h2>{state.post.title}</h2>
            <span className={styles.tag}>{state.post.tagAlia}</span>
          </div>
          {state.post.createdAt ? (
            <span className={styles.date}>
              {moment(state.post.createdAt).format('MMMM Do, YYYY')}
            </span>
          ) : null}
        </div>
        <div className={styles.postBody}>
          <ReactMarkdown
            source={state.post.body}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </div>
      <SidebarComponent></SidebarComponent>
    </section>
  )
}

export default BlogPostComponent
