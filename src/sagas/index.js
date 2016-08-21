import { fork } from 'redux-saga/effects'
import { watchAuthFulfilled } from './auth'

export default function* rootSaga() {
  yield fork(watchAuthFulfilled)
}
