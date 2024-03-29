import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons'; 
import { getBottomSpace } from 'react-native-iphone-x-helper';

const bottomSpace = getBottomSpace()

const TabButton = ({ isSelected, onPress, activeIconName, 
  inactiveIconName, isIconFontisto, 
  isIconIonicons, navigation }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      {isIconFontisto && <Fontisto name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />}
      {isIconIonicons && <Ionicons name={isSelected ? activeIconName : inactiveIconName} size={24} color="black" />}
    </TouchableOpacity>
  )
}

const TabBar = ({ selectedTabIdx, setSelectedTabIdx, navigation }) => {
  return (
    <View style={{
      flexDirection: "row",
      marginBottom: bottomSpace,
      borderTopWidth: 0.5,
      borderColor: "grey"
    }}>
      <TabButton
        isSelected={selectedTabIdx === 0}
        onPress={() => setSelectedTabIdx(0)}
        activeIconName={"person"}
        inactiveIconName={"persons"}
        isIconFontisto
        navigation={navigation}
      />
      <TabButton
        isSelected={selectedTabIdx === 1}
        onPress={() => setSelectedTabIdx(1)}
        activeIconName={"chatbubble"}
        inactiveIconName={"chatbubble-outline"}
        isIconIonicons
        navigation={navigation}
      />
      <TabButton
        isSelected={selectedTabIdx === 2}
        onPress={() => setSelectedTabIdx(2)}
        activeIconName={"pricetag"}
        inactiveIconName={"pricetag-outline"}
        isIconIonicons
        navigation={navigation}
      />
      <TabButton
        isSelected={selectedTabIdx === 3}
        onPress={() => { setSelectedTabIdx(3); navigation.navigate('End'); }}
        activeIconName={"add-circle"}
        inactiveIconName={"add-circle-outline"}
        isIconIonicons
        navigation={navigation}
      />
    </View>
  )
}

export default TabBar;
