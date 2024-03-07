import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Kakao from './src/Kakao';
import End from './src/End';
import TabBar from './src/TabBar';

const Stack = createNativeStackNavigator();

function App() {
  const [selectedTabIdx, setSelectedTabIdx] = React.useState(0);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true }} />
        <Stack.Screen name="Kakao" component={Kakao} options={{ headerShown: false }} />
        <Stack.Screen name="End" component={End} options={{ headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;