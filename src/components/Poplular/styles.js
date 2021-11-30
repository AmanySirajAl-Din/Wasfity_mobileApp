import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  text: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 24,
    lineHeight: 25,
  },
  contentContainer: {
    paddingBottom: 430,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});
