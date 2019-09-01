import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import IndexComponent from '../components/index/index';
import { getCategories } from '../api/favorites'
import constants from '../common/constants'

class Index extends Component {
  constructor() {
    super();

    this.state = {
      categoryList: []
    };

    bindAll(this, [
      'handleGetCategories'
    ]);
  }

  handleGetCategories() {
    getCategories()
      .then(res => {
        if (res.result === constants.STATUS.SUCCESS) {
          console.log(res.data)
          this.setState({
            categoryList: res.data
          })
        }
      })
      .catch(err => {
        console.log('request get categories failed - ', err);
      })
  }

  componentWillMount() {
    this.handleGetCategories()
  }

  render() {
    return <IndexComponent state={this.state} />;
  }
}
export default Index;
