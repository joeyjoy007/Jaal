import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import style1 from './style';
import { loginUser } from '../../server/apis/user';
import { ToastHOC } from '../../helpers/Toast';
import { emailValidation } from '../../helpers/FormValidation';
import { Storage } from '../../storage';
import axios from 'axios';
import { AuthContext } from '../../context';

const Login = ({navigation}) => {
  const [formState, setFormState] = useState({email:"",password:""})
  
  const {signIn} = useContext(AuthContext)

  const Login = async(data)=>{
  //  try {
  //   const response = await loginUser(data)
  //   // console.log(response)
    
  //   if(response.status ===1){
   
  //     ToastHOC.successAlert("Login Success ",response.message)
  //     // await Storage.setItem("userInfo",response)
  //     // await Storage.setItem("token",response.payload.token)
  //     // axios.defaults.headers.common['Authorization'] = response.token;
  //     navigation.navigate("Welcome")
  //   }
  //   else{
  //     ToastHOC.errorAlert("Login failed")
  //   }
  //  } catch (error) {
  //    ToastHOC.errorAlert(error.message)
  //    console.log(error.message)
  //  }
    signIn(data)
  }

  const setFields = (key,value)=>{
    setFormState({...formState,[key]:value})
    // console.log(formState)
  }

  let email,password;

  const error = {
    email,password
  }
  const validateFields = ()=>{
    const {email,password} = formState
    if(!emailValidation.test(email)){
      error["email"] = "write email correctly"
    }
    if(password.length<3){
      error["password"] = "password length should be more than 3 characters"
    }

    if(error.email === undefined && error.password === undefined){
      Login(formState)
    }
    else {
     if (error.email === undefined){
        ToastHOC.errorAlert(error.password)
  
      }
      else if(error.password === undefined){
        ToastHOC.errorAlert(error.email)
      }
    }
    
  }


  return (
    <View style={style1.container}>
      <View style={style1.loginView}>
        <Text style={style1.loginText}>Login</Text>

        <View style={style1.welcomeView}>
          <Text style={style1.welcomeText}>Welcome Back</Text>
        </View>
      </View>

      <View style={style1.inputView}>
        <View>
          {/* <Icon name="user" size={24} /> */}
          <TextInput
            style={style1.input}
            underlineColorAndroid="transparent"
            value={formState.email}
            onChangeText={(email)=>setFields("email",email)}
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
        </View>
    <View>
        <TextInput
          style={style1.input}
          underlineColorAndroid="transparent"
          value={formState.password}
          onChangeText={(password)=>setFields("password",password)}
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
        />

</View>
      </View>

      <View style={style1.recoverView}>
        <Text style={style1.recoverText}>Recover Password</Text>
      </View>

      <TouchableOpacity
        style={style1.loginView1}
        onPress={()=>validateFields()}>
        <View style={style1.loginView0}>
          <Text style={style1.loginText1}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
