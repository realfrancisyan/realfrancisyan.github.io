import React from 'react'
import styles from './index.module.css'
import MenuComponent from '../menu'
import SidebarComponent from '../sidebar'
import SpinnerComponent from '../spinner'
import moment from 'moment'

const FitnessComponent = props => {
  const { state } = props
  const menu = {
    title: 'Fitness',
    desc: '运动'
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <MenuComponent menu={menu}></MenuComponent>
        {!state.records.length ? (
          <SpinnerComponent></SpinnerComponent>
        ) : (
          <ul className={styles.records}>
            {state.records.map((record, index) => {
              return (
                <li className={styles.record} key={index}>
                  <h2 className={styles.date}>
                    {moment(record.start_date)
                      .utcOffset('+0800')
                      .format('MMMM Do, YYYY hh:mm A')}
                  </h2>

                  <span className={styles.type}>{record.type}</span>
                  <div className={styles.stats}>
                    <div className={styles.stat}>
                      Distance:{' '}
                      <span>{Math.round(record.distance) / 1000} km</span>
                    </div>
                    <div className={styles.stat}>
                      Moving Time:{' '}
                      <span>
                        {Math.floor(record.moving_time / 60)} mins{' '}
                        {record.moving_time -
                          Math.floor(record.moving_time / 60) * 60}{' '}
                        secs
                      </span>
                    </div>
                    <div className={styles.stat}>
                      Elevation Gain:{' '}
                      <span>{record.total_elevation_gain} m</span>
                    </div>
                    <div className={styles.stat}>
                      Avg Heart Rate:{' '}
                      <span>{record.average_heartrate} bpm</span>
                    </div>
                    <div className={styles.stat}>
                      Avg Speed: <span>{record.average_speed}</span>
                    </div>
                  </div>
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

export default FitnessComponent
