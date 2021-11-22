import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  mainView: {},
  text: {
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontFamily: FONTS.bold,
    fontSize: 24,
    paddingStart: 10,
    marginBottom: 10,
    lineHeight: 25,
  },
  title: {
    color: COLORS.orange,
    paddingTop: 10,
    marginBottom: 0,
  },
});
