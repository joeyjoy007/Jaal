import {StyleSheet} from 'react-native';

const style1 = StyleSheet.create({
  imageView: {},
  image: {
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    resizeMode:"contain"
  },
  container: {
    margin: 20,
  },
  textView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: '800',
  },
  sizeView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  inputView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    width: '50%',
    paddingLeft: 10,
    marginRight: 10,
    borderColor: '#d3d3d3',
    borderRadius: 10,
  },
  smallCard: {
    marginTop: 30,
    borderWidth: 1,
    height: 50,
    backgroundColor: '#d3d3d3',
    borderColor: '#d3d3d3',
    borderRadius: 10,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  profile:{
  
    width:40,
    height:40,
    borderRadius:20,
   
},

  designer: {
      display:"flex",
      flexDirection:"row",
      paddingLeft:10,
      justifyContent:"center"
     
  },
  designText:{
    paddingLeft:10
  },
  design1:{
      fontSize:19,
      fontWeight:"600"
  },
  design2:{
    fontSize:14,
    fontWeight:"400"
  },
  arrow: {
      paddingRight:10,
      display:"flex",
      justifyContent:"center",
      
  },
  
 
});

export default style1;
