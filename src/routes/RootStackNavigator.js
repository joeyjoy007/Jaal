import React from 'react'
import Login from '../screens/loginScreen'
import Regisiter from '../screens/registerScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation,stack}) => (
    <RootStack.Navigator>
        <RootStack.Screen name="Register" component={Regisiter}/>
        <RootStack.Screen name="Login" component={Login}/>
    </RootStack.Navigator>
);

export default RootStackScreen

