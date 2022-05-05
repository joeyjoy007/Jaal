import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import image1 from '../../../assets/images/download.jpeg';
import image2 from '../../../assets/images/download1.jpeg';
import image3 from '../../../assets/images/download2.jpeg';
import style1 from './style';
import Icon from 'react-native-vector-icons/AntDesign'
import Sort from 'react-native-vector-icons/MaterialIcons'
import { getAllProducts } from '../../server/apis/product';

// Page is for detailing in podcasts

const ItemDetailSearch = ({route,navigation}) => {
  const images = [image1, image2, image3, image2,image3,image1,image2,image3];

  const [allProducts, setAllProducts] = useState([])

  const {filterProducts} = route.params
  console.log("COMMOON",filterProducts)


  const goToDetail = (productDetail)=>{
    navigation.navigate("DetailItem",{
      productDetail:productDetail
    })
  }
  
  const fetchAllTypeProducts = async()=>{
    try {
      getAllProducts().then((res)=>{
      setAllProducts(res.data.payload)
      // console.log("CLOCK",allProducts.map((e)=>{
      //   return console.log(e.productImage)
      // }))
     
      })
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  useEffect(() => {
    fetchAllTypeProducts()
   
  }, [])

  const aa = [1,2,3,4,5]
  
  return (
   
    <View style={style1.container}>
       <View>
      <Text>{filterProducts?<Text>FP</Text>:<Text>Ap</Text>}</Text>
    </View>

      <View style={style1.searchPlateView}>
        <Text style={style1.searchPlateText}>Lets find Your Best Suitable</Text>
      </View>

      {/* <TouchableOpacity style={style1.search}>
        <View style={style1.searchView}>
          <Text style={style1.searchText}>Search </Text>
          <Text style={style1.searchText}>*Filter icon* </Text>
        </View>
      </TouchableOpacity> */}
      

      <View style={style1.filter}>
       <TouchableOpacity style={{alignItems:"center"}} onPress={()=>navigation.navigate("FilterProduct")}>
       <View style={[style1.sort,{display:"flex",flexDirection:"row"}]}>
        <Icon name="filter" size={18} />
          <Text> Filter</Text>
        </View>
       </TouchableOpacity>
        <TouchableOpacity style={{alignItems:"center"}}>
        <View style={[style1.sort,{display:"flex",flexDirection:"row"}]}>
        <Sort name="sort" size={20} />
          <Text> Sort</Text>
        </View>
        </TouchableOpacity>
      </View>


<ScrollView >
  <View style={{display:"flex",width:Dimensions.get("window").width-40,flexDirection:"row",flexWrap:"wrap"}}>
        {filterProducts && filterProducts ?(
          filterProducts.map((i,k) => {
            // console.log("TOWER",i.productImage)
            return (
  
        <TouchableOpacity key={k} style={style1.card} onPress={()=>goToDetail(i)}>
  
              <View>
                <View style={style1.cardView}>
                  <Image source={{uri:i.productImage}} style={style1.image} />
                </View>
  
                <View style={style1.productView}>
                  <Text style={style1.productName}>{i.productName}</Text>
                  <Text style={style1.productPrice}>${i.productPrice}</Text>
                </View>
              </View>
            
              </TouchableOpacity>
            );
          })
        ):allProducts.map((i,k) => {
          // console.log("TOWER",i.productImage)
          return (

      <TouchableOpacity key={k} style={style1.card} onPress={()=>goToDetail(i)}>

            <View>
              <View style={style1.cardView}>
                <Image source={{uri:i.productImage}} style={style1.image} />
              </View>

              <View style={style1.productView}>
                <Text style={style1.productName}>{i.productName}</Text>
                <Text style={style1.productPrice}>${i.productPrice}</Text>
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
