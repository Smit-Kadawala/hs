import {StyleSheet, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserInput from '../../Assets/utils/components/UserInput';
import SubmitButton from '../../Assets/utils/components/SubmitButton';

const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const loginSubmit = () => {
    if (userEmail.length <= 0 || userPassword.length <= 0) {
      console.log('Empty');
    } else {
    }
  };

  return (
    <View>
      <UserInput
        style={styles.UserInputStyle}
        keyboardType={`email-address`}
        placeholder={`Enter Email Address`}
        value={userEmail}
        onChangeText={value => setUserEmail(value)}
      />
      <UserInput
        style={styles.UserInputStyle}
        keyboardType={`default`}
        placeholder={`Enter Password`}
        value={userPassword}
        onChangeText={value => setUserPassword(value)}
      />
      <SubmitButton onPress={loginSubmit} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  UserInputStyle: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
});
