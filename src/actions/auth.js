import * as actionTypes from 'constants/action-types'
import * as authApi from 'api/auth'
import { createAction } from 'redux-actions'

const { AUTH } = actionTypes

export const submitLogin = createAction(AUTH.LOGIN, (user) => {
  const promise = authApi.submitLogin(user.username, user.password)

  return { promise }
}, _.identity)

// TODO: REVIEW THIS
export const redirect = createAction('@@router/LOCATION_CHANGE', (pathname) => ({
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
