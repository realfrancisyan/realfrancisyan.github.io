import React, { Component } from 'react'
import bindAll from 'lodash.bindall'
import BlogPostComponent from '../components/blogPost'
import { listPost } from '../api/blog'
import constants from '../common/constants'

class BlogPost extends Component {
  constructor() {
    super()

    this.state = {
      post: {}
    }

    bindAll(this, ['handleListPost'])
  }

  handleListPost() {
    const id = this.props.match.params.id

    const onSuccess = res => {
      if (res.result === constants.STATUS.SUCCESS) {
        this.setState({
          post: res.data
        })
      }
    }

    listPost({ id })
      .then(onSuccess)
      .catch(err => {
        console.error('request list post failed - ', err)
      })
  }

  componentDidMount() {
    this.handleListPost()
  }

  render() {
    return <BlogPostComponent state={this.state} />
  }
}

export default BlogPost
