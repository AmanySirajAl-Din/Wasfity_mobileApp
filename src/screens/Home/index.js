import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

import {SharedStyles} from '../../common';
import styles from './styles';

import {SearchBar, Categories} from '../../components';

export default function Home() {
  /*
  ### To Hide & show elements 
  ==========================
  const [show, setShow] = useState(false);
  <View style={[SharedStyles.flex1, SharedStyles.flexEnd, styles.mainView]}>
      {show && <Text style={[styles.text, styles.title]}>Let's Eat </Text>}
      <Text style={styles.text}>Quality Food</Text>

      <Pressable
        onPress={() => {
          // to get show anr reverse it
          setShow(prev => !prev);
        }}>
        <Text>Show</Text>
      </Pressable>
    </View> */
  return (
    <SafeAreaView style={[styles.mainView]}>
      <View style={[SharedStyles.center, styles.headerView]}>
        <View>
          <Text style={[styles.text, styles.title]}>Let's Eat</Text>
          <Text style={styles.text}>Quality Food</Text>
        </View>
        <Pressable style={SharedStyles.flexEnd}>
          <Icon
            name="bell"
            style={[styles.text, SharedStyles.flexEnd, styles.iconStyle]}
          />
        </Pressable>
      </View>
      <SearchBar />
      <Categories />
    </SafeAreaView>
  );
}
