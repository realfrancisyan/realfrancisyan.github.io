import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import FavPostComponent from '../components/favPost';
import * as qs from 'query-string';

class FavPost extends Component {
  constructor() {
    super();

    this.state = {
      postType: null
    };

    bindAll(this, [
    ]);
  }

  handleParseQueryString() {
    const parsed = qs.parse(this.props.location.search)
    return parsed
  }

  componentWillMount() {
    const qs = this.handleParseQueryString()

    this.setState({
      postType: qs.type
    })
  }

  render() {
    return <FavPostComponent state={this.state} />;
  }
}

export default FavPost;
