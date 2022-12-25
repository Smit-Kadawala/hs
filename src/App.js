import {StyleSheet, Button, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import {Provider} from 'react-redux';
import {Store} from './redux/store/store';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
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
          <Stack.Screen
            name="Home Screen"
            component={HomeScreen}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
