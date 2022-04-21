import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import style1 from './style';

const Login = () => {
  const [loading, setLoading] = useState(true);

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
          <Icon name="user" size={24} />
          <TextInput
            style={style1.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
        </View>
    <View>
        <TextInput
          style={style1.input}
          underlineColorAndroid="transparent"
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
        onPress={() => console.log('Pressed')}>
        <View style={style1.loginView0}>
          <Text style={style1.loginText1}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
