import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import style1 from './style';
import {addAnotherProduct} from '../../server/apis/cart';
import {Storage} from '../../storage';
import { ToastHOC } from '../../helpers/Toast'
// import {image} from '../../helpers/image';

const ScreenDetail = ({route, navigation}) => {
  const [user, setUser] = useState();
  const {productDetail} = route.params;

  const addToCart = async () => {
    addAnotherProduct({
      userId: user._id,
      productId: productDetail._id,
      userCartId: user._id,
      products: productDetail._id,
      productAdded: true,
    
    }).then((res)=>{
      if(res.data.status === 1){
        ToastHOC.successAlert("Product added in cart ",res.message)
        navigation.navigate("Checkout")
      }
    })
  };

  const userInfo = async () => {
    const a = await Storage.getItem('userInfo');
    setUser(a);
  };

  useEffect(() => {
    userInfo();
  }, []);

  return (
    <ScrollView>
      <View>
        <View style={style1.imageView}>
          <Image
            style={style1.image}
            source={{uri: productDetail.productImage}}
          />
          <View style={style1.container}>
            <View style={style1.textView}>
              <Text style={style1.text}>{productDetail.productName}</Text>
              <Text style={[style1.text]}>${productDetail.productPrice}</Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={{fontWeight: '400'}}>
                Here goes the product description like what is the use of produt
              </Text>
            </View>

            <View style={{marginTop: 10}}>
              <Text style={{fontWeight: '400'}}>14 days</Text>
            </View>

            <View style={style1.sizeView}>
              <Text style={style1.text}>Size</Text>
              <Text style={[style1.text]}>All Parameters--</Text>
            </View>

            <View style={style1.inputView}>
              <TextInput placeholder="Waist" style={style1.input} />
              <TextInput placeholder="Height" style={style1.input} />
            </View>

            <TouchableOpacity>
              <View style={style1.smallCard}>
                <View style={style1.designer}>
                  <View style={{display: 'flex', justifyContent: 'center'}}>
                    <Image
                      source={productDetail.productImage}
                      style={style1.profile}
                    />
                  </View>
                  <View style={style1.designText}>
                    <Text style={style1.design1}>Designer</Text>
                    <Text style={style1.design2}>Designer</Text>
                  </View>
                </View>

                <View style={style1.arrow}>
                  <Text>➤</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => addToCart()}
              style={{
                marginTop: 20,
                borderWidth: 1,
                height: 50,
                backgroundColor: '#231f20',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 20}}>Add to cart</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ScreenDetail;

const styles = StyleSheet.create({});
