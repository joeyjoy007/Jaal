import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import AppRoutes from './src/routes/AppRoutes'
import { NavigationContainer } from '@react-navigation/native';
import { initializeAxios } from './src/server';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

const App = () => {

  const appInitialize = async()=>{
    console.log("axios seted up")
    initializeAxios()
  }

  useMemo(() => 
  appInitialize()
  , [])



  return (
   
          <NavigationContainer>
     <AppRoutes/>
     <Toast/>
     </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})