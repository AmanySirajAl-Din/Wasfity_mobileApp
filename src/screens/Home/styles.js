import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  text: {
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
    paddingEnd: 50,
    paddingStart: 50,
  },
  title: {
    color: COLORS.orange,
    fontFamily: FONTS.bold,
    marginBottom: 10,
  },
});
