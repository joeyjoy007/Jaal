import {
  ActivityIndicator,
  Alert,
  Image,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import style1 from '../loginScreen/style';
import {createUser} from '../../server/apis/user';
import * as ImagePicker from 'react-native-image-picker';
import {ToastHOC} from '../../helpers/Toast';
import {emailValidation, mobileValidation} from '../../helpers/FormValidation';
// import {Storage} from '../../storage';
import {getApps, initializeApp} from 'firebase/app';
import {ref, uploadBytes, getDownloadURL, getStorage} from 'firebase/storage';
import {firebaseConfig} from '../../firebase';
import * as Progress from 'react-native-progress';

const Register = ({navigation}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    profilePic: '',
  });
  const [errorText, setErrorText] = useState();
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [upload, setUpload] = useState(false);
  const [Image, setImage] = useState('');
  const [imageName, setImageName] = useState('second');
  const [progress, setProgress] = useState(0);

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

  //   const RegisterUser = async(data)=>{

  //    try {
  //      setLoading(true)
  //     const response = await createUser(data)
  // // console.log("RES",response)
  //     if(response.status === 1){
  //       setLoading(false)
  //       // console.log("RESPO",response)
  //     ToastHOC.successAlert("Registeration Success",response.message)
  //     navigation.replace("Login")
  //     }
  //    } catch (error) {
  //      setLoading(false)
  //      ToastHOC.errorAlert(error.message)
  //    }

  //   }

  // const validateFields = ()=>{
  //   const {email,mobileNumber} = formState

  //   if(!emailValidation.test(email)){
  //   error["email"] = "write email correctly"

  //   }
  //   if(!mobileValidation.test(mobileNumber)){
  //   error["mobileNumber"] = "write mobile number correctly"

  //   }

  //   if(error.mobileNumber === undefined && error.email=== undefined){
  //     // console.log("Registering")
  //     RegisterUser(formState)
  //   }
  //   else{

  //     if(error.email === undefined){
  //       ToastHOC.errorAlert(error.mobileNumber)
  //     }
  //     else {
  //       ToastHOC.errorAlert(error.email)
  //     }

  //   }
  // }

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
    if (!isValidObjectField(formState))
      return updateError('Fill All Fields', setErrorText);

    if (!formState.name.trim() || formState.name.length < 3)
      return updateError('Name Should Be More Than 3 Characters', setErrorText);

    if (!emailValidation.test(formState.email))
      return updateError('Write Email In Proper Manner', setErrorText);

    if (!formState.password.trim() || formState.password.length < 8)
      return updateError(
        'Password Should Be Equal To Or More Than 8 Characters',
        setErrorText,
      );

    if (!mobileValidation.test(formState.mobileNumber))
      return updateError('Write Mobile Number Correctly', setErrorText);

    return true;
  };

  const RegisterUser = async data => {
    if (isValidForm()) {
      try {
        setLoading(true);
        const response = await createUser(data);

        if (response.status === 1) {
          setLoading(false);
          // console.log("RESPO",response)
          ToastHOC.successAlert('Registeration Success', response.message);
          navigation.replace('Login');
        }
      } catch (error) {
        setLoading(false);
        ToastHOC.errorAlert(error.message);
      }
    } else {
      // console.log(errorText)
      // errorText ?(
      //   ToastHOC.errorAlert(errorText,"lhjgf")
      // ):(null)
    }
  };

  const openCamera = async () => {
    let pickerResult = await ImagePicker.launchImageLibrary({
      allowsEditing: true,
      aspect: [4, 3],
    });

    setImageUri(pickerResult);
  };

  const uploadImage = () => {
    handleImagePicked(imageUri);
    setProgress(0.1);
  };

  const handleImagePicked = async pickerResult => {
    // setLoading(true)
    try {
      setProgress(0.2);

      setUpload(true);
      setProgress(0.3);

      if (!pickerResult.cancelled) {
        setProgress(0.4);
        const uploadUrl = await uploadImageAsync(pickerResult.assets[0].uri);

        setImage(uploadUrl);
        setFields("profilePic",uploadUrl)
        setImageName(uploadUrl);

        setProgress(1);
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
      `jaalProfile/${imageUri.assets[0].fileName}`,
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
        <Text style={style1.loginText}>Register</Text>

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
            value={formState.name}
            onChangeText={name => {
              setFields('name', name);
            }}
            placeholder="Name"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
        </View>
        <View>
          {/* <Icon name="user" size={24} /> */}
          <TextInput
            style={style1.input}
            underlineColorAndroid="transparent"
            value={formState.email}
            onChangeText={email => {
              setFields('email', email);
            }}
            placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
        </View>
        <View>
          <TextInput
            style={style1.input}
            underlineColorAndroid="transparent"
            value={formState.password}
            onChangeText={password => {
              setFields('password', password);
            }}
            placeholder="Password"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
        </View>
        <View>
          <TextInput
            style={style1.input}
            underlineColorAndroid="transparent"
            value={formState.mobileNumber}
            onChangeText={mobileNumber => {
              setFields('mobileNumber', mobileNumber);
            }}
            placeholder="Mobile Number"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
          />
        </View>

        <View style={{marginTop: 20}}>
          <Pressable
            onPress={() => openCamera()}
            style={{
              borderWidth: 1,
              borderColor: 'red',
              borderRadius: 5,
              height: 60,
              width: '50%',
            }}>
            <Text>Choose Image</Text>
          </Pressable>

          <Pressable
            onPress={() => uploadImage()}
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: '50%',
              height: 30,
            }}>
            <Text>Upload Image</Text>
          </Pressable>
          <Progress.Bar progress={progress} width={200} />
        </View>
        <View></View>
      </View>

      {/* <View style={style1.recoverView}>
        <Text style={style1.recoverText}>Recover Password</Text>
      </View> */}

      <TouchableOpacity
        style={style1.loginView1}
        onPress={() => RegisterUser(formState)}>
        <View style={style1.loginView0}>
          <Text style={style1.loginText1}>
            {loading ? <ActivityIndicator /> : 'Register'}
          </Text>
        </View>
      </TouchableOpacity>

      {/* <Image source={{uri:imageUri}} style={{width:40,height:40}}/> */}

      <TouchableOpacity
        style={style1.loginView1}
        onPress={() => navigation.navigate('Login')}>
        <View style={style1.loginView0}>
          <Text style={style1.loginText1}>
            {loading ? <ActivityIndicator /> : 'Login'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
