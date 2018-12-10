import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  niceBoxBehind: {
    position: 'absolute',
    backgroundColor: Colors.primary,
    height: Metrics.spacing.s5,
    width: Metrics.screenWidth
  }
})

export default styles
