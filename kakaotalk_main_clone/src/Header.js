import { Ionicons } from '@expo/vector-icons';
import {View,Text} from 'react-native';
import React from 'react'

const IconButton =(props) =>{
    return (
        <View style={{paddingHorizontal:10}}>
            <Ionicons name={props.name} size={24} color="black" />
        </View>
    )
}

export default Header = () => {
    return(
        <View style={{flexDirection:'row', 
        justifyContent:'space-between', 
        paddingVertical:20}}>
            <Text style={{fontSize:22, fontWeight:'bold'}}>친구</Text>
            <View style={{flexDirection:'row'}}>
                <IconButton name="search-outline" />
                <IconButton name="person-add-outline" />
                <IconButton name="musical-notes-outline" />
                <IconButton name="settings-outline" />
            </View>
        </View>

    )
}