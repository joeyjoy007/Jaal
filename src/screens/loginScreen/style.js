import {StyleSheet} from 'react-native';

const style1 = StyleSheet.create({
  container: {
    margin: 20,
  },

  loginView: {
    marginTop:30
  },
  loginText: {
      fontWeight:"900",
      fontSize:30,
      color:"black"
  },
  welcomeView:{
      paddingVertical:10

  },
  welcomeText:{
      fontWeight:"400",
      fontSize:16

  },
  inputView:{
      marginTop:10,
    
  },
 
    input: {
        marginTop:30,
        height: 40,
        // borderColor: '#7a42f4',
        // borderWidth: 1,
        backgroundColor:"#d9e3f0",
        borderRadius:10
     },
     recoverView:{
        marginTop:40
     },
     recoverText:{
         fontSize:19,
         fontWeight:"700",
         color:"black"

     },
     loginView0:{
        borderRadius:10,
        marginTop:30,
        height:40,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#d9e3f0"
     },
    //  loginView1:{
    //     borderRadius:120
    //  },
     loginText1:{
        fontSize:16,
        fontWeight:"500"
     },
     
     

  
});

export default style1;
