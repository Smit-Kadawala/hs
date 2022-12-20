import {StyleSheet, View, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserInput from '../../Assets/utils/components/UserInput';
import SubmitButton from '../../Assets/utils/components/SubmitButton';
import {getUser} from '../../redux/action/Action';
import {useSelector, useDispatch} from 'react-redux';

const LoginScreen = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [data, setData] = useState([]);
  const {user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  // const getUser = async () => {
  //   try {
  //     const response = await fetch('http://192.168.0.108:8080/api/user');
  //     const json = await response.json();
  //     console.log(json);
  //     setData(json.movies);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const loginSubmit = () => {
    if (userEmail.length <= 0 || userPassword.length <= 0) {
      console.log('Empty');
    } else {
    }
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    // <View>
    //   <UserInput
    //     style={styles.UserInputStyle}
    //     keyboardType={`email-address`}
    //     placeholder={`Enter Email Address`}
    //     value={userEmail}
    //     onChangeText={value => setUserEmail(value)}
    //   />
    //   <UserInput
    //     style={styles.UserInputStyle}
    //     keyboardType={`default`}
    //     placeholder={`Enter Password`}
    //     value={userPassword}
    //     onChangeText={value => setUserPassword(value)}
    //   />
    //   <SubmitButton onPress={loginSubmit} />
    // </View>
    <>
      <FlatList
        data={user}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <Text>
            {console.log(item)}
            {item.title}, {item.releaseYear}
          </Text>
        )}
      />
    </>
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
