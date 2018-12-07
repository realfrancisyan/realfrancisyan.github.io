import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import IndexComponent from '../components/index/index';

class Index extends Component {
  constructor() {
    super();

    this.state = {};

    bindAll(this, []);
  }

  render() {
    return <IndexComponent state={this.state} />;
  }
}
export default Index;
