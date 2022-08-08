import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems from '../components/RestaurantItems'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={{backgroundColor:"white"}}>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems/>
        <RestaurantItems/>
        <RestaurantItems/>
        <RestaurantItems/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home