import React from 'react';
import {Image, ImageBackground} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {COLORS, FONTS} from '../../common';

import styles from './styles';

export const Simple = () => (
  <Onboarding
  onSkip={()=>{}}
    pages={[
      {
        backgroundColor: '#ffffff00',
        image: <Image source={require('../../../assets/images/food1.png')} />,
        title: 'Delicious Food',
        subtitle: 'Let’s eat some healthy food while steak to cook',
        titleStyles: styles.title,
        subTitleStyles: styles.text,
      },
      {
        backgroundColor: '#ffffff00',
        image: <Image source={require('../../../assets/images/food2.png')} />,
        title: 'Healthy & Tasty',
        subtitle: 'Eat today live another memorable day',
        titleStyles: styles.title,
        subTitleStyles: styles.text,
      },
      {
        backgroundColor: '#ffffff00',
        image: <Image source={require('../../../assets/images/food3.png')} />,
        title: 'Let’s Eat',
        subtitle: 'Food is really and truly the most effective medicine',
        titleStyles: styles.title,
        subTitleStyles: styles.text,
      },
    ]}
  />
);
