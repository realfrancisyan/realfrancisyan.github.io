import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import FavoritePostComponent from '../components/favorite-post'
import { getList, getAppsInfo } from '../api/favorites'
import constants from '../common/constants'
import * as qs from 'query-string';

class FavoritePost extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      imgLoaded: false
    }

    bindAll(this, [
      'handleExpandScreenshots',
      'handleGetList',
      'handleGetAppsInfo',
      'handleExpandDesc',
      'handleImageLoaded'
    ]);
  }

  handleExpandScreenshots(item) {
    const {list} = this.state
    list.forEach(i => {
      if (i.trackName === item.trackName) {
        i.expandScreenshots = !i.expandScreenshots
      }
    })
    this.setState({
      list
    })
  }

  handleExpandDesc(item) {
    const {list} = this.state
    list.forEach(i => {
      if (i.trackName === item.trackName) {
        i.expandDesc = !i.expandDesc
      }
    })
    this.setState({
      list
    })
  }

  handleParseQueryString() {
    const parsed = qs.parse(this.props.location.search)
    return parsed
  }

  handleGetList() {
    const qs = this.handleParseQueryString()

    getList(qs)
      .then(res => {
        if (res.result === constants.STATUS.SUCCESS) {
          let list = res.data
          list.sort(function (a, b) { return a.order - b.order });
          this.setState({
            list
          })

          const ids = []
          list.forEach(item => {
            ids.push(item.appId)
          })

          if (+qs.type === 0) {
            this.handleGetAppsInfo(ids)
          }
        }
      })
      .catch(err => {
        console.error('request get list failed - ', err)
      })
  }

  handleGetAppsInfo(ids) {
    const onSuccess = res => {
      const list = this.state.list
      let appInfo = res.results
      list.forEach((item, index) => {
        
        appInfo[index].expandScreenshots = false
        appInfo[index].expandDesc = false
        Object.assign(appInfo[index], item)
      })

      this.setState({
        list: appInfo
      })
    }
    getAppsInfo({ id: ids.join() })
      .then(onSuccess)
      .catch(err => {
        console.error('request get apps info failed - ', err);
      })
  }

  handleImageLoaded() {
    console.log(true);
    this.setState({
      imgLoaded: true
    })
  }

  componentWillMount() {
    this.handleGetList()
  }

  render() {
    return (
      <FavoritePostComponent 
        state={this.state} 
        handleExpandScreenshots={this.handleExpandScreenshots} 
        handleExpandDesc={this.handleExpandDesc}
        handleImageLoaded={this.handleImageLoaded}
      />)
  }
}
export default FavoritePost;
