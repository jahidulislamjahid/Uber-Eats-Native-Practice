import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import  MaterialCommunityIcons  from "react-native-vector-icons/MaterialCommunityIcons";

const RestaurantItems = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={{
        marginBottom:10,
    }}>
        <View style={{
            padding:15,
            backgroundColor:"#fff",
            marginTop:10,
        }}>
            <RestaurantImage/>
            <RestaurantName/>
        </View>
    </TouchableOpacity>
  )
}

const RestaurantImage = () => (
    <>
    <Image source={{
        uri: "https://assets.gqindia.com/photos/62b162bbaee341d180136cfd/master/pass/new%20restaurants%20in%20Mumbai.jpg"
    }}
    style={{width:"100%", height:180}}
    />
    <TouchableOpacity style={{position:"absolute", right:20, top:20}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#ffffff" />
    </TouchableOpacity>
    </>
);

const RestaurantName = () => (
    <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:10,
    }}>
        <View>
            <Text style={{fontSize:15, fontWeight:"bold"}}>Firmhouse cuisine</Text>
            <Text style={{fontSize:15, color:"gray"}}>20-30 min</Text>
        </View>
        <View style={{
            backgroundColor:"#eee",
            height:30,
            width:30,
            borderRadius:15,
            justifyContent:"center",
            alignItems:"center",
        }}>
            <Text style={{fontSize:15, fontWeight:"bold"}}>4</Text>
        </View>
    </View>
)

export default RestaurantItems