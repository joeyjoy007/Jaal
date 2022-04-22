import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../screens/loginScreen'
import Register from '../screens/registerScreen'
import Welcome from '../screens/welcomePage'

import ItemDetailSearch from '../screens/detailItem'
import ScreenDetail from '../screens/screenDetail'
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const AppRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Register' screenOptions={{
      headerShown:false
    }}>
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="SearchItem" component={ItemDetailSearch} />
    <Stack.Screen name="DetailItem" component={ScreenDetail} />
  </Stack.Navigator>

    
  )
}

export default AppRoutes

const styles = StyleSheet.create({})