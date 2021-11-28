import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray,
    width: '85%',
    height: 250,
    margin: 7,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 20,
  },
  image: {
    width: '90%',
    height: '75%',
    borderRadius: 20,
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  btnContainer: {
    top: -33,
    width: '40%',
    backgroundColor: COLORS.orange,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingStart: 25,
    paddingEnd: 25,
  },
  btnText: {
    fontFamily: FONTS.regular,
    color: 'white',
    fontSize: 40,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 25,
    color: COLORS.black,
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
  btn: {
    width: '100%',
    backgroundColor: COLORS.orange,
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
});
