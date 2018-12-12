import React, { PureComponent } from 'react'
import { View, ScrollView } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import { TextInput, Label, SubmitButton, PriorityPicker, DateTimePicker } from '../form-components';

import styles from './styles'

class CategoryReduxForm extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <ScrollView>
            <Field
              name="title"
              label="Category Name"
              component={TextInput}
              options={{
                'spellCheck': false,
                'autoCorrect': false
              }}
            />
          </ScrollView>
        </View>
        <SubmitButton text="Submit" onPress={() => { }} />
      </View>
    )
  }
}

CategoryReduxForm = reduxForm({
  form: 'categoryForm'
})(CategoryReduxForm)

export default CategoryReduxForm
