
import { all, put, takeLatest, takeEvery } from 'redux-saga/effects'
import Snackbar from 'react-native-snackbar'
import { Actions } from 'react-native-router-flux';

import { TaskTypes, TaskActions } from '../redux/task-redux'
import { Colors } from '../themes/'

const taskSaga = [
  takeLatest(TaskTypes.CREATE_TASK, onCreateTask),
  takeEvery(TaskTypes.UPDATE_TASK_STATUS, onUpdateTaskStatus)
]

export function* onCreateTask() {
  Snackbar.show({
    title: 'New task added',
    duration: Snackbar.LENGTH_SHORT,
  })

  Actions.pop()
}

export async function* onUpdateTaskStatus({ taskId, status }) {
  let statusLabel = status == 1 ? 'Done' : 'Later'
  let isUndo = false

  yield put(TaskActions.updateTaskStatus(taskId, 0))

  Actions.pop()

  Snackbar.show({
    title: `Marked as ${statusLabel}`,
    backgroundColor: Colors.success,
    duration: Snackbar.LENGTH_SHORT,
    action: {
      title: 'UNDO',
      color: 'green',
      onPress: () => {
        isUndo = true
      },
    },
  })

  await new Promise((resolve) => setTimeout(resolve, 1500))

  console.log(isUndo)

}

export default taskSaga
