import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';

import {SharedStyles} from '../../common';
import styles from './styles';

export default function Home() {
  return (
    <View style={(SharedStyles.flex1, SharedStyles.flexEnd, styles.mainView)}>
      <Text style={[styles.text, styles.title]}>Let's Eat</Text>
      <Text style={styles.text}>Quality Food</Text>
    </View>
  );
}
