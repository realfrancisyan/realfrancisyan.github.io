import React, { Component } from 'react';
import bindAll from 'lodash.bindall';
import IndexComponent from '../components/index/index';
import BlogIcon from '../components/index/images/icon--blog.png'
import FavoritesIcon from '../components/index/images/icon--favorites.png'
import FitnessIcon from '../components/index/images/icon--fitness.png'
import AboutIcon from '../components/index/images/icon--about.png'
// import constants from '../common/constants'

class Index extends Component {
  constructor() {
    super();

    this.state = {
      links: [
        { name: 'Blog', icon: BlogIcon, path: '/' },
        { name: 'Favorites', icon: FavoritesIcon, path: '/' },
        { name: 'Fitness', icon: FitnessIcon, path: '/' },
        { name: 'About', icon: AboutIcon, path: '/' },
      ]
    };

    bindAll(this, [
    ]);
  }

  render() {
    return <IndexComponent state={this.state} />;
  }
}
export default Index;
