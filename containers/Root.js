import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import {
  setName
} from '../actions'
import EquipmentMetadata from './EquipmentMetadata'

const store = configureStore()

window.EquipmentMetadata = {
  store,
  setName
}

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <EquipmentMetadata />
      </Provider>
    )
  }
}
