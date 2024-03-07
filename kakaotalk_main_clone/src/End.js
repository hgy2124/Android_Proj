import React from "react";
import { View,Text } from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon'

const End = () => (
    <View>
        <Text>마지막화면</Text>
        <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
    </View>
)

export default End;