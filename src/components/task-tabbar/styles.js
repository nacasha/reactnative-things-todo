import { StyleSheet } from 'react-native'
import { Fonts } from '../../themes';

const styles = StyleSheet.create({
  tab: {
    paddingTop: 7,
  },
  text: {
    ...Fonts.typography.normal,
    color: '#FFF',
    fontWeight: 'bold'
  },
  underline: {
    backgroundColor: '#FFF'
  }
})

export default styles
