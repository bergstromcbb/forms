import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Greeting from '../components/Greeting'

class EquipmentMetadata extends Component {
  render () {
    const { name } = this.props

    return (
      <Greeting name={name} />
    )
  }
}

EquipmentMetadata.propTypes = {
  name: PropTypes.string.isRequired
}

function mapStateToProps (state) {
  const { name } = state
  return {
    name
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EquipmentMetadata)
