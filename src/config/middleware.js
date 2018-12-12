import { applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

const middleware = [
  // Redux Saga Middleware
  sagaMiddleware
]

// Development only middleware
const composeEnhancers = __DEV__ ? composeWithDevTools : compose
const rootMiddleware = composeEnhancers(applyMiddleware(...middleware))

export {
  sagaMiddleware,
  rootMiddleware
}
