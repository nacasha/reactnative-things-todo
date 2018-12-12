import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../redux/root'
import immutableTransform from '../utils/immutable-transform'

import middleware from './middleware'

const persistConfig = {
  storage,
  key: 'root',
  blacklist: ['form'],
  transforms: [immutableTransform]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, middleware)
  let persistor = persistStore(store)

  return { store, persistor }
}
