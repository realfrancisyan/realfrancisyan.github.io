import React, { Component } from 'react'
import bindAll from 'lodash.bindall'
import IndexComponent from '../components/index/index'
import BlogIcon from '../components/index/images/icon--blog.png'
import FavoritesIcon from '../components/index/images/icon--favorites.png'
import FitnessIcon from '../components/index/images/icon--fitness.png'
import AboutIcon from '../components/index/images/icon--about.png'
// import constants from '../common/constants'

class Index extends Component {
  constructor() {
    super()

    this.state = {
      links: [
        { name: 'Blog', icon: BlogIcon, path: '/blog' },
        { name: 'Favorites', icon: FavoritesIcon, path: '/favorites' },
        { name: 'Fitness', icon: FitnessIcon, path: '/fitness' },
        { name: 'About', icon: AboutIcon, path: '/about' }
      ]
    }

    bindAll(this, [])
  }

  render() {
    return <IndexComponent state={this.state} />
  }
}
export default Index
