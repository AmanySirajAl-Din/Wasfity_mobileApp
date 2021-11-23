import React from 'react';
import {Text, View} from 'react-native';
import {SharedStyles} from '../../common';

import {RecipeCard} from '../RecipeCard';

import styles from './styles';

export const Poplular = () => {
  return (
    <>
      <Text style={styles.text}>Most Poplular</Text>
      <View style={SharedStyles.center}>
        <RecipeCard />
        <RecipeCard />
      </View>
    </>
  );
};
