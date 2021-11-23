import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {IMAGES, COLORS, SharedStyles} from '../../common';

import styles from './styles';

export const RecipeCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {/* <IconFontAwesome name="heart"/> */}
        <IconFontAwesome name="heart-o" size={23} />
      </View>
      <Pressable>
        <Image source={IMAGES.dummyImage} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.catgText}>Fried Chicken</Text>
        </View>
      </Pressable>
    </View>
  );
};
