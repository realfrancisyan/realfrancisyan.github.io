import React, { Component } from 'react'
import bindAll from 'lodash.bindall'
import BlogComponent from '../components/blog'
import constants from '../common/constants'
import { listPosts, listTags, listPostsOfTag } from '../api/blog'

class Blog extends Component {
  constructor() {
    super()

    this.state = {
      posts: [],
      tags: []
    }

    bindAll(this, ['handleListPosts', 'handleListTags', 'handleFilterPosts'])
  }

  handleListPosts() {
    if (this.isListPosts) return
    this.isListPosts = true
    const onSuccess = res => {
      if (res.result === constants.STATUS.SUCCESS) {
        this.setState({
          posts: res.data
        })
      }
    }
    listPosts()
      .then(onSuccess)
      .catch(err => {
        console.error('request list posts failed - ', err)
      })
      .finally(() => {
        this.isListPosts = false
      })
  }

  handleListTags() {
    if (this.isListTag) return
    this.isListTag = true

    const onSuccess = res => {
      if (res.result === constants.STATUS.SUCCESS) {
        let tags = res.data
        tags.unshift({
          name: '全部'
        })

        tags.forEach(item => {
          item.isSelected = false
        })

        this.setState({
          tags: res.data
        })
      }
    }

    listTags()
      .then(onSuccess)
      .catch(err => {
        console.error('request list tags failed - ', err)
      })
      .finally(() => {
        this.isListTag = false
      })
  }

  handleFilterPosts(tag) {
    if (this.isFilterPosts) return
    this.isFilterPosts = true

    const onSuccess = res => {
      if (res.result === constants.STATUS.SUCCESS) {
        const { tags } = this.state

        tags.forEach(item => (item.isSelected = tag.name === item.name))

        this.setState({
          posts: res.data,
          tags
        })
      }
    }

    listPostsOfTag({
      type: tag.type
    })
      .then(onSuccess)
      .catch(err => {
        console.error('request list posts failed - ', err)
      })
      .finally(() => {
        this.isFilterPosts = false
      })
  }

  componentDidMount() {
    this.handleListPosts()
    this.handleListTags()
  }

  render() {
    return (
      <BlogComponent
        state={this.state}
        handleFilterPosts={this.handleFilterPosts}
      />
    )
  }
}

export default Blog
