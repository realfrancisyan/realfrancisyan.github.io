import React from 'react';
import styles from './index.module.css';
import FooterComponent from '../footer'
import moment from 'moment'

const FavoritePostComponent = props => {
  const { state, handleExpandScreenshots, handleExpandDesc, handleImageLoaded } = props;

  return (
    <div className={styles.container}>
      <section>
        {state.list.length ?(
           <h2>{state.list[0].parentTitle}</h2>
        ): null}

        {
          state.list.map((item, index) => {
            return (
              <div className={styles.appInfo} key={index}>
                <div className={styles.appHeader}>
                  {
                    state.imgLoaded ? null : (
                      <div className={styles.appIcon}></div>
                    )
                  }
                  <img className={styles.appIcon} style={state.imgLoaded ? {} : {display: 'none'}} src={item.artworkUrl512 || item.appIcon} onLoad={handleImageLoaded} alt="icon" />
                  <div className={styles.appDesc}>
                    <h3>{item.trackName || item.title}</h3>
                    <h4>
                      {item.formattedPrice ? <span>{item.formattedPrice}</span> : null}
                      <a href={item.trackViewUrl || item.appLink} target="_blank" rel="noopener noreferrer"><i className="material-icons">link</i></a>
                    </h4>
                    <p>Added on {moment(item.createdAt).format('MMMM Do, YYYY')}</p>
                  </div>
                </div>
                {item.description ? (
                  <div className={styles.desc}>
                    {item.description.split("\n").map((i, key) => {
                      return key < (item.expandDesc ? 1000 : 3) ? <div className={styles.descLine} key={key} onClick={() => handleExpandDesc(item)}>{i}</div> : ''
                    })}
                  </div>
                ) : null}
                {item.screenshotUrls ? (
                  <div className={styles.screenshots}>
                    <h4 onClick={() => handleExpandScreenshots(item)}>Screenshots: <i className="material-icons">{item.expandScreenshots ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i></h4>
                    {
                      item.expandScreenshots ? (
                        <div className={styles.imgArr}>
                          {item.screenshotUrls.map((url, idx) => {
                            return <img src={url} alt="desc" key={idx} />
                          })}
                        </div>
                      ) : null
                    }
                  </div>
                ) : null}
              </div>
            )
          })
        }
      </section>
      <FooterComponent></FooterComponent>
    </div>
  )
};

export default FavoritePostComponent;
