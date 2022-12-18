import {StyleSheet, Image, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
const windowWidth = Dimensions.get('window').width;
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login Screen');
    }, 3000);
  }, []);

  return (
    <View style={styles.body}>
      <View style={[styles.logoBackGround]}>
        <Image
          style={{height: 180, width: 220}}
          source={require('../Assets/utils/image/WhiteHart.png')}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  logoBackGround: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    backgroundColor: '#8B0000',
    borderBottomEndRadius: windowWidth / 2,
    borderBottomStartRadius: windowWidth / 2,
  },
});
