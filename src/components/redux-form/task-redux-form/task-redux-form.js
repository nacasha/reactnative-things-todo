import React, { PureComponent } from 'react'
import { View, ScrollView } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import { TextInput, Label, SubmitButton, PriorityPicker, DateTimePicker } from '../form-components';

import styles from './styles'

class TaskReduxForm extends PureComponent {
  render() {
    const { handleSubmit, onSubmit } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <ScrollView>
            <Field
              name="title"
              label="Task Name"
              component={TextInput}
              options={{
                'spellCheck': false,
                'autoCorrect': false
              }}
            />
            <Field
              name="description"
              label="Description"
              component={TextInput}
              options={{
                'spellCheck': false,
                'autoCorrect': false,
                'multiline': true
              }}
            />
            <Field
              name="category"
              label="Category"
              component={TextInput}
              options={{
                'spellCheck': false,
                'autoCorrect': false
              }}
            />
            <Field
              name="date"
              label="Pick Date & Time"
              component={DateTimePicker}
            />
            <Label>Priority</Label>
            <Field
              name="priority"
              component={PriorityPicker}
            />
            <Field
              name="notifications"
              label="Notifications"
              component={TextInput}
              options={{
                'spellCheck': false,
                'autoCorrect': false
              }}
            />
          </ScrollView>
        </View>
        <SubmitButton text="Add" onPress={handleSubmit(onSubmit)} />
      </View>
    )
  }
}

TaskReduxForm = reduxForm({
  form: 'taskForm'
})(TaskReduxForm)

export default TaskReduxForm
