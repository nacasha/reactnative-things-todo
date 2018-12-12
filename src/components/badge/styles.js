import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignItems: 'flex-end'
  },
  priorityContainer: {
    flexDirection: 'row',
  },
  priorityBox: {
    justifyContent: 'center',
    paddingHorizontal: Metrics.padding[1],
    height: 20,
    backgroundColor: Colors.white
  },
  priorityText: {
    ...Fonts.typography.normal,
    color: Colors.white,
    fontWeight: 'bold'
  },
  triangleCorner: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderBottomWidth: 20,
    borderRightWidth: 30,
    borderBottomColor: 'transparent',
    borderRightColor: Colors.white,
  },
})

export default styles
