import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useReducer, useState } from 'react'
import Login from '../screens/loginScreen'
import Register from '../screens/registerScreen'
import Welcome from '../screens/welcomePage'
import {AuthContext} from '../context/index'
import ItemDetailSearch from '../screens/detailItem'
import ScreenDetail from '../screens/screenDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStackScreen from './RootStackNavigator'
import { loginUser } from '../server/apis/user'
import { ToastHOC } from '../helpers/Toast'
import { Storage } from '../storage'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

import SelfProfile from '../screens/profiles/selfProfile/selfProfile'
import CreateProduct from '../screens/product/createProduct'
import FilterProduct from '../screens/filter&sort/filterPage'




const AppRoutes = () => {

  // const [isLoading, setIsLoading] = useState(true)
  // const [userToken, setUserToken] = useState(null)
  const [loadAll, setLoadAll] = useState(false)

  const Stack = createNativeStackNavigator();

  const initialLoginState = {
    isLoading:true,
    userToken:undefined,
    // userName:null
  }

  const loginReducer = (prevState,action)=>{
    switch(action.type){
      case "RETRIVE_TOKEN":
        return{
          ...prevState,
          isLoading:false,
          userToken:action.token,
          
        };
      case "LOGIN":
        return {
          ...prevState,
          isLoading:false,
          userToken:action.token,
          // userName:action.id
        };
        case "LOGOUT":
          return{
            ...prevState,
            userToken:undefined,
            isLoading:false,
            
            // userName:null
          };

        case "SIGNUP":
          return{
            ...prevState,
            isLoading:false,
            userToken:action.token,
            // userName:action.id

          }

    }
  }

  const [loginState, dispatch] = useReducer(loginReducer,initialLoginState)

  const authContext = useMemo(() =>
  ({
    signIn:async (data)=>{
      // setUserToken("TokenExist")
      // setIsLoading(false)
      try {
        const response = await loginUser(data)
  
        
        if(response.status ===1){
         
         await Storage.setItem("token",response.payload.token)
         const getToken = await Storage.getItem("token")
         await Storage.setItem("userInfo",response.payload)
         dispatch({type:"LOGIN",token:await Storage.getItem("token")})
       
         ToastHOC.successAlert("Login Success ",response.message)

        // axios.defaults.headers.common['Authorization'] = response.token;
        // navigation.navigate("Welcome")
        }
        else{
          ToastHOC.errorAlert("Login failed")
        }
       } catch (error) {
         ToastHOC.errorAlert(error.message)
         console.log(error.message)
       }
    },
    signOut:async()=>{
      // setUserToken(null)
      // setIsLoading(false)
      try {
       await Storage.removeItem("token")
       await Storage.removeItem("userInfo")
       
      } catch (error) {
        console.log(error.message)
      }
      dispatch({type:"LOGOUT"})
      ToastHOC.infoAlert("User Logout")
    },
    signUp:()=>{
      // setIsLoading(false)
      // setUserToken("TokenExist")
    }
  }),
   [])

  useEffect(() => {
    setTimeout(async() => {
      let usertoken;
      usertoken = undefined
      try {
        usertoken = await Storage.getItem("token")
        console.log("USERTOKEN",usertoken)
        setLoadAll(true)
     
      } catch (error) {
        console.log(error)
      }
      dispatch({type:"RETRIVE_TOKEN",token:usertoken})
    },1000);
  }, [])
  

  if(loginState.isLoading ){
   return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <ActivityIndicator size="large"/>
    </View>
  }
  return (
   <AuthContext.Provider value={authContext}>
        
    <Stack.Navigator  screenOptions={{
      headerShown:false
    }}>

      {loginState.userToken!==undefined ?(
           <>
           <Stack.Screen name="Welcome" component={Welcome} />
           <Stack.Screen name="SearchItem" component={ItemDetailSearch} />
           <Stack.Screen name="DetailItem" component={ScreenDetail} />
           <Stack.Screen name="Profile" component={SelfProfile}/>
           <Stack.Screen name="CreateProduct" component={CreateProduct}/>
           <Stack.Screen name="FilterProduct" component={FilterProduct}/>
           </>
         
      ):(
           <Stack.Screen name="Auth" component={RootStackScreen} />
      )}
  
   
    </Stack.Navigator>
  </AuthContext.Provider>
    
  )
}

export default AppRoutes

const styles = StyleSheet.create({})