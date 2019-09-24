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

  static getDerivedStateFromProps(props, state) {
    const links = state.links
    links.forEach(link => {
      link.isSelected = link.path === props.location.pathname
    })
    return {
      links
    }
  }

  render() {
    return <IndexComponent state={this.state} />
  }
}
export default Index
