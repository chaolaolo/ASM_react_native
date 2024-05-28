import { StatusBar,StyleSheet , Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const ProductDetail = ({route}:any) => {
    const {item} = route.params;
  return (
    <SafeAreaView style={st.container}>
      <StatusBar translucent={true} backgroundColor='transparent'/>

        <ScrollView style={st.boxDetail}>

        </ScrollView>
      <Text>{item.name}</Text>
    </SafeAreaView>
  )
}

export default ProductDetail

const st = StyleSheet.create({

})