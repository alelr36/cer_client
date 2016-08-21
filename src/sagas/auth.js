import { takeLatest } from 'redux-saga'
import { select } from 'redux-saga/effects'
import setAuthToken from 'utils/setAuthToken'
import actionTypes from 'constants/action-types'

const { AUTH } = actionTypes

export function* updateAfterAuthSuccess() {
  const { auth } = yield select()

  localStorage.setItem('jwtToken', auth.user.token)
  setAuthToken(auth.user.token)
}

export function* watchAuthFulfilled() {
  yield* takeLatest(
    [`${AUTH.LOGIN}_FULFILLED`, `${AUTH.LOGIN}_REJECTED`],
    updateAfterAuthSuccess
  )
}
