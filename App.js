/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from './src/SplashScreen'
import LoginScreen from './src/LoginScreen'
import HomeScreen from './src/HomeScreen'
import { StackNavigator } from 'react-navigation';

export default StackNavigator({
  Splash:{
    screen:SplashScreen
  },
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
