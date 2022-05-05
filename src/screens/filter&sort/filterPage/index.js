import {Alert, Button,Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import style1 from './style1';
import Slider from '@react-native-community/slider';
import { filterProduct } from '../../../server/apis/product';

const FilterProduct = ({navigation}) => {
  const [range, setRange] = useState('50%');
  const [sliding, setSliding] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([])

  const showFilter = async(range)=>{
   filterProduct(range).then((response)=>{
    if(response.data.status ===1){
      setSliding(false)
      navigation.navigate("SearchItem",{
        filterProducts:response.data.payload
      })
    }
   }).catch((error)=>{
     Alert.alert(error.message)
   })
  }

  
  return (
    <View style={style1.container}>
      <Text style={style1.filterText}>Filter Products</Text>
      <View
        style={{
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          marginTop: 50,
        }}>
        <Text style={{fontSize:20,fontWeight:"700"}}>Price</Text>
        <View style={{paddingLeft:11,width:200,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
        <Text>200</Text>
        <Text style={{paddingRight:20}}>{range}</Text>
        </View>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={200}
          maximumValue={20000}
          minimumTrackTintColor="tomato"
          maximumTrackTintColor="#000000"
          thumbTintColor="tomato"
          value={200}
          onValueChange={value => setRange(Math.ceil(value))}
          onSlidingStart={()=>setSliding(true)}
          // onSlidingComplete={()=>setSliding("InActive")}
        />
        
      </View>
      <View>
       
      </View>
      <View>
        
          <View style={style1.button}>
         {sliding ?(
            <TouchableOpacity style={style1.view} onPress={()=>showFilter(range)}>
            <Text style={style1.buttonText}>Done</Text>
            </TouchableOpacity>
         ):(null)}
          </View>
       
      </View>
    </View>
  );
};

export default FilterProduct;
