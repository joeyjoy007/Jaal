import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import image1 from '../../../assets/images/download.jpeg';
import image2 from '../../../assets/images/download1.jpeg';
import image3 from '../../../assets/images/download2.jpeg';
import style1 from './style';

// Page is for detailing in podcasts

const ItemDetailSearch = ({route,navigation}) => {
  const images = [image1, image2, image3, image2,image3,image1,image2,image3];

  const {itemId,otherParam} = route.params
  console.log(itemId,otherParam)

  const goToDetail = (i)=>{
    navigation.navigate("DetailItem",{
      image:i
    })
  }
  

  return (
    
    <View style={style1.container}>
      <View>{/* drawer and shoping */}</View>

      <View style={style1.searchPlateView}>
        <Text style={style1.searchPlateText}>Lets find Your Best Suitable</Text>
      </View>

      <TouchableOpacity style={style1.search}>
        <View style={style1.searchView}>
          <Text style={style1.searchText}>Search </Text>
          <Text style={style1.searchText}>*Filter icon* </Text>
        </View>
      </TouchableOpacity>


<ScrollView >
  <View style={{display:"flex",width:Dimensions.get("window").width-40,flexDirection:"row",flexWrap:"wrap"}}>
        {images.map((i,k) => {
          return (

      <TouchableOpacity key={k} style={style1.card} onPress={()=>goToDetail(i)}>

            <View>
              <View style={style1.cardView}>
                <Image source={i} style={style1.image} />
              </View>

              <View style={style1.productView}>
                <Text style={style1.productName}>Product Name</Text>
                <Text style={style1.productPrice}>$72.4</Text>
              </View>
            </View>
          
            </TouchableOpacity>
          );
        })}
        </View>
</ScrollView>
    </View>
  );
};

export default ItemDetailSearch;

const styles = StyleSheet.create({});
