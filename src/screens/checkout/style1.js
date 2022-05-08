import {StyleSheet} from 'react-native';

const style1 = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 30,
    flex:1
  },
  checkText: {
    fontSize: 22,
    fontWeight: '700',
  },
  confirm: {
    marginTop: 30,
    borderWidth: 1,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#73BED1',
  },
  confirmText: {},
  items: {
    fontWeight: '400',
  },
  item1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  name: {
    paddingLeft: 20,
  },
  total: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button2: {
    marginTop: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  button3: {
    fontSize: 18,
    fontWeight: '600',
  },
  dec: {
    height: 90,
    width: 30,
    borderRadius: 30,
    alignSelf: 'center',
    position: 'relative',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  plus: {
    position: 'absolute',
    alignSelf: 'center',
    
  },
  num: {
    position: 'absolute',
    top: '33.3%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus: {
    position: 'absolute',
    top: '66.9%',
    alignSelf: 'center',
    fontSize:40
  },
});
export default style1;
