import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import mainBg from '../../../assets/images/Background.png';
import logo from '../../../assets/images/logo.png';
import {SharedStyles} from '../../common';

import styles from './styles';

import {useNavigation} from '@react-navigation/core';

export const Splash = () => {
  const [showLogo, SetShowLogo] = useState(false);
  const navigation = useNavigation();

  setTimeout(() => {
    SetShowLogo(true);
    setTimeout(() => {
      console.log('goto Intro');
      //navigation.navigate('Intro'); // name of the screen to go to
      navigation.reset({
        index: 0,
        routes: [{name: 'Intro'}],
      });
    }, 2000);
  }, 1000);

  /* useEffect(() => {}, [showLogo]); */

  return (
    <SafeAreaView
      style={[SharedStyles.w100, SharedStyles.h100, SharedStyles.center]}>
      <ImageBackground
        source={mainBg}
        style={[SharedStyles.w100, SharedStyles.h100, SharedStyles.flex1]}
        imageStyle={{
          resizeMode: 'cover',
          alignSelf: 'flex-start',
        }}>
        <View
          style={[SharedStyles.w100, SharedStyles.h100, SharedStyles.center]}>
          {showLogo && <Image source={logo} />}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
