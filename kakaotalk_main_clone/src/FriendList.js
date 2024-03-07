import React from 'react';
import { View, ScrollView } from 'react-native';
import Profile from './Profile';
import Margin from './Margin';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const bottomSpace = getBottomSpace(); //화면 하단에 비어있는 공간의 높이를 가져와줌 그래서 안겹쳐보이게

export default (props) => {
  return props.isOpened ? (
    <ScrollView showsVerticalScrollIndicator={false} //수직스크롤바 안보이게
    contentContainerStyle={{ paddingBottom: bottomSpace }}>
      {props.data.map((item, index) => {
       return(<View key={index} style={{ marginLeft: 10 }}>
          <Profile
            uri={item.uri}
            name={item.name} 
            introduction={item.introduction}
            music={item.music}
          />
          <Margin height={13} />
        </View>) 
      }
      )}
      
    </ScrollView>) : null; //삼항연산자
};
