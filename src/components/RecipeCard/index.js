import React from 'react';
import {View, Text, Pressable, Image, TextInput, Linking} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import {IMAGES, COLORS, SharedStyles} from '../../common';

import styles from './styles';

import {useNavigation} from '@react-navigation/core';

export const RecipeCard = ({data, onPress}) => {
  const navigation = useNavigation();

  const gotoRecipeDetails = () => {
    console.log('goto Filter');
    navigation.navigate('RecipeDetails'); // name of the screen to go to
    /* navigation.reset({
      index: 0,
      routes: [{name: 'Filter'}],
    }); */
  };
  console.log(data.meals[0]);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {/* <IconFontAwesome name="heart"/> */}
        <IconFontAwesome name="heart-o" size={23} color={COLORS.orange} />
      </View>
      <Pressable onPress={gotoRecipeDetails}>
        <Image
          source={{uri: data.meals[0].strMealThumb}}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.catgText}>{data.meals[0].strMeal}</Text>
          <View
            style={[
              SharedStyles.w100,
              SharedStyles.center,
              SharedStyles.spaceBetween,
            ]}>
            <Text>120 Min</Text>
            <Text>
              3 <IconMaterial name="account-group" size={20} />
            </Text>
          </View>
          <Pressable
            style={styles.btn}
            onPress={() => {
              Linking.openURL(data.meals[0].strYoutube).catch(err =>
                console.error('Error', err),
              );
            }}>
            <View style={[SharedStyles.center, SharedStyles.spaceBetween]}>
              <Text style={styles.btnText}>Watch Video</Text>
              <IconMaterial name="play-box-outline" size={17} color="white" />
            </View>
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};
