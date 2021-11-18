import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';

import {SharedStyles} from '../../common';
import {textObj} from './textObj';
import styles from './styles';

import introBg_1 from '../../../assets/images/introBg_1.png';
import introBg_2 from '../../../assets/images/introBg_2.png';
import introBg_3 from '../../../assets/images/introBg_3.png';

export default function Intro() {
  const [pageNum, setPageNum] = useState(0);
  //const [bgStyle, setBgStyle] = useState(styles.introBg_1);
  let imageSrcArr = [introBg_1, introBg_2, introBg_3];
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

  return (
    <View
      style={[SharedStyles.h100, SharedStyles.w100, SharedStyles.container]}>
      <ImageBackground
        source={imageSrcArr[pageNum]}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>{textObj[pageNum].title}</Text>
        <Text style={styles.text}>{textObj[pageNum].text}</Text>
      </ImageBackground>
    </View>
  );
}
