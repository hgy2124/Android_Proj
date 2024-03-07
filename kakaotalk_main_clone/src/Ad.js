import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

export default Ad = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://upload3.inven.co.kr/upload/2023/04/22/bbs/i14556137337.png" }}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', // 수평 방향으로 가운데 정렬
    alignItems: 'center', // 수직 방향으로 가운데 정렬
  },
  image: {
    width: 380, // 이미지의 가로 크기를 지정합니다.
    height: 80, // 이미지의 세로 크기를 지정합니다.
  },
});
