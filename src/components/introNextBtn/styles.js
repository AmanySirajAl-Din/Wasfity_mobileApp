import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  btn: {
    backgroundColor: COLORS.orange,
    color: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontFamily: FONTS.medium,
    fontSize: 18,
  },
});
