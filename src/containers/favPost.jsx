import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import FavPostComponent from '../components/favPost';
import {getList} from '../api/favorites'
import constants from '../common/constants'

class FavPost extends Component {
  constructor() {
    super();

    this.state = {
      postType: null,
      postList: []
    };

    bindAll(this, [
    ])
  }

  handleGetPosts() {
    const postType = this.props.match.params.type

    const onSuccess = res => {
      if (res.result === constants.STATUS.SUCCESS) {
        console.log(res)
        this.setState({
          postType,
          postList: res.data
        })
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

  componentWillMount() {
    this.handleGetPosts()
  }

  render() {
    return <FavPostComponent state={this.state} />;
  }
}

export default FavPost;
