'use strict';

import React, {Component} from 'react';
import {StyleSheet, View,Text,Button, Image,TextInput,ActivityIndicator,Alert,AsyncStorage} from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading:false,
      isLogin:true,
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  _signUp(){
    if(this.state.isLogin){
      this.setState({isLogin:false});
    } else {
      this.setState({isLoading:true});
      let that = this;
      let {username,password} = this.state;
    }
  }

  _login(){
    if(!this.state.isLogin){
      this.setState({isLogin:true});
      // return;
    }
    this.setState({isLoading:true});
    this._goToHome('uuid');
  }


  _goToHome(uid){
    // AsyncStorage.multiSet([['isLoggedIn', 'true'],['userId',uid]]);
    this.props.navigation.navigate('Home',{uid})
  }

  _showAlert(title,msg){
    return(Alert.alert(
      title, msg,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    ))
  }
  render() {
    return (
      <View style={styles.container}>



        {
          this.state.isLoading ?
            <View style={{flex:1,justifyContent:'center'}}>
              <ActivityIndicator size="large" color='orange' />
            </View>
            :
            <View>
              <Button
                title={this.state.isLogin ? "Login" : "Back"}
                onPress={() => this._login()}
              />
              <Button
                title="SignUp"
                onPress={() => this._signUp()}
              />
            </View>

        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
  },
});

export default LoginScreen;