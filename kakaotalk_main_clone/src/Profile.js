import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

const MusicText = styled.Text`
  color: black;
  font-weight: bold;
`;

const Profile = (props) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: props.uri }} style={{ width: 50, height: 50, borderRadius: 20 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{props.name}</Text>
            <View>
              <Text style={{ fontSize: 12, color: 'grey' }}>{props.introduction}</Text>
            </View>
          </View>
        </View>
        {props.music ? (
          <TouchableOpacity onPress={() => alert('뮤직버튼')} style={{ backgroundColor: 'white', padding: 3, borderRadius: 20, borderWidth: 1, borderColor: '#38d867',marginRight: 10 }}>
            <MusicText>&nbsp;{props.music} &nbsp; ▶&nbsp;</MusicText>
          </TouchableOpacity>
        ) : null}
      </View>
    );
  };
  

export default Profile;
