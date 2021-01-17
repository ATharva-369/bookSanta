import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ToastAndroid, Alert, Modal,ScrollView } from 'react-native';
import firebase from 'firebase'
import {DrawerItems} from 'react-navigation-drawer';
export default class Menu extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerItems {...this.props}/>
                <TouchableOpacity onPress={()=>{
                    this.props.navigation.navigate('Login');
                    firebase.auth().signOut();
                }}>
                    <Text>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        )
}}