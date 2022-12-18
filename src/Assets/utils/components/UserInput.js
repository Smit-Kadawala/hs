import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const UserInput = props => {
  return (
    <TextInput
      style={props.style ? props.style : styles.input}
      placeholder={props.placeholder ? props.placeholder : null}
      keyboardType={props.keyboardType ? props.keyboardType : 'numeric'}
      onChangeText={props.onChangeText}
      value={props.value ? props.value : ''}
    />
  );
};

export default UserInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
