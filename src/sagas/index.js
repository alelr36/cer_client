import { fork } from 'redux-saga/effects'
import { watchAuthFulfilled, watchLogout } from './auth'

export default function* rootSaga() {
  yield fork(watchAuthFulfilled)
  yield fork(watchLogout)
}
