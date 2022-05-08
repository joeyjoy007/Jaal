import {StyleSheet} from 'react-native';

const style1 = StyleSheet.create({
  container: {
    margin: 20,
    flex:1
  },
  searchPlateView: {
    marginTop: 50,
  },
  searchPlateText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  search: {
    marginTop: 30,
  },
  searchText: {
    fontSize: 15,
  },
  searchView: {
    height: 40,
    backgroundColor: '#d9e3f0',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    // borderWidth:1,
    marginTop: 40,
    width: '50%',
    height: 'auto',
    // borderRadius:10
    display: 'flex',
    //   flexDirection:"row",
    // borderWidth:1,
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingLeft: 10,
  },
  image: {
    borderRadius: 10,
    width: 140,
    height: 100,
    resizeMode: 'cover',
  },
  filter: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 40,
   
    
  },
  sort:{
 
    width:"70%",
    justifyContent:"center",
    alignItems:"center",
    height:40,
    backgroundColor:"#d9e3f0",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
 
    
},

  productView: {
    marginTop: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: '400',
  },
  productPrice: {
    fontWeight: '900',
    color: 'black',
  },

});

export default style1;
