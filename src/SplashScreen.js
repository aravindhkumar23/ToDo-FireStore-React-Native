'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  AsyncStorage,
  Image,
  ActivityIndicator
} from 'react-native';
import { NavigationActions } from 'react-navigation';
console.disableYellowBox = true;
class SplashScreen extends Component {
  async componentDidMount(){
    try {
      const value = await AsyncStorage.multiGet(['isLoggedIn','userId']);
      // setTimeout(function(){
        console.log('splashscreen:value -> ',value);
        // [["isLoggedIn", null],["auth_token", null]]
        if (value[0][1] != null && value[1][1] !== null){
          // We have data!!
          this._goToHomeScreen(value[1][1]);
        } else {
          this._goToLoginScreen();
        }
      // }, 1);
    } catch (error) {
      // Error retrieving data
    }
  }

  _goToHomeScreen(uid){
    console.log('splashscreen:uid -> ',uid);
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home',params: { uid }})],
    });
    this.props.navigation.dispatch(resetAction);
  }

  _goToLoginScreen(){
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color='orange' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
  },
  bgImage:{
    flex:1,
    resizeMode: 'contain',
    margin:40
  }
});


export default SplashScreen;


// export default SplashScreen;
