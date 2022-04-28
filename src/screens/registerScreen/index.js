import {ActivityIndicator, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import style1 from '../loginScreen/style';
import { createUser } from '../../server/apis/user';

import { ToastHOC } from '../../helpers/Toast';
import { emailValidation, mobileValidation } from '../../helpers/FormValidation';
import { Storage } from '../../storage';


const Register = ({navigation}) => {
const [formState, setFormState] = useState({
  name:"",
  email:"",
  password:"",
  mobileNumber:""
})
const [errorText, setErrorText] = useState("")
const [loading, setLoading] = useState(false)


const setFields = (key,value)=>{
  // setFormState([key] = value)
  // console.log(formState)
  setFormState({...formState,[key]:value})

 

}
let email,mobileNumber;

const error = {
  email,mobileNumber
}

  const RegisterUser = async(data)=>{
   
   try {
     setLoading(true)
    const response = await createUser(data)
// console.log("RES",response)
    if(response.status === 1){
      setLoading(false)
      // console.log("RESPO",response)
    ToastHOC.successAlert("Registeration Success",response.message)
    navigation.replace("Login")
    }
   } catch (error) {
     setLoading(false)
     ToastHOC.errorAlert(error.message)
   }
  
  }

  const validateFields = ()=>{
    const {email,mobileNumber} = formState
   
    if(!emailValidation.test(email)){
    error["email"] = "write email correctly"


    }
    if(!mobileValidation.test(mobileNumber)){
    error["mobileNumber"] = "write mobile number correctly" 
  

    }

    if(error.mobileNumber === undefined && error.email=== undefined){
      // console.log("Registering")
      RegisterUser(formState)  
    }
    else{
      
      if(error.email === undefined){
        ToastHOC.errorAlert(error.mobileNumber)
      }
      else {
        ToastHOC.errorAlert(error.email)
      }
      
    }
  }

  const y = async()=>{
    console.log("REGISTEReee",await Storage.getItem("token"))
  }

  useEffect(() => {
    y()
  }, [])
  




  return (
    <View style={style1.container}>
      <View style={style1.loginView}>
        <Text style={style1.loginText}>Register</Text>

        {/* <View style={style1.welcomeView}>
          <Text style={style1.welcomeText}>Welcome Back</Text>
        </View> */}
      </View>

      <View style={style1.inputView}>
      <View>
        <TextInput
          style={style1.input}
          underlineColorAndroid="transparent"
          value={formState.name}
          onChangeText={(name)=>{setFields("name",name)}}
          placeholder="Name"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
        />

</View>
        <View>
          {/* <Icon name="user" size={24} /> */}
          <TextInput
            style={style1.input}
            underlineColorAndroid="transparent"
            value={formState.email}
            onChangeText={(email)=>{setFields("email",email)}}
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
          onChangeText={(password)=>{setFields("password",password)}}
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
        />

</View>
    <View>
        <TextInput
          style={style1.input}
          underlineColorAndroid="transparent"
          value={formState.mobileNumber}
          onChangeText={(mobileNumber)=>{setFields("mobileNumber",mobileNumber)}}
          placeholder="Mobile Number"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
        />

</View>
 
      </View>

      {/* <View style={style1.recoverView}>
        <Text style={style1.recoverText}>Recover Password</Text>
      </View> */}

      <TouchableOpacity
        style={style1.loginView1}
       onPress={()=>validateFields()}>
        <View style={style1.loginView0}>
          <Text style={style1.loginText1}>{loading ? <ActivityIndicator/>:"Register"}</Text>
        </View>
       
      </TouchableOpacity>

      <TouchableOpacity
        style={style1.loginView1}
       onPress={()=>navigation.navigate("Login")}>
        <View style={style1.loginView0}>
          <Text style={style1.loginText1}>{loading ? <ActivityIndicator/>:"Login"}</Text>
        </View>
       
      </TouchableOpacity>
    </View>
  );
};

export default Register;
