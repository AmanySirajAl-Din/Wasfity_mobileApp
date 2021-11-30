import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../common';

export default StyleSheet.create({
  text: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: 24,
    lineHeight: 25,
  },
  container: {
    backgroundColor: COLORS.lightGray,
    width: 150,
    height: 150,
    margin: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 10,
    marginBottom: 20,
  },
  contentContainer: {
    margin: 10,
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  catgText: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    color: COLORS.orange,
  },
  image: {
    width: '100%',
    height: '75%',
    borderRadius: 16,
  },
  contentContainer_1: {
    paddingBottom: 100,
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 30,
  },
});
