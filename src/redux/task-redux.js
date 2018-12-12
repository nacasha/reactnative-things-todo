import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import R from 'ramda'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createTask: ['task'],
  removeTask: ['taskId'],
  updateTask: ['taskId', 'changes'],
  updateTaskStatus: ['taskId', 'status']
})

export const TaskTypes = Types
export const TaskActions = Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  tasks: []
})

/* ------------- Selectors ------------- */

export const TaskSelectors = {
  selectAllTasks: state => state.task.tasks,
}

/* ------------- Reducers ------------- */

export const createTask = (state, { task }) => {
  const tasks = [...state.tasks, task]

  return state.merge({ tasks })
}

export const removeTask = (state, { taskId }) => {
  const taskIndex = R.findIndex(R.propEq('taskId', taskId))(state.tasks)
  const tasks = R.remove(taskIndex, 1, state.tasks)

  return state.merge({ tasks })
}

export const updateTaskStatus = (state, { taskId, status }) => {
  const taskIndex = R.findIndex(R.propEq('taskId', taskId))(state.tasks)
  const tasks = state.tasks.setIn([taskIndex, 'status'], status)

  return state.merge({ tasks })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_TASK]: createTask,
  [Types.REMOVE_TASK]: removeTask,
  [Types.UPDATE_TASK_STATUS]: updateTaskStatus,
})
