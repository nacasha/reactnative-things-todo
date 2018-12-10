import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionText: {
    alignItems: 'center',
    textAlign: 'center',
    color: Colors.primaryDark,
    padding: Metrics.padding[0]
  },
})

export default styles
