import { StyleSheet } from "react-native";

const style1 = StyleSheet.create({
    container:{
        margin:20,
        
    },
    View1:{
        display:"flex",
        // flexDirection:"row",,
        justifyContent:"center",
        flexDirection:"row"

    },
    image:{
        width:120,
        height:120,
        borderRadius:60
    },
    // followButton:{
    //     alignSelf:"center",
    // },
    name:{
        width:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    allPeopleView:{
        // borderWidth:1,
        // borderColor:"red",
        backgroundColor:"grey",
        marginTop:40,
        height:70,
        borderRadius:35,
        overflow:"hidden"
     
    },
    profiles:{
     
        // borderWidth:1,
        // borderColor:"green",
        width:50,
        height:50,
        borderRadius:25,
        display:"flex",
        // justifyContent:"center",
        // alignItems:"center",
        // top:"20%",
        alignSelf:"center",
        marginLeft:20

        
    }
})

export default style1