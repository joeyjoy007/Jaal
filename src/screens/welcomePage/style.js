import {Dimensions, StyleSheet} from 'react-native';

const style1 = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 40,
  },
  wishView: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  wishText: {
    fontSize: 20,
    fontWeight: '300',
    color:"#231f20"
  },
  nameView: {
    paddingVertical: 7,
  },
  nameText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
  image: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchView: {
    // borderWidth:1
    display: 'flex',
    justifyContent: 'center',
  },
  touchableOpacity: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#d9e3f0',
    borderRadius: 10,
  },
  searchText: {
    fontSize: 16,
    marginTop: 10,
    paddingHorizontal: 10,
    fontWeight: '300',
    color:"#231f20"
  },
  scrollViewContent: {
    marginTop: 30,
    height: 30,
  },
  items: {
    fontSize: 18,
    paddingHorizontal: 10,
    color:"#231f20"
  },
  cardView: {
    borderColor: 'red',
    marginTop: 40,
    height: 200,
    
  },
  dots: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    right: '43%',

    bottom: 0,
    color: 'white',
  },
  dots1: {
    color: '#888',
    fontSize: 56,
  },
  dotsActive1: {
    color: 'white',
    fontSize: 56,
  },
  podcastView:{
     
      marginTop:30
  },
  podcastText:
  {
      fontSize:20,
      fontWeight:"700"
  },
  pCardView:{
     
      marginTop:30,
      height:180,
      width:180,
      borderRadius:20,
      marginLeft:20
  },
  pTextView:{
   
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:10
  },
  pText:{
     fontSize:18
  }
});

export default style1;
