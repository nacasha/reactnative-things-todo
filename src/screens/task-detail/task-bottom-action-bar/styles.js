import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../../themes';

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0
  },
  button: {
    paddingVertical: Metrics.padding[1],
    alignItems: 'center',
    width: Metrics.screenWidth / 4
  },
  iconButton: {
    fontSize: Fonts.iconography.small
  }
})

export default styles
