import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{flexDirection:"row", alignSelf:"center", marginVertical:"8%"}}>
        <HeaderButton 
        text="Delivery" 
        btncolor="black" 
        txtcolor="white" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        />
        <HeaderButton 
        text="Pickup" 
        btncolor="white" 
        txtcolor="black" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        />
    </View>
  )
}

const HeaderButton = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor:props.activeTab=== props.text ? "black" : "white",
            paddingVertical:8,
            paddingHorizontal:20,
            borderRadius:30,
            marginHorizontal:5,
            
        }}
        onPress={() => {props.setActiveTab(props.text)}}
        >
            <Text style={{color:props.activeTab=== props.text ? "white" : "black", fontWeight:"900", fontSize:15}}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default HeaderTabs