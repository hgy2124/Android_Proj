import { View, Image, StyleSheet, Text } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default Notice = (props) => {
  return (
    <View style={[styles.container, { flexDirection: 'row' }, { padding: 7 }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.noticeContainer}>공지사항</Text>
        <Text>8월 업데이트 안내</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <MaterialIcons name="keyboard-arrow-right" size={22} color="grey" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    width: 380,
    backgroundColor: 'lightgrey',
    padding: 4,
    borderRadius: 20,
    alignItems: 'center',
  },
  noticeContainer: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 12,
    padding: 4,
    borderRadius: 20,
    marginRight: 5,
    borderColor: 'black',
  },
});
