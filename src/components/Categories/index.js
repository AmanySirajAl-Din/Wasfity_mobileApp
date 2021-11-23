import React from 'react';
import {Text, View, Pressable, Image} from 'react-native';

import {IMAGES, SharedStyles} from '../../common';
import {Poplular} from '../Poplular';

import styles from './styles';

const categoriesObj = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Pasta',
  'Sweets',
  'Salads',
];

export const Categories = () => {
  //const renderItem = ({item}) => <Category />;
  return (
    <>
      <Text style={[styles.text]}>Categories</Text>
      <View style={SharedStyles.center}>
        <Category />
        <Category />
      </View>
      <Poplular />
    </>
  );
};

export const Category = () => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={require('../../../assets/images/Breakfast.png')}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.catgText}>{categoriesObj[0]}</Text>
      </View>
    </Pressable>
  );
};
