import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';

import {SharedStyles} from '../../common';
import styles from './styles';

export default function Home() {
  const [show, setShow] = useState(false);
  
  return (
    <View style={(SharedStyles.flex1, SharedStyles.flexEnd, styles.mainView)}>
      {/* <Text style={[styles.text, styles.title]}>Let's Eat</Text> */}
      {show && <Text style={[styles.text, styles.title]}>Let's Eat </Text>}
      <Text style={styles.text}>Quality Food</Text>

      <Pressable
        onPress={() => {
          setShow(prev => !prev);
        }}>
        <Text>Show</Text>
      </Pressable>
    </View>
  );
}
