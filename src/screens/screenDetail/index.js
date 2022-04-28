import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import style1 from './style';
// import {image} from '../../helpers/image';

const ScreenDetail = ({route, navigation}) => {
  const {image} = route.params;

  return (
    <ScrollView>
    <View>
      <View style={style1.imageView}>
        <Image style={style1.image} source={image} />
        <View style={style1.container}>
          <View style={style1.textView}>
            <Text style={style1.text}>Cotton Trench Coat</Text>
            <Text style={[style1.text]}>$72.4</Text>
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
                  <Image source={image} style={style1.profile} />
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




          <TouchableOpacity style={{marginTop:20,borderWidth:1,height:50,backgroundColor:"#231f20",justifyContent:"center",borderRadius:10}}>
           <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
             
             <Text style={{color:"white",fontSize:20}}>Add to cart</Text>
           
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
