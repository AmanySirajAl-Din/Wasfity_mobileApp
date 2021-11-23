import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  mainView: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputContainer: {
    justifyContent: 'flex-start',
    width: '83%',
    paddingStart: 10,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray2,
  },
  txtBox: {
    fontFamily: FONTS.medium,
    fontSize: 20,
  },
  iconStyle: {
    fontSize: 25,
  },
  btn: {
    backgroundColor: COLORS.orange,
    padding: '3%',
    paddingStart: '4%',
    paddingEnd: '4%',
    borderRadius: 10,
  },
});
