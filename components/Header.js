import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header,Icon} from 'react-native-elements';
export const MyHeader =(props)=>{
    return(
        <Header 
        leftComponent={<Icon name='bars' type='font-awesome' color='#FFFFFF' onPress={()=>{
            props.navigation.toggleDrawer();
        }}/>}
        centerComponent={{
            text:props.title,
            style:{color:'white',fontSize:22}
        }}
        backgroundColor='#676767'
        />
    )
}
export default MyHeader

