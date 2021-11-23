import React from 'react';
import {Image, ImageBackground} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import {SharedStyles} from '../../common';
import styles from './styles';

import mainBg from '../../../assets/images/Background.png';
import introEffect from '../../../assets/images/Effect4.png';

import {useNavigation} from '@react-navigation/native';

export function IntroScreens() {
  const navigation = useNavigation();

  const gotoHomeScreen = () => {
    console.log('goto Home');
    navigation.navigate('BottomTabsStack'); // name of the screen to go to
    navigation.reset({
      index: 0,
      routes: [{name: 'BottomTabsStack'}],
    });
  };

  return (
    <ImageBackground
      source={mainBg}
      style={[SharedStyles.flex1]}
      imageStyle={{
        resizeMode: 'cover',
        alignSelf: 'flex-start',
      }}>
      <ImageBackground
        source={introEffect}
        resizeMode="contain"
        style={[SharedStyles.flex2]}>
        <Onboarding
          //NextButtonComponent={styles.btnTxt}
          onSkip={gotoHomeScreen}
          onDone={gotoHomeScreen}
          //showDone={true} // a bool flag indicating whether the Done checkmark button is visible. Defaults to true.
          titleStyles={styles.title}
          subTitleStyles={styles.text}
          pages={[
            {
              backgroundColor: '#ffffff00',
              image: (
                <Image source={require('../../../assets/images/food1.png')} />
              ),
              title: 'Delicious Food',
              subtitle: 'Let’s eat some healthy food while steak to cook',
            },
            {
              backgroundColor: '#ffffff00',
              image: (
                <Image source={require('../../../assets/images/food2.png')} />
              ),
              title: 'Healthy & Tasty',
              subtitle: 'Eat today live another memorable day',
            },
            {
              backgroundColor: '#ffffff00',
              image: (
                <Image source={require('../../../assets/images/food3.png')} />
              ),
              title: 'Let’s Eat',
              subtitle: 'Food is really and truly the most effective medicine',
            },
          ]}
        />
      </ImageBackground>
    </ImageBackground>
  );
}
