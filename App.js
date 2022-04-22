import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppRoutes from './src/routes/AppRoutes'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
   
          <NavigationContainer>
     <AppRoutes/>
     </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})