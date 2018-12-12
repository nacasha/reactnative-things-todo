import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  task: require('./task-redux').reducer,
  form: formReducer
})

export default rootReducer
