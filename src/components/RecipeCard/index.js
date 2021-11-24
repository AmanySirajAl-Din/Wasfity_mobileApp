import React from 'react';
import {View, Text, Pressable, Image, TextInput} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import {IMAGES, COLORS, SharedStyles} from '../../common';

import styles from './styles';

export const RecipeCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {/* <IconFontAwesome name="heart"/> */}
        <IconFontAwesome name="heart-o" size={23} color={COLORS.orange} />
      </View>
      <Pressable>
        <Image source={IMAGES.dummyImage} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.catgText}>Fried Chicken</Text>
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
          <Pressable style={styles.btn}>
            <View style={[SharedStyles.center, SharedStyles.spaceBetween]}>
              <Text style={styles.btnText}>Watch Video</Text>
              <IconMaterial name="play-box-outline" size={23} color="white" />
            </View>
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
};
