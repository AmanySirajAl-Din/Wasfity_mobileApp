import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from './';

export default StyleSheet.create({
  container: {},
  w100: {
    width: '100%',
  },
  h100: {
    height: '100%',
  },
  center: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainFont: {
    fontFamily: FONTS.regular,
  },
  mainFontBold: {
    fontFamily: FONTS.bold,
  },
  redBg: {
    backgroundColor: 'red',
  },
});
