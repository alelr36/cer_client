import { takeLatest } from 'redux-saga'
import { select, put } from 'redux-saga/effects'
import { setToken, redirect } from 'actions/auth'
import actionTypes from 'constants/action-types'

const { AUTH } = actionTypes

export function* updateAfterAuthSuccess() {
  const { auth } = yield select()

  localStorage.setItem('jwtToken', auth.user.token)

  yield put(setToken(auth.user.token))
  yield put(redirect('/admin'))
}

export function* watchAuthFulfilled() {
  yield* takeLatest(
    [`${AUTH.LOGIN}_FULFILLED`, `${AUTH.LOGIN}_REJECTED`],
    updateAfterAuthSuccess
  )
}

export function* updateAfterLogout() {
  localStorage.removeItem('jwtToken')

  yield put(setToken())
  yield put(redirect('/login'))
}

export function* watchLogout() {
  yield* takeLatest(
      [AUTH.LOGOUT],
      updateAfterLogout
  )
}
