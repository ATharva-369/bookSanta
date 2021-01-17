import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,FlatList,Alert} from 'react-native';
import db from '../config'
import firebase from 'firebase'
import {ListItem} from 'react-native-elements'
import MyHeader from '../components/Header';
export default class Donate extends React.Component {
  constructor(){
    super();
    this.state={
      requestedList:[],
    }
    this.request = null;
  }
  getList = ()=>{
    this.request=db.collection('requestedBooks').onSnapshot((s)=>{
      var bookList = s.docs.map(t=>{
        t.data()
      })
      this.setState({
        requestedList:bookList
      }
      )
    })
  }
  componentDidMount(){
    this.getList();
  }
  keyExtractor = (item,index)=>index.toString()
  renderItem = ({item,i})=>{
    return(
      <ListItem key={i}
      title={item.bookName}
      subtitle={item.reason}
      titleStyle={{color:'black', fontWeight:'bold'}}
      rightElement={
       < TouchableOpacity>
       <Text>View</Text>
       </ TouchableOpacity>
      } bottomDivider/>
    )
  }
  render(){
  return (
    <View >
      <MyHeader title="Donate Books" navigation={this.props.navigation}/>
  {this.state.requestedList.length===0?(<View><Text>No request to show</Text></View>):(<FlatList 
  keyExtractor={
    this.keyExtractor
  }
  data={this.state.requestedList}
  renderItem = {this.renderItem}
  />)}
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