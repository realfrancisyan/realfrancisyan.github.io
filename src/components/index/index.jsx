import React from 'react';
import styles from './index.module.css';
import { Route, Link } from 'react-router-dom';
import About from '../about'

const IndexComponent = props => {
  const { state } = props;

  return (
    <section className={styles.container}>
      <aside>
        <h1>
          <Link to="/">Jiajun Yan</Link>
        </h1>
        <ul className={styles.links}>
          {state.links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  <div className={styles.link}>
                    <img src={item.icon} alt="icon"></img>
                    <span>{item.name}</span>
                  </div>
                </Link>
              </li>
            )
          })}

        </ul>
      </aside>
      <article>
        <Route path="/about" component={About}></Route>
      </article>
    </section>
  );
};
export default IndexComponent;
