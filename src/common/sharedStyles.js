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
  flex1: {flex: 1},
  flex2: {flex: 2},
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
  hidden: {
    display: 'none',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  redBg: {
    backgroundColor: 'red',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
});
