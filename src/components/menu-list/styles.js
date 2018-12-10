import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
  },
  item: {
    padding: Metrics.spacing.s1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    ...Fonts.typography.medium
  },
  icon: {
    fontSize: Fonts.iconography.small,
    paddingRight: Metrics.spacing.s1
  }
})

export default styles
