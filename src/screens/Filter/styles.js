import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  mainView: {
    padding: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize: 18,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 24,
  },
});
