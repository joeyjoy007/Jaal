import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import style1 from './style'

const ScreenDetail = ({route,navigation}) => {

  const{image} = route.params

  return (
    <View>
      <View  style={style1.imageView}>
      <Image style={style1.image} source={image} />
      <View style={style1.container}>
      <View style={style1.textView}> 
        <Text style={style1.text}>Cotton Trench Coat</Text>
        <Text style={[style1.text]}>$72.4</Text>
      </View>

      <View style={{marginTop:10}}>
        <Text style={{fontWeight:"400"}}>Here goes the product description like what is the use of produt</Text>
      </View>

      <View style={{marginTop:10}}>
        <Text style={{fontWeight:"400"}}>14 days</Text>
      </View>

      <View style={style1.sizeView}> 
        <Text style={style1.text}>Size</Text>
        <Text style={[style1.text]}>All Parameters--</Text>
      </View>

      <View style={style1.inputView}> 
        <TextInput
        placeholder='Waist'
    style={style1.input}
        />
       
      </View>
      </View>
      </View>
   
    </View>
  )
}

export default ScreenDetail

const styles = StyleSheet.create({})