import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import Margin from './Margin';
import Division from './Division';
import Notice from './Notice';
import Ad from './Ad';
import React, { useState } from 'react';
import FriendSection from './FriendSection';
import MyProfile from './Profile';
import { myProfile, friendProfiles, birthProfiles } from './data';
import FriendList from './FriendList';
import Birthday from './Birthday';
import TabBar from './TabBar';
import BirthList from './BirthList';
import Profile from './Profile';

export default function App() {

  const [isOpened, setIsOpened] = useState(false)
  const [isOpened_birth, setIsOpened_birth] = useState(false)
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  const onPressArrow = () => {
    setIsOpened(!isOpened);
  }
  const onPressArrow_birth = () => {
    setIsOpened_birth(!isOpened_birth);
  }

  return (
    <View style={styles.container}>
      <Margin height={30} />
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View>
        <Notice style={styles.NtContainer}/>
      </View>
      <Margin height={20} />
      <View style={{ flex: 1, marginBottom: 50 }}>
        <View style={styles.myProfileContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <MyProfile
              uri={myProfile.uri}
              name={myProfile.name}
              introduction={myProfile.introduction}
            />
            <TouchableOpacity onPress={() => alert('상태메시지버튼클릭')} style={{ backgroundColor: 'white', padding: 5, borderRadius: 20, borderWidth: 1, borderColor: 'lightgray', marginRight: 15 }}>
              <Text style={{ color: 'black', fontWeight: 'bold' }}>상태메시지 올리기</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Margin height={20} />
        <View>
          <Ad style={styles.adContainer} />
        </View>
        <View style={styles.contentContainer}>
          <Margin height={20} />
          <Division />
          <Margin height={5} />
          <Birthday birthProfileLen={birthProfiles.length}
            isOpened_birth={isOpened_birth}
            onPressArrow={onPressArrow_birth} />
          <BirthList data={birthProfiles} isOpened_birth={isOpened_birth} />
          <Division />
          <Margin height={5} />
          <FriendSection friendProfileLen={friendProfiles.length}
            isOpened={isOpened}
            onPressArrow={onPressArrow} />
          <FriendList data={friendProfiles} isOpened={isOpened} />
        </View>
      </View>
      <View style={styles.tabBar}>
        <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  myProfileContainer: {
    marginLeft: 20,
  },
  adContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  NtContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  contentContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});