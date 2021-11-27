import React from 'react';
import {View, Text, TextInput, Touchable, Pressable} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {SharedStyles} from '../../common';
import styles from './styles';

import {useNavigation} from '@react-navigation/core';

export const SearchBar = () => {
  const navigation = useNavigation();

  const gotoFilter = () => {
    console.log('goto Filter');
    navigation.navigate('HomeStack');
    navigation.navigate('Filter'); // name of the screen to go to
    /* navigation.reset({
      index: 0,
      routes: [{name: 'Filter'}],
    }); */
  };

  return (
    <View style={[SharedStyles.center, styles.mainView]}>
      <View style={[SharedStyles.center, styles.inputContainer]}>
        <View style={styles.iconContainer}>
          <IconEntypo name="magnifying-glass" style={styles.iconStyle} />
        </View>
        <TextInput
          style={[styles.txtBox]}
          placeholder={'Enter movie name ...'}
        />
      </View>

      <Pressable style={[styles.btn, styles.filterBtn]} onPress={gotoFilter}>
        <IconFontAwesome name="filter" style={styles.iconStyle} />
      </Pressable>
    </View>
  );
};
