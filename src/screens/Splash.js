import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login Screen');
    }, 3000);
  }, []);

  return (
    <View>
      <Text>splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
