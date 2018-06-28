'use strict';

import React, {Component} from 'react';
import {StyleSheet, View,Text, Image,Button,FlatList,AsyncStorage} from 'react-native';
import { NavigationActions } from 'react-navigation';



class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {conversationData:[]}
  }

  static navigationOptions  = ({ navigation }) => {
    return{
      title: 'Home Screen',
      headerRight: <Button
          onPress={()=>{
            firebase.auth().signOut()
              .then((data) => {
                AsyncStorage.multiRemove(['isLoggedIn','userId']);
                const resetAction = NavigationActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'Login'})],
                });
                navigation.dispatch(resetAction);
                console.log('logout success');
              })
              .catch(function(error) {
                console.log('home screen logout error',error)
              })
          }
          }
          title="Sign out"
        />
    }

  };



  componentWillMount() {
  }

  componentDidMount(){
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{height:10}}></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default HomeScreen;