import React, { Component } from 'react'
import bindAll from 'lodash.bindall'
import FavoritesComponent from '../components/favorites'
import { getCategories } from '../api/favorites'
import constants from '../common/constants'

class Favorites extends Component {
  constructor() {
    super()

    this.state = {
      categoryList: []
    }

    bindAll(this, ['handleGetCategories'])
  }

  // get post titles
  handleGetCategories() {
    getCategories()
      .then(res => {
        if (res.result === constants.STATUS.SUCCESS) {
          this.setState({
            categoryList: res.data
          })
        }
      })
      .catch(err => {
        console.error('request get categories failed - ', err)
      })
  }

  componentDidMount() {
    this.handleGetCategories()
  }

  render() {
    return <FavoritesComponent state={this.state} />
  }
}

export default Favorites
