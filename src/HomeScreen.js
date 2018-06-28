'use strict';

import React, {Component} from 'react';
import {StyleSheet, View,Text, Image,Button,FlatList,AsyncStorage} from 'react-native';
import { NavigationActions } from 'react-navigation';
import firebase from 'react-native-firebase';
var db = firebase.firestore();



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
          }
          }
          title="Sign out"
        />
    }

  };



  componentWillMount() {
  }

  componentDidMount(){
    this._getToDOList();
  }

  _getToDOList(){
    let username= 'aravindh';
    console.log("******-->");
    let that = this;

    // //get all todo
    // db.collection("users").get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     // console.log("doc",doc);
    //     console.log(`${doc.id} =>`,doc.data());
    //    that._getCollById(doc.id);
    //   });
    // });

    db.collection("users").where("members."+username, "==", true).get().then((querySnapshot) => {
      let wholeData = [];
      querySnapshot.forEach((doc) => {
        // console.log("doc",doc);
        console.log(`${doc.id} =>`,doc.data());
        let alldata = doc.data();
        console.log('all lists',alldata.myCollections);
        that._getlists(alldata.myCollections[0]);

      });
    });
  }

  async _getlists(listname){
    console.log(listname);
    //get all ToDO lIst
    await db.collection("todos/list-1").get().then((querySnapshot) => {
      console.log('lists ->',querySnapshot.data());
      return querySnapshot.data();
    });
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