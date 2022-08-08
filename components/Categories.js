import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pickup",
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Balery",
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast Food",
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "soft drinks",
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Dessert",
    },
];

const Categories = () => {
  return (
    <View style={{
      backgroundColor: '#fff',
      marginTop: 5,
      paddingVertical: 15,
      paddingHorizontal: 10,
    }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
      <View key={index} style={{alignItems:'center', marginRight:30}}>
        <Image source={item.image}
        style={{
          width: 50,
          height: 40,
          resizeMode: "contain",
        }}
        />
        <Text style={{fontSize:13, fontWeight:"900"}}>{item.text}</Text>
      </View>
      ))}
    </ScrollView>
    </View>
  )
}

export default Categories