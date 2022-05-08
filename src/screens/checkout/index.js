import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useState, useEffect} from 'react';
import Cross from 'react-native-vector-icons/Entypo';
import Empty from 'react-native-vector-icons/MaterialCommunityIcons'
import style1 from './style1';
import {getCartItems, removeItemFromCart} from '../../server/apis/cart';
import {ToastHOC} from '../../helpers/Toast';
import { Suspense } from 'react/cjs/react.production.min';

const Checkout = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(1);
  const [removeItems, setRemoveItem] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [price, setPrice] = useState(0)

  const removeItem = async id => {
    removeItemFromCart({userId: data[0].userCartId._id, productId: id}).then(
      response => {
        if (response.data.status === 1) {
          setRemoveItem(true);
          ToastHOC.infoAlert('Item removed');
        } else {
          setRemoveItem(false);
        }
      },
    );
    // console.log(id)
  };


  let total=0;

  const totalPrice = (pricee)=>{
   

  return pricee[0].products.forEach(item=>{
    total  = total+item.productPrice
    setPrice(total)

  }) 
  }
 
 

  useEffect(() => {
    console.log('CROSS');
    getCartItems().then(response => {
      // console.log(response.data.payload[0].userCartId._id)
      setData(response.data.payload);     
      setProductCount(response.data.payload[0].products.length);
      totalPrice(response.data.payload)
      setRemoveItem(false);
    });
  }, [removeItems]);




  return (
    <View style={style1.container}>
      <Text style={style1.checkText}>Checkout</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={style1.items}>{productCount} items</Text>
        <Icon name="delete-outline" size={20} />
      </View>

      <View style={style1.confirm}>
        <Text style={style1.confirmText}>
          Please confirm your order and checkout your cart
        </Text>
      </View>

     { productCount===0?(
       <View
       style={{
         justifyContent: 'center',
         alignItems: 'center',
         height:300
       }}>
       <Text style={{fontSize:18,fontWeight:'300'}}>Your Cart is empty <Empty name={"delete-empty-outline"} size={24}/></Text>
     </View>
     ):(null)
      }

      <ScrollView>
        {data.map(b =>
          b.products.map(s => (
            
            <View style={style1.item1}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View>
                  <Image source={{uri: s.productImage}} style={style1.image} />
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
                <TouchableOpacity
                  onPress={() => setNumber(number + 1)}
                  style={style1.plus}>
                  <Text>+</Text>
                </TouchableOpacity>
                <Text style={style1.num}>{number}</Text>
                <TouchableOpacity
                  onPress={() => setNumber(number - 1)}
                  style={style1.minus}>
                  <Text>-</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity>
                  <Cross
                    name={'cross'}
                    size={20}
                    onPress={() => removeItem(s._id)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )),
        )}
      </ScrollView>

      <View
        style={{
          borderStyle: 'solid',
          borderWidth: 0.5,
          borderColor: 'grey',
          marginTop: 30,
        }}></View>
      <View style={{marginTop: 30}}>
        <View style={style1.total}>
          <Text>Subtotal</Text>
          <Text>${price}</Text>
        </View>
        <View style={[style1.total, {marginTop: 10}]}>
          <Text>Tax (GST 18%)</Text>
          <Text>${Math.ceil((18/100)* price)}</Text>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <Text style={{fontWeight: '700', fontSize: 18}}>Total</Text>
        <Text style={{fontWeight: '700', fontSize: 18}}>${price + Math.ceil((18/100)*price)}</Text>
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
