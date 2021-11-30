import React, {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SharedStyles} from '../../common';

import {RecipeCard} from '../RecipeCard';

import styles from './styles';
import {dummy_data} from '../../common/dummy';

export const Poplular = ({data, containerStyle, onPress}) => {
  const renderItem = ({item}) => (
    <RecipeCard data={item} onPress={() => onPress(item)} />
  );
  return (
    <>
      <Text style={styles.text}>Recipes</Text>
      {/* <View style={[SharedStyles.center, {flexWrap: 'wrap'}]}>
        {dummy_data.map(item => (
          <RecipeCard />
        ))}
      </View> */}
      <FlatList
        data={dummy_data}
        renderItem={renderItem}
        contentContainerStyle={[styles.contentContainer, containerStyle]}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </>
  );
};
