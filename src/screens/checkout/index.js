import { Image, StyleSheet, Text, TouchableOpacity, ScrollView,View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState ,useEffect} from 'react';
import image1 from '../../../assets/images/download.jpeg';
import style1 from './style1';
import { getCartItems } from '../../server/apis/cart';


const Checkout = () => {
  const items = [
    {
      title:"HELLO",
      parts:[
        {
          "1":"one"
        },
        {
          "2":"two"
        }
      ]
    }
  ];

  const [data, setData] = useState([])

  const [number, setNumber] = useState(1)

  useEffect(() => {
    getCartItems().then((response)=>{
      setData(response.data.payload)
    })
  }, [])
  

  return (

      <View style={style1.container}>
      <Text style={style1.checkText}>Checkout</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={style1.items}>2 items</Text>
        <Icon name="delete-outline" size={20} />
      </View>

      <View style={style1.confirm}>
        <Text style={style1.confirmText}>
          Please confirm your order and checkout your cart
        </Text>
      </View>

      <ScrollView >
      {data.map((b)=>b.products.map((s)=>
       <View style={style1.item1}>
       <View style={{display: 'flex', flexDirection: 'row'}}>
         <View>
           <Image source={{uri:s.productImage}} style={style1.image} />
         </View>
         <View style={style1.name}>
           <Text>{s.productName}</Text>
           <Text>${s.productPrice}</Text>
           <View style={{paddingTop: 23}}>
             <Text>Size: M</Text>
             <Text>Color: Red</Text>
           </View>
         </View>
       </View>
       <View style={style1.dec}>
         <TouchableOpacity onPress={()=>setNumber(number+1)}  style={style1.plus}><Text>+</Text></TouchableOpacity>
         <Text  style={style1.num}>{number}</Text>
         <TouchableOpacity onPress={()=>setNumber(number-1)} style={style1.minus}><Text >-</Text></TouchableOpacity>
       </View>
     </View>
      ))}

    </ScrollView>
     
      <View
        style={{
          borderStyle: 'solid',
          borderWidth: 0.5,
          borderColor: 'grey',
          marginTop: 30,
        }}></View>
      <View style={{marginTop:30}}>
        <View style={style1.total}>
          <Text>Subtotal</Text>
          <Text>$46.5</Text>
        </View>
        <View style={[style1.total,{marginTop:10}]}>
          <Text>Tax</Text>
          <Text>$6.5</Text>
        </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:30}}>
        <Text style={{fontWeight:"700",fontSize:18}}>Total</Text>
        <Text style={{fontWeight:"700",fontSize:18}}>$40</Text>
      </View>

      <View style={style1.button1}>
        <TouchableOpacity style={style1.button2}>
          <Text style={style1.button3}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
   
  );
};

export default Checkout;

const styles = StyleSheet.create({});
