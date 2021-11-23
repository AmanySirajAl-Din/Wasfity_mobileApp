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

export default function Home() {
  /*
  - To Hide & show elements 
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
    <SafeAreaView
      style={[SharedStyles.center, SharedStyles.flex1, styles.mainView]}>
      <View style={[SharedStyles.flex1]}>
        <Text style={[styles.text, styles.title]}>Let's Eat</Text>
        <Text style={styles.text}>Quality Food</Text>
      </View>
      <View
        style={[SharedStyles.center, SharedStyles.flex1, SharedStyles.flexEnd]}>
        <Icon name="bell" style={[styles.text, styles.iconStyle]} />
      </View>
    </SafeAreaView>
  );
}
