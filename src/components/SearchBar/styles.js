import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  mainView: {
    justifyContent: 'space-evenly',
  },
  inputContainer: {
    justifyContent: 'flex-start',
    width: '80%',
    paddingStart: 10,
    borderRadius: 7,
    fontSize: 25,
    backgroundColor: COLORS.lightGrey2,
  },
  txtBox: {
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
  iconStyle: {
    fontSize: 25,
  },
  btn: {
    backgroundColor: COLORS.orange,
    padding: 10,
    borderRadius: 7,
    fontSize: 70,
  },
});
