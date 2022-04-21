import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../screens/loginScreen'
import Register from '../screens/registerScreen'
import Welcome from '../screens/welcomePage'


const AppRoutes = () => {
  return (
    <View>
    {/* <Login/> */}
    {/* <Register/> */}
    <Welcome/>
    </View>
  )
}

export default AppRoutes

const styles = StyleSheet.create({})