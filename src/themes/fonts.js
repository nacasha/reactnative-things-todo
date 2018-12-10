import { PixelRatio } from 'react-native'

/**
 * Pixel density
 *
 * Converts a layout size (dp) to pixel size (px).
 * Guaranteed to return an integer number.
 */
const dp = (dp) => PixelRatio.getPixelSizeForLayoutSize(dp)

export default {
  iconography: {
    tiny: 19,
    small: 25,
    normal: 35,
    large: 40,
  },
  typography: {
    title: {
      fontSize: 17
    },
    input: {
      fontSize: 16
    },
    normal: {
      fontSize: 14
    },
    medium: {
      fontSize: 16
    },
    large: {
      fontSize: 20
    }
  }
}
