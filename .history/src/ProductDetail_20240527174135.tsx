import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetail = ({route}:any) => {
    const {item} = route.params;
  return (
    <View>
      {/* <StatusBar translucent={true} backgroundColor='transparent'/> */}
      <Text>{item.name}</Text>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})