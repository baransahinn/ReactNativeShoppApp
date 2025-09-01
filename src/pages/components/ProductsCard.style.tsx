import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#eeeeee',
        borderWidth:1,
        borderColor:'#bdbdbd',
        margin:10,
        flexDirection:'row',
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:'contain',
    },
    bodyContainer:{
        flex:1,
        padding:5,
        justifyContent:'space-between',
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
    price:{
        fontSize:16,
        color:'green',
        textAlign:'right',
        fontStyle:'italic',
        
    },
})