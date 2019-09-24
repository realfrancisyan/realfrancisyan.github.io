import React, { Component } from 'react'
import bindAll from 'lodash.bindall'
import FitnessComponent from '../components/fitness'
import constants from '../common/constants'
import { getStravaData, getToken, getStravaToken } from '../api/fitness'

let retry = 0

class Fitness extends Component {
  constructor() {
    super()

    this.state = {
      records: []
    }

    bindAll(this, [])
  }

  handleGetStravaData() {
    return new Promise((resolve, reject) => {
      getStravaData()
        .then(res => {
          console.log(res)
          this.setState({
            records: res
          })
          resolve()
        })
        .catch(err => {
          console.error('request get strava data failed - ', err)
          // if retry has been 3 times, stops
          retry += 1
          if (retry < 3) {
            this.handleRetrieveData()
          }
          reject(err)
        })
    })
  }

  async handleRetrieveData() {
    await this.handleGetRefreshToken()
    await this.handleGetStravaData()
  }

  handleGetRefreshToken() {
    return new Promise((resolve, reject) => {
      getStravaToken()
        .then(res => {
          if (res.result === constants.STATUS.SUCCESS) {
            localStorage.setItem('stravaToken', res.data.access_token)
            resolve()
          }
        })
        .catch(err => {
          console.error('request get strava token failed - ', err)
          reject(err)
        })
    })
  }

  handleGetToken() {
    return new Promise((resolve, reject) => {
      getToken()
        .then(res => {
          if (res.result === constants.STATUS.SUCCESS) {
            localStorage.setItem('stravaToken', res.data)
          }
          resolve()
        })
        .catch(err => {
          console.error('request get token failed - ', err)
          reject(err)
        })
    })
  }

  async componentDidMount() {
    await this.handleGetToken()
    await this.handleGetStravaData()
  }

  render() {
    return (
      <FitnessComponent
        state={this.state}
        handleFilterPosts={this.handleFilterPosts}
      />
    )
  }
}

export default Fitness
