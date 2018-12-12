import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './styles';
import CategoryReduxForm from '../../components/redux-form/category-redux-form';

class CategoryFormScreen extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <View style={styles.container}>
        <CategoryReduxForm />
      </View>
    )
  }
}

export default CategoryFormScreen
