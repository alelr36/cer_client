import * as actionTypes from 'constants/action-types'
import * as authApi from 'api/auth'
import { createAction } from 'redux-actions'
import axios from 'axios'

const { AUTH } = actionTypes

export const submitLogin = createAction(AUTH.LOGIN, (user) => {
  const promise = authApi.submitLogin(user.username, user.password)

  return { promise }
}, _.identity)

export const logout = createAction(AUTH.LOGOUT)

export const setToken = createAction(AUTH.SET_TOKEN, (token) => {
  // TODO: is this working?
  /* eslint-disable dot-notation */
  /* Should this use Bearer? */
  if (token) {
    axios.defaults.headers.common['x-access-token'] = token
  } else {
    delete axios.defaults.headers.common['x-access-token']
  }
  /* eslint-disable dot-notation */

  return { token }
})

// TODO: REVIEW THIS
export const redirect = createAction('@@router/LOCATION_CHANGE', pathname => ({
  pathname,
  search: '',
  hash: '',
  state: null,
  action: 'POP',
  key: 'p9t5mj',
  query: {},
  $searchBase: {
    search: '',
    searchBase: ''
  }
}))
