import React, { Component } from 'react'
import { View, Text, DatePickerAndroid, TimePickerAndroid, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput as TextInputReact } from 'react-native'
import Moment from 'moment'

import styles from './styles';

class DateTimePicker extends Component {
  constructor(props) {
    super(props)

    this.handleOnPress = this.handleOnPress.bind(this)
  }

  async handleOnPress() {
    const { input } = this.props

    try {
      const { action: dateAction, year, month, day } = await DatePickerAndroid.open({
        minDate: new Date(),
        date: new Date()
      });
      if (dateAction !== DatePickerAndroid.dismissedAction) {
        try {
          const { action: timeAction, hour, minute } = await TimePickerAndroid.open({
            hour: 14,
            minute: 0,
            is24Hour: false,
          });
          if (timeAction !== TimePickerAndroid.dismissedAction) {
            const selectedDateTime = new Date(year, month, day, hour, minute)

            input.onChange(selectedDateTime)
          }
        } catch ({ code, message }) {
          console.warn('Cannot open time picker', message);
        }
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  }

  render() {
    const { handleOnPress } = this
    const { input, label, options, meta: { touched, error, warning, hasError } } = this.props

    const value = input.value && Moment(input.value).format('DD-MM-YYYY | hh:mm A')

    return (
      <TouchableNativeFeedback onPress={handleOnPress}>
        <View style={{ backgroundColor: 'white' }}>
          <View pointerEvents="none">
            <TextInputReact
              style={[styles.input, { backgroundColor: 'transparent' }]}
              placeholder='Date & Time'
              value={value}
              accessible={false}
              pointerEvents="none"
            />
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default DateTimePicker
