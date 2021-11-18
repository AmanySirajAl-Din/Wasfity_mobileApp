import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
    paddingEnd: 50,
    paddingStart: 50,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 26,
    marginBottom: 10,
  },
});
