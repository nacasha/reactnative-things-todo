import React, { PureComponent } from 'react'
import { TextInput as TextInputReact } from 'react-native'

import styles from './styles';

class TextInput extends PureComponent {
  render() {
    const { input, label, options, meta: { touched, error, warning, hasError } } = this.props

    return (
      <TextInputReact
        style={styles.input}
        placeholder={label}
        {...options}
        {...input}
      />
    )
  }
}

export default TextInput
