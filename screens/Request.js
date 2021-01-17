import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TextInput,Alert,KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase'
export default class Request extends React.Component {
  constructor(){
    super();
    this.state={
      userId:firebase.auth().currentUser.email,
      bookName:'',
      reason:''
    }
  }
  createId = ()=>{
return(
  Math.random().toString(36).substring(7)
)
  }
  addRequest = (b,r) =>{
    var id = this.state.userId;
    var randomId = this.createId();
    db.collection('requestedBooks').add({
      userId:id,
      bookName:b,
      reason:r,
      requestId:randomId
    })
   this.setState({
     bookName:'',
     reason:''
   }) 
  return(
    Alert.alert('Book requested successfully')
  ) 
  }
  render(){
    
  return (
    <View >
  <KeyboardAvoidingView>
    <TextInput placeholder='Enter Book Name' onChangeText={(t)=>{
      this.setState({
        bookName:t
      })
    }} value={this.state.bookName}/>
    <TextInput placeholder='Enter the reason for the request'
     multline={true}
     numberOfLines={10}
     onChangeText={(t)=>{
      this.setState({
        reason:t
      })
    }} value={this.state.reason}/>    
  <TouchableOpacity onPress={()=>{
  this.addRequest(this.state.bookName,this.state.reason);
  }}>
    <Text>Request a book</Text>
  </TouchableOpacity>
  </KeyboardAvoidingView>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  buttons: {
    backgroundColor: 'lightblue',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15,
    width: 200,
    height: 100,
    // borderRadius:10
  },
});