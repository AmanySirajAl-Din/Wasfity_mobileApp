import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray,
    width: 170,
    height: 330,
    margin: 7,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 10,
    marginBottom: 50,
  },
  contentContainer: {
    margin: 10,
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  catgText: {
    fontSize: 18,
    fontFamily: FONTS.medium,
    color: COLORS.black,
  },
  image: {
    width: '100%',
    height: '55%',
    borderRadius: 16,
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  btn: {
    width: '100%',
    backgroundColor: COLORS.orange,
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
  btnText: {
    fontFamily: FONTS.regular,
    color: 'white',
    fontSize: 12,
  },
});
