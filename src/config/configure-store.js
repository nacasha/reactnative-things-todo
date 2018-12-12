import { createStore } from 'redux'
import { persistStore } from 'redux-persist'

import rootSaga from '../redux-sagas'
import reduxPersist from './redux-persist'

import { rootMiddleware, sagaMiddleware } from './middleware'

export default () => {
  let store = createStore(reduxPersist, rootMiddleware)
  let persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
