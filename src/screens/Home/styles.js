import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  mainView: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
  },
  text: {
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontFamily: FONTS.bold,
    fontSize: 24,
    marginBottom: 10,
    lineHeight: 25,
  },
  title: {
    color: COLORS.orange,
    marginBottom: 0,
  },
  iconStyle: {
    padding: 15,
  },
});
