import React, { Component } from 'react'
import bindAll from 'lodash.bindall'
import FavPostComponent from '../components/favPost'
import { getList, getAppsInfo } from '../api/favorites'
import constants from '../common/constants'

class FavPost extends Component {
  constructor() {
    super()

    this.state = {
      postType: null,
      postList: [],
      imageIsLoaded: false
    }

    bindAll(this, ['handleExpandDesc', 'handleImageLoaded'])
  }

  handleGetPosts() {
    const postType = this.props.match.params.type

    const onSuccess = res => {
      if (res.result === constants.STATUS.SUCCESS) {
        this.setState({
          postType,
          postList: res.data
        })

        // if post type is 0(ios apps), then request Apple for details
        if (+postType === 0) {
          const appIds = []
          res.data.forEach(item => {
            appIds.push(item.appId)
            item.expandDesc = false
          })

          this.handleGetAppsInfo(appIds)
        }
      }
    }

    getList({
      type: postType
    })
      .then(onSuccess)
      .catch(err => {
        console.error('request get posts failed - ', err)
      })
  }

  handleGetAppsInfo(ids) {
    const onSuccess = res => {
      const { postList } = this.state
      res.results.forEach((item, index) => {
        postList[index].title = item.trackCensoredName
        postList[index].body = item.description
        postList[index].appIcon = item.artworkUrl512
        postList[index].appLink = item.trackViewUrl

        Object.assign(postList[index], item)
      })

      this.setState({
        postList
      })
    }
    getAppsInfo({ id: ids.join() })
      .then(onSuccess)
      .catch(err => {
        console.error('request get apps info failed - ', err)
      })
  }

  handleExpandDesc(item) {
    const { postList } = this.state
    postList.forEach(i => {
      if (i.trackName === item.trackName) {
        i.expandDesc = !i.expandDesc
      }
    })
    this.setState({
      postList
    })
  }

  handleImageLoaded() {
    this.setState({
      imgIsLoaded: true
    })
  }

  componentWillMount() {
    this.handleGetPosts()
  }

  render() {
    return (
      <FavPostComponent
        state={this.state}
        handleExpandDesc={this.handleExpandDesc}
        handleImageLoaded={this.handleImageLoaded}
      />
    )
  }
}

export default FavPost
