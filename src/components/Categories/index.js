import React, {useEffect, useState} from 'react';
import {Text, View, Pressable, Image, ScrollView, FlatList} from 'react-native';

import {IMAGES, SharedStyles} from '../../common';
import {Poplular} from '../Poplular';

import styles from './styles';

import {CategoriesList} from '../../services/randomRecipe';

const categoriesObj = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Pasta',
  'Sweets',
  'Salads',
];

export const Categories = ({data, containerStyle, onPress}) => {
  //const renderItem = ({item}) => <Category />;
  const [dataList, setDataList] = useState();
  const onLoad = async () => {
    const data = await CategoriesList();
    console.log(data.data.meals);
    setDataList(data.data.meals);
  };

  useEffect(() => {
    onLoad();
  }, []);

  const renderItem = ({item}) => (
    <Category data={item} onPress={() => onPress(item)} />
  );
  return (
    <>
      <Text style={[styles.text]}>Categories</Text>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        contentContainerStyle={[styles.contentContainer_1, containerStyle]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
      <Poplular />
    </>
  );
};

export const Category = ({data, onPress}) => {
  return (
    <Pressable style={styles.container}>
      <Image
        source={IMAGES[data.strCategory] || IMAGES.dummyImage}
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.catgText}>{data.strCategory}</Text>
      </View>
    </Pressable>
  );
};
