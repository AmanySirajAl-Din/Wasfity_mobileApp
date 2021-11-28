import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';

import {IMAGES, COLORS, SharedStyles} from '../../common';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import styles from './styles';

export const RecipeDetails = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
      <View style={[styles.container]}>
        <View style={[styles.iconContainer]}>
          <IconFontAwesome name="heart" size={23} color={COLORS.orange} />
        </View>
        <Image source={IMAGES.dummyImage} style={[styles.image]} />
      </View>
      <View style={[SharedStyles.center, styles.btnContainer]}>
        <Pressable>
          <Text style={[styles.btnText]}>-</Text>
        </Pressable>
        <Text style={[styles.btnText]}>1</Text>
        <Pressable>
          <Text style={[styles.btnText]}>+</Text>
        </Pressable>
      </View>
      <View style={[SharedStyles.center, styles.titleContainer]}>
        <Text style={styles.title}>Grilled Chicken</Text>
        <View style={SharedStyles.center}>
          <IconAntDesign name="star" size={23} color={COLORS.orange} />
          <IconAntDesign name="star" size={23} color={COLORS.orange} />
          <IconAntDesign name="star" size={23} color={COLORS.orange} />
          <IconAntDesign name="star" size={23} color={COLORS.orange} />
          <IconAntDesign name="staro" size={23} color={COLORS.orange} />
        </View>
      </View>
      <View
        style={[
          SharedStyles.center,
          styles.titleContainer,
          {paddingStart: 30, paddingEnd: 30},
        ]}>
        <View style={{alignItems: 'center'}}>
          <IconMaterial name="fire" size={23} color={COLORS.black} />
          <Text style={{color: 'black'}}>Easy</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <IconMaterial name="alarm" size={23} color={COLORS.black} />
          <Text style={{color: 'black'}}>40 Min</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <IconMaterial name="account-group" size={23} color={COLORS.black} />
          <Text style={{color: 'black'}}>4</Text>
        </View>
      </View>
      <Pressable style={[SharedStyles.center, styles.titleContainer]}>
        <Text style={styles.title}>Ingredients</Text>
        <View style={SharedStyles.center}>
          <Text style={{color: 'black'}}>Add to Shopping List</Text>
          <IconFeather name="shopping-bag" size={23} color={COLORS.black} />
        </View>
      </Pressable>
    </View>
  );
};
