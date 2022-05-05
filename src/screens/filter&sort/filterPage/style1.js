import {Dimensions, StyleSheet} from 'react-native';

const style1 = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 30,
  },
  filterText: {
    fontSize: 30,
  },
  button: {
    height: Dimensions.get('screen').height - 270,
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 17,
  },
  view: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#d9e3f0",
    height:40,
    borderRadius:10
  },
});

export default style1;
