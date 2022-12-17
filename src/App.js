import {StyleSheet, Button, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import LoginScreen from './screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash Screen"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login Screen"
          component={LoginScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
