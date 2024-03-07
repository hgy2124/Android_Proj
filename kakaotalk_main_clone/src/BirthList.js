import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Profile from './Profile';
import Margin from './Margin';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { MaterialIcons } from '@expo/vector-icons';

const bottomSpace = getBottomSpace();

export default (props) => {
    return props.isOpened_birth ? (
        <View style={{ paddingBottom: bottomSpace }}>
            {props.data.map((item, index) => {
                return (
                    <View key={index} style={{ marginLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Profile
                            uri={item.uri}
                            name={item.name}
                            introduction={item.introduction}
                        />
                        <Margin height={13} />
                        <TouchableOpacity onPress={() => alert('선물하기 버튼이 눌렸습니다!')} style={{ backgroundColor: 'white', padding: 5, borderRadius: 20, borderWidth: 1, borderColor: 'lightgray', marginRight: 15 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>선물하기</Text>
                        </TouchableOpacity>
                    </View>
                )
            })}
            <Margin height={13} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                <Image source={require('./cake.png')} style={{ width: 50, height: 50, borderRadius: 20, marginRight: 10 }} />
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>친구의 생일을 확인해보세요!</Text>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    <MaterialIcons name="keyboard-arrow-right" size={22} color="grey"style={{marginRight: 10}} />
                </View>
            </View>
            <Margin height={13} />
        </View>
    ) : null;
};
