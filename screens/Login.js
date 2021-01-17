import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, ToastAndroid, Alert, Modal,ScrollView } from 'react-native';
import db from '../config'
import firebase from 'firebase'
// import SantaAnimation from '../components/SantaClaus';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state={
        email:'',
        password:'',
        modalVisible:false,
        name:'',
        contact:'',
        address:'',
        confirmPassword:''
        }
    }
    modalForm = ()=>{
        return(
            <Modal animationType='fade' transparent={true} visible={this.state.modalVisible}>
                <View>
                    <ScrollView style={{width:'100%'}}>
                <KeyboardAvoidingView>
                    <Text>Registration</Text>
                    <TextInput placeholder="Name" maxLength={25} onChangeText={(t)=>{
                        this.setState({
                            name:t
                        })
                    }}/>
                 <TextInput placeholder="Contact" keyboardType='number-pad' maxLength={10} onChangeText={(t)=>{
                        this.setState({
                            contact:t
                        })
                    }}/>
                 <TextInput placeholder="Address" multiline={true} onChangeText={(t)=>{
                        this.setState({
                            address:t
                        })
                    }}/>  
                <TextInput placeholder="Email" keyboardType='email-address' onChangeText={(t)=>{
                        this.setState({
                            email:t
                        })
                    }}/>      
                    <TextInput placeholder="Password" maxLength={25} secureTextEntry={true} keyboardType='default' onChangeText={(t)=>{
                        this.setState({
                            password:t
                        })
                    }}/>       
                    <TextInput placeholder="Comfirm Password" maxLength={25} secureTextEntry={true} onChangeText={(t)=>{
                        this.setState({
                            confirmPassword:t
                        })
                    }}/> 
                <TouchableOpacity onPress={()=>{
                        this.signup(this.state.email,this.state.password,this.state.confirmPassword);
                    }
                }>
                    <Text>
                        Register
                    </Text>  
                    </TouchableOpacity>                  
                <TouchableOpacity onPress={()=>{
                    this.setState({
                        modalVisible:false
                    })
                }}>
                    <Text>
                        Cancel
                    </Text>
                    </TouchableOpacity>                                                        
                </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
    login = async (e,p)=>{
        if(e&&p){
            try {
              const RESPONSE = await firebase.auth().signInWithEmailAndPassword(e,p)  
              if(RESPONSE){
                  Alert.alert("Successfully logged in");
                this.props.navigation.navigate('Donate')
              }
            } catch (error) {
                switch(error.code){
                    case 'auth/user-not-found': Alert.alert('User does not exist')
                    break;
                    case 'auth/invalid-email':Alert.alert('Invalid')
                    break;
                }
            }
        }
        else{
            Alert.alert('Kindly enter email-address and password')
        }
    }
    signup = async (e,p,cp)=>{
        if(p!==cp){
            return(
                Alert.alert('Passwords not matching')
            )
        }
        else{

        
        firebase.auth().createUserWithEmailAndPassword(e,p).then((r)=>{
            db.collection('users').add({
                name:this.state.name,
                contact:this.state.contact,
                email:this.state.email,
                password:this.state.password
            })
            return Alert.alert("User Added Successfully",'',[{
                text:'OK',onPress:()=>{
                    this.setState({
                        modalVisible:false
                    })
                }
            }]);
        })
        .catch(function(error){
            var ec = error.code;
            var em = error.message;
            return Alert.alert(em);
        })
    }
    }
   render(){
       return(
           <View style={{marginTop:100}}>
               {this.modalForm()}
               <TextInput placeholder='Enter your email-address' keyboardType='email-address' onChangeText={(t)=>{
                   this.setState({
                       email:t
                   })
               }}/>
               <TextInput placeholder='Enter your password' keyboardType='email-address' secureTextEntry={true} onChangeText={(t)=>{
                   this.setState({
                       password:t
                   })
               }}/>
               <TouchableOpacity onPress={()=>{
                   this.login(this.state.email,this.state.password)
               }}>
                   <Text>Login</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>{
                   this.setState({
                       modalVisible:true
                   })
               }}>
                   <Text>Signup</Text>
               </TouchableOpacity>
            </View>
       )
   } 
}