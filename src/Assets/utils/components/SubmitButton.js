import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const SubmitButton = props => {
  return (
    <TouchableOpacity
      style={props.style ? props.style : styles.button}
      onPress={props.onPress}>
      <Text>{props.text ? props.text : 'Button '}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
