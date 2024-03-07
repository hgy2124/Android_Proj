import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import { useState } from 'react';

export default function Login({ navigation }) {
    const [userId, setUserId] = useState('');
    const [passwd, setPasswd] = useState('');

    const handleLoginButtonPress = () => {
        navigation.navigate('Kakao', { userid: userId }); // 여기서 userId 변수를 사용하여 값을 전달합니다.
    };

    return (
        <View>
            <TextInput
                placeholder='아이디'
                style={styles.input}
                value={userId}
                onChangeText={setUserId}
            />
            <TextInput
                placeholder='비밀번호'
                style={styles.input}
                value={passwd}
                onChangeText={setPasswd}
            />
            <TouchableOpacity onPress={handleLoginButtonPress} style={styles.loginBtn}>
                <Text>로그인</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '83%',
        height: 48,
        paddingLeft: 15,
        borderRadius: 5,
        marginBottom: 18,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
    },
    loginBtn: {
        width: '83%',
        height: 48,
        alignSelf: 'center',
        backgroundColor: "#ffe812",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },

}

)