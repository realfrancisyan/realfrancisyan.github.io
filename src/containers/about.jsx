import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import AboutComponent from '../components/about';

class About extends Component {
  constructor() {
    super();

    this.state = {
      categoryList: []
    };

    bindAll(this, [
    ]);
  }

  render() {
    return <AboutComponent state={this.state} />;
  }
}

export default About;
