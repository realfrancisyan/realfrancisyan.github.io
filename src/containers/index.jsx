import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import IndexComponent from '../components/index/index';
import constants from '../common/constants'

class Index extends Component {
  constructor() {
    super();

    this.state = {
      categoryList: []
    };

    bindAll(this, [
    ]);
  }


  componentWillMount() {
  }

  render() {
    return <IndexComponent state={this.state} />;
  }
}
export default Index;
