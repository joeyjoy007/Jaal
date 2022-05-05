import {
  ActivityIndicator,
  Alert,
  Image,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import style1 from '../../loginScreen/style';
import {createUser} from '../../../server/apis/user';
import * as ImagePicker from 'react-native-image-picker';
import {ToastHOC} from '../../../helpers/Toast';
import {
  emailValidation,
  mobileValidation,
} from '../../../helpers/FormValidation';
// import {Storage} from '../../storage';
import {getApps, initializeApp} from 'firebase/app';
import {ref, uploadBytes, getDownloadURL, getStorage} from 'firebase/storage';
import {firebaseConfig} from '../../../firebase/index';
import { addProduct } from '../../../server/apis/product';
// import * as Progress from 'react-native-progress';

const CreateProduct = ({navigation,route}) => {
  const [formState, setFormState] = useState({
    productId:route.params.id._id,
    productPrice: '',
    productName: '',
    productImage:''
  });
  const [errorText, setErrorText] = useState();
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [upload, setUpload] = useState(false);
  const [Image, setImage] = useState('');
  const [imageName, setImageName] = useState('second');
  const [progress, setProgress] = useState(0);
  const [indicator, setIndicator] = useState(false);

  const setFields = (key, value) => {
    // setFormState([key] = value)
    // console.log(formState)
    setFormState({...formState, [key]: value});
  };
  let email, mobileNumber;

  const error = {
    email,
    mobileNumber,
  };

  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }

  const updateError = (error, setErrorText) => {
    setErrorText(error);

    setTimeout(() => {
      setErrorText('');
    }, 1000);
  };

  const isValidObjectField = obj => {
    return Object.values(obj).every(value => value.trim());
  };

  const isValidForm = () => {
      console.log(formState)
    if (!isValidObjectField(formState))
      return updateError('Fill All Fields', setErrorText);

    if (!formState.productName.trim() )
      return updateError('Product name should be more than 3 characters', set);
   

    return true;
  };

  const AddProduct = async data => {
    if (isValidForm()) {
      try {
        addProduct(formState)
      } catch (error) {
        setLoading(false);
        ToastHOC.errorAlert(error.message);
      }
    } 
    console.log(formState)
  };

  const openCamera = async () => {
    let pickerResult = await ImagePicker.launchImageLibrary({
      allowsEditing: true,
      aspect: [4, 3],
    });

    setImageUri(pickerResult);
    if (pickerResult.assets[0].uri) {
      setUpload(true);
    }
  };

  const uploadImage = () => {
    setIndicator(true);
    handleImagePicked(imageUri);
    setProgress(0.1);
  };

  const handleImagePicked = async pickerResult => {
    // setLoading(true)
    try {
      setProgress(0.2);

      setProgress(0.3);

      if (!pickerResult.cancelled) {
        setProgress(0.4);
        const uploadUrl = await uploadImageAsync(pickerResult.assets[0].uri);

        setImage(uploadUrl);
        setFields('productImage', uploadUrl);
        setImageName(uploadUrl);

        setProgress(1);
        setUpload(false);
        alert('Image uploaded successfully');

        setTimeout(() => {
          setProgress(0);
        }, 2000);
      }
      // setLoading(false)
      // setChangeButton(true)
    } catch (e) {
      // setLoading(false)
      alert(e.message);
    } finally {
      // setUpload(false)
    }
  };

  async function uploadImageAsync(uri) {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      setProgress(0.5);
      xhr.onerror = function (e) {
        reject(new TypeError('Network request failed'));
      };

      xhr.responseType = 'blob';
      setProgress(0.6);
      xhr.open('GET', uri, true);

      xhr.send(null);
      setProgress(0.7);
    });
    const fileRef = ref(
      getStorage(),
      `productsImage/${imageUri.assets[0].fileName}`,
    );
    setProgress(0.8);

    const result = await uploadBytes(fileRef, blob);

    // We're done with the blob, close and release it
    blob.close();
    setProgress(0.9);

    return await getDownloadURL(fileRef);
  }

  // const uploadImage  = async()=>{
  //     if(imageUri===null){
  //       return;
  //     }
  //     else{

  //     }
  // }
  return (
    <View style={style1.container}>
      <View style={style1.loginView}>
        <Text style={style1.loginText}>Create Product</Text>

        {/* <View style={style1.welcomeView}>
            <Text style={style1.welcomeText}>Welcome Back</Text>
          </View> */}
        {errorText ? (
          <Text style={{color: 'red', fontSize: 12, marginTop: 10}}>
            {errorText}
          </Text>
        ) : null}
      </View>

      <View style={style1.inputView}>
        <View>
          <TextInput
            style={style1.input}
            underlineColorAndroid="transparent"
            value={formState.productName}
            onChangeText={productName => {
              setFields('productName', productName);
            }}
            placeholder="Product name"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
        </View>
        <View>
          {/* <Icon name="user" size={24} /> */}
          <TextInput
            style={style1.input}
            underlineColorAndroid="transparent"
            value={formState.productPrice}
            onChangeText={productPrice => {
              setFields('productPrice', productPrice);
            }}
            placeholder="Product Price"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
        </View>

        <View style={style1.openImage}>
          <View>
            <TouchableHighlight
              onPress={() => openCamera()}
              style={style1.input1}>
              <Text>Choose Image</Text>
            </TouchableHighlight>
          </View>

          <View>
            {upload ? (
              <TouchableHighlight
                onPress={() => uploadImage()}
                style={style1.input1}>
                {indicator ? <ActivityIndicator /> : <Text>Upload Image</Text>}
              </TouchableHighlight>
            ) : (
              <TouchableHighlight
                disabled={true}
                onPress={() => uploadImage()}
                style={style1.input1disable}>
                <Text>Upload Image</Text>
              </TouchableHighlight>
            )}
          </View>
        </View>
      </View>

      {/* <View style={style1.recoverView}>
          <Text style={style1.recoverText}>Recover Password</Text>
        </View> */}

      <TouchableOpacity
        style={style1.loginView1}
        onPress={() => AddProduct(formState)}>
        <View style={style1.loginView0}>
          <Text style={style1.loginText1}>
            {loading ? <ActivityIndicator /> : 'Add product'}
          </Text>
        </View>
      </TouchableOpacity>

      {/* <Image source={{uri:imageUri}} style={{width:40,height:40}}/> */}
    </View>
  );
};

export default CreateProduct;
