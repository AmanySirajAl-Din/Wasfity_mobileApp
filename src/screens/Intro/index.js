import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';

import {IntroNextBtn} from '../../components';

import {SharedStyles} from '../../common';
import {textObj} from './textObj';
import styles from './styles';

import mainBg from '../../../assets/images/Background.png';
import introEffect from '../../../assets/images/Effect2.png';
import introFood_1 from '../../../assets/images/food1.png';
import introFood_2 from '../../../assets/images/food2.png';
import introFood_3 from '../../../assets/images/food3.png';

export default function Intro() {
  const [pageNum, setPageNum] = useState(0);

  let imageSrcArr = [introFood_1, introFood_2, introFood_3];
  /* useEffect(() => {
    switch(pageNum){
        case 1:
            
    }
  }, [pageNum]); */

  const navigateIntro = toWhich => {
    switch (toWhich) {
      case 'next':
        pageNum++;
        break;
      case 'prev':
        pageNum--;
        break;
      default:
        console.log('invalid');
        break;
    }
  };

  /*  <View style={[SharedStyles.flex, {height: 7}]}>
            <Text style={[styles.text, styles.title]}>
              {textObj[pageNum].title}
            </Text>
            <Text style={styles.text}>{textObj[pageNum].text}</Text>
            <IntroNextBtn />
          </View> */
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
        <ImageBackground
          source={imageSrcArr[pageNum]}
          resizeMode="contain"
          style={SharedStyles.flex1}></ImageBackground>
      </ImageBackground>
      <View style={(SharedStyles.flex1, SharedStyles.flexEnd)}>
        <Text style={[styles.text, styles.title]}>
          {textObj[pageNum].title}
        </Text>
        <Text style={styles.text}>{textObj[pageNum].text}</Text>

        <IntroNextBtn />
      </View>
    </ImageBackground>
  );
}
