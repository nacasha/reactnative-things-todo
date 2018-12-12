import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Metrics.spacing.s2
  },
  searchbox: {
    ...Fonts.typography.input,
    backgroundColor: Colors.white,
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: Metrics.padding[2],
    elevation: 2
  }
})

export default styles
