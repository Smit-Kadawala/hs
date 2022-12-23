import {StyleSheet, View, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserInput from '../../Assets/utils/components/UserInput';
import SubmitButton from '../../Assets/utils/components/SubmitButton';
import {useSelector, useDispatch, connect} from 'react-redux';
import {getUser, getUserfromSm} from '../../redux/action/Action';

const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const API = 'http://192.168.0.108:8080/api/user';
  const loginSubmit = () => {
    if (userEmail.length <= 0 || userPassword.length <= 0) {
      console.log('Empty');
    } else {
    }
  };

  useEffect(() => {
    dispatch(getUser());
    getUserfromSm(API);
  }, []);
  // const {usersm} = this.props;
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

      <FlatList
        data={user.response}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const mapStateToProps = ({userReducer}) => {
  const {usersm} = userReducer;
  return {
    usersm,
  };
};

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  UserInputStyle: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
});
