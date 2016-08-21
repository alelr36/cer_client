import { handleActions } from 'redux-actions'
import * as actionTypes from 'constants/action-types'

const { AUTH } = actionTypes

const initialState = {
  user: {}
}

export default handleActions({
  [`${AUTH.LOGIN}_PENDING`]: (state) => ({
    ...state,
    user: {}
  }),
  [`${AUTH.LOGIN}_FULFILLED`]: (state, action) => ({
    ...state,
    user: { token: action.payload.data.token }
  }),
  [`${AUTH.LOGIN}_REJECTED`]: (state) => ({
    ...state,
    user: {}
  }),
  [`${AUTH.LOGOUT}`]: (state) => state
}, initialState)
