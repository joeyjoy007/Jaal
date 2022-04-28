import {Image, StyleSheet,TouchableOpacity, Text, View, ScrollView, TouchableHighlight, Dimensions} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import style1 from './style';
import { image } from '../../helpers/image';
import image1 from '../../../assets/images/download.jpeg'
import image2 from '../../../assets/images/download1.jpeg'
import image3 from '../../../assets/images/download2.jpeg'
import Icon from 'react-native-vector-icons/Ionicons'
import { Storage } from '../../storage';
import { AuthContext } from '../../context';
import { getAllProducts } from '../../server/apis/product';


const Welcome = ({navigation}) => {

    const [active, setActive] = useState(0)
    const [responsee, setResponse] = useState([])
    const [userInformation, setUserInformation] = useState("")

    const width = Dimensions.get("window").width

    // const data = async()=>{
    //     const u = Storage.getItem("userInfo")
    //   console.log("USER INFO",u)
    // }

    // useEffect(() => {
    //   data()
      
    // }, [])

   const userInfo = async()=>{
     const a = await Storage.getItem("userInfo")
     setUserInformation(a)
     
   }

    useEffect(() => {
      try {
        getAllProducts().then((res)=>{
            setResponse(res.data.payload)    
        })

        userInfo()
      } catch (error) {
          console.log(error.message)
      }
    },[] )
    

    

    const {signOut} = useContext(AuthContext)
    
    const Logout = ()=>{
        console.log(signOut)
        signOut()
    }

    const goToSearch = ()=>{
        navigation.navigate('SearchItem', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
    }

    const change = ({nativeEvent})=>{
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width-.5)
        if(slide !== active)
        setActive(slide)
    }

    const podCastContent = [
        {
            image:image1,
            name:"Mobile Design"
        },
        {
            image:image2,
            name:"Laptop Design"
        },
        {
            image:image3,
            name:"Cover Design"
        },
    ]
    

    const images = [
        image1,image2,image3
    ]
 
const content=[
    {
        id:1,
        name:"OverView"
    },
    {
        id:2,
        name:"Design"
    },
    {
        id:3,
        name:"Photographer"
    },
    {
        id:4,
        name:"Architecture"
    },
    {
        id:5,
        name:"Groceries"
    }
]


  return (
    <View style={style1.container}>
      <View style={style1.wishView}>
          <TouchableOpacity onPress={()=>Logout()}>
          <View>
             <Icon name='arrow-back' size={24} color="grey"/>
          </View>
          </TouchableOpacity>
        <View style={style1.nameView}>
          <Text style={style1.wishText}>Good Morning,</Text>
          <Text style={style1.nameText}>{userInformation.name}</Text>
        </View>

        <View>
          <Image source={{uri:image}} style={style1.image}/>
        </View>
        
      </View>
      
      <View style={style1.searchView}>
      <TouchableOpacity style={style1.touchableOpacity} onPress={()=>console.log("Pressed")}>
            <Text style={style1.searchText}>Search for Products</Text>
            </TouchableOpacity>
        </View>

        <View style={style1.scrollViewContent}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {content.map((item)=>{
              
                return <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#d9e3f0"
                style={{borderRadius:10}}
                key={item.id} onPress={()=>console.log("Pressed")}>

                    
                    <Text  style={[style1.items]}>{item.name}</Text>
                    </TouchableHighlight>
                    
                
            })}
          
            </ScrollView>
        

        </View>
 
            <View style={style1.cardView}>
                <ScrollView horizontal
                  disableIntervalMomentum={ true } 
                  snapToInterval={ width }
                  showsHorizontalScrollIndicator={false}
                  onScroll={change}
                >
                {images.map((image,k)=>{
                
                return <Image key={k} source={image} style={{height:"auto",borderRadius:10,borderTopRightRadius:10,resizeMode:"cover",width:width}}/>
                })}
        </ScrollView>
        {/* <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}> */}
        <View style={style1.dots}>
        {images.map((image,index)=>{
           
            return (
                <View key={index} >
                <Text style={index===active?style1.dotsActive1:style1.dots1}>•</Text>
                </View>
            )
        })}
        </View>
             
      


            </View>
            <View style={style1.podcastView}> 
        <Text style={style1.podcastText}>Popular podcasts</Text>

             </View>
<ScrollView horizontal style={{height:270}}
showsHorizontalScrollIndicator={false}
>
             {podCastContent.map((e,i)=>{
         
                 return <TouchableOpacity key={i} onPress={()=>goToSearch()}> 
                 <View style={style1.pCardView}>
                 <Image key={e} source={e.image} style={{width:"auto",borderRadius:20,resizeMode:"cover",height:180}}/>
                <View style={style1.pTextView}>
                    <Text style={style1.pText}>{e.name}</Text>
                </View>
             </View>
             </TouchableOpacity>  
             })}

</ScrollView>

           

    </View>
  );
};

export default Welcome;
