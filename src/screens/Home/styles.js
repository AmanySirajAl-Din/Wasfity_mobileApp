import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  mainView: {
    padding: 10,
  },
  headerView: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  text: {
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontFamily: FONTS.bold,
    fontSize: 24,
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
