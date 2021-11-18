import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: 18,
    padding: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 26,
  },
});
