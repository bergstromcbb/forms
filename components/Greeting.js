import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Greeting extends Component {
  render () {
    const { name } = this.props
    return (
      <div>
        Hello, {name}
      </div>
    )
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}
