import 'babel-polyfill'

import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware'
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'

import rootReducer from 'reducers/index'
import rootSaga from 'sagas/index'

const logger = createLogger({ collapsed: true })
const router = routerMiddleware(browserHistory)
const promise = promiseMiddleware()
const saga = createSagaMiddleware()

const createStoreWithMiddleware = applyMiddleware(
    router,
    logger,
    promise,
    saga,
    thunkMiddleware)(createStore)

export function startSaga() {
  saga.run(rootSaga)
}

export function configureStore() {
  return createStoreWithMiddleware(rootReducer, {})
}
