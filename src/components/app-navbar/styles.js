import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: Metrics.spacing.s1,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 100,
    margin: -Metrics.padding[1],
  },
  buttonInside: {
    padding: Metrics.padding[1]
  },
  buttonIcon: {
    color: Colors.white,
    fontSize: Fonts.iconography.small
  },
  title: {
    ...Fonts.typography.title,
    flex: 1,
    color: Colors.white,
    fontWeight: 'bold',
    paddingLeft: Metrics.spacing.s1
  },
  rightComponent: {
    width: 65,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default styles
