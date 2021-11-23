import React from 'react';
import {View, Text, TextInput, Touchable, Pressable} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import {SharedStyles} from '../../common';
import styles from './styles';

export const SearchBar = () => {
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

      <Pressable style={[styles.btn, styles.filterBtn]}>
        <IconFontAwesome name="filter" style={styles.iconStyle} />
      </Pressable>
    </View>
  );
};
