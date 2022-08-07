import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = () => {
  return (
    <View style={{marginHorizontal:"5%", flexDirection:'row'}}>
        <GooglePlacesAutocomplete 
        placeholder='Search'
        styles={{
            textInput:{
                backgroundColor:"#eee",
                borderRadius:20,
                fontWeight:"700",
            },
            textInputContainer:{
                backgroundColor:"#eee",
                borderRadius:50,
                flexDirection:"row",
                alignItems:"center",
                marginRight:10,
                marginBottom:20,
            }
        }}
        renderLeftButton={() => (
            <View style={{marginLeft:"2%"}}>
                <Ionicons name="location-sharp" size={24}/>
            </View>
        )

        }
        renderRightButton={() => (
            <View style={{
                flexDirection:'row', 
                backgroundColor:"white", 
                padding:9, 
                marginRight:8,
                borderRadius:30,
                alignItems:"center",
                }}>
                <AntDesign name="clockcircle" size={11} style={{marginRight:5}}/>
                <Text style={{fontWeight:"600"}}>Search</Text>
            </View>
        )}
        />
    </View>
  )
}

export default SearchBar