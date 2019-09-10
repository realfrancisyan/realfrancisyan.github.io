import React from 'react'
import styles from './index.module.css'
import MenuComponent from '../menu'
import SidebarComponent from '../sidebar'

const AboutComponent = props => {
  // const { state } = props;
  const menu = {
    title: 'About',
    desc: '关于'
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <MenuComponent menu={menu}></MenuComponent>
        <div className={styles.desc}>
          <p>
            Hey, I am Jiajun Yan, a Web Developer currently based in Guangzhou,
            China with strong interests in React, Vue and JavaScript
            performance.
          </p>
          <p>
            Graduated from{' '}
            <a
              href='https://www.cardiff.ac.uk/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Cardiff University
            </a>
            , Wales with a Master’s degree in Computing (Distinction), where I
            found myself truly passionate about Web Technologies, travel and
            making friends.
          </p>
          <p>
            I am active on social media and also in love with writing blog posts
            and taking notes. Feel free to ping me on any of the following
            platforms below.
          </p>

          <h3>
            <a
              href='https://instagram.com/jiajun.yan.travel'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>
            <span> - </span>
            <a
              href='https://github.com/realfrancisyan'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
            <span> - </span>
            <a
              href='https://linkedin.com/in/realfrancisyan'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </h3>
        </div>
      </div>
      <SidebarComponent></SidebarComponent>
    </section>
  )
}

export default AboutComponent
