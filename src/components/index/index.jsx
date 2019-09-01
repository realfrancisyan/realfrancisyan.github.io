import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';
import FooterComponent from '../footer'
import Logo from './images/logo.png'
import moment from 'moment'
import { Link } from 'react-router-dom'

const IndexComponent = props => {
  const { state } = props;

  return (
    <section className={styles.container}>
      <section className={styles.header}>
        <h1>
          <img src={Logo} alt="Logo" />
        </h1>
      </section>

      <ul>
        {
          state.categoryList.map((item, index) => {
            return (
              <li key={index} className={styles.listItem}>
                <Link to={`/favorite-post?type=${item.type}`} className={styles.link}>
                  {/* <h2 className={styles.tag}>{item.tag.toUpperCase()}</h2> */}
                  <div className={styles.postInfo}>
                    <h3 className={styles.postTitle}>{item.title}</h3>
                    <p>{moment(item.createdAt).format('MMMM Do, YYYY')}</p>
                  </div>
                </Link>
              </li>
            )
          })
        }
      </ul>
      <FooterComponent></FooterComponent>
    </section>
  );
};

IndexComponent.propTypes = {
  state: PropTypes.object
};

export default IndexComponent;
