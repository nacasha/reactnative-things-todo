import React, { Component } from 'react'
import { View, Image, TouchableNativeFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

class Avatar extends Component {
  render() {
    const { image } = this.props

    return <Image source={{ uri: image }} style={styles.image} />
  }
}

export default Avatar
