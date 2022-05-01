import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import style1 from './style1';

const SelfProfile = ({route, navigation}) => {
  const {userInfo} = route.params;

 

  const aa = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <ScrollView>
      <View style={style1.container}>
        <View style={style1.View1}>


          <TouchableOpacity style={{borderWidth:1,borderColor:"grey",width:36,height:36,borderRadius:18,
          justifyContent:"center",alignItems:"center"
          }} onPress={()=>navigation.goBack()}>
            <View>
              <Icon name="arrow-back" size={24} color="grey" />
            </View>
          </TouchableOpacity>

          <View style={style1.image}>
            <Image
              source={{uri: userInfo.profilePic}}
              style={{width: 120, height: 120, borderRadius: 60}}
            />
          </View>
          <View style={style1.name}>
            <Text style={{fontSize: 25, fontWeight: '700'}}>
              {userInfo.name}
            </Text>
            <Text style={{lineHeight: 30, fontSize: 14}}>
              {userInfo.mobileNumber}
            </Text>
          </View>
        </View>

        <>
          <View style={style1.allPeopleView}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {aa.map(a => {
                return (
                  <View style={[style1.profiles]}>
                    <Image
                      source={{uri: userInfo.profilePic}}
                      style={{width: 50, height: 50, borderRadius: 25}}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </>
      </View>
    </ScrollView>
  );
};

export default SelfProfile;
