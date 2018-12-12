import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../redux'
import immutableTransform from '../utils/immutable-transform'

const persistConfig = {
  storage,
  key: 'root',
  blacklist: ['form'],
  transforms: [immutableTransform]
}

const reduxPersist = persistReducer(persistConfig, rootReducer)

export default reduxPersist
