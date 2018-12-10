import React, { Component } from 'react'
import { DefaultTabBar } from 'react-native-scrollable-tab-view'

import styles from './styles';
import { Colors } from '../../themes';

class TaskTabbar extends Component {
  render() {
    const { props } = this

    return (
      <DefaultTabBar {...props}
        underlineStyle={styles.underline}
        textStyle={styles.text}
        tabStyle={styles.tab}
        backgroundColor={Colors.primary}
      />
    )
  }
}

export default TaskTabbar
