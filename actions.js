import fetch from 'cross-fetch'

export const SET_NAME = 'SET_NAME'

export function setName (name) {
  return {
    type: SET_NAME,
    name
  }
}
