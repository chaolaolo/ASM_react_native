import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const DATA = [
  {
    id: '1',
    title: 'All',
    image: require('./image/logo.png')
  },
  {
    id: '2',
    title: 'Item 2',
    image: require('./image/logo.png')

  },
  {
    id: '3',
    title: 'Item 3',
    image: require('./image/logo.png')

  },
  {
    id: '4',
    title: 'Item 4',
    image: require('./image/logo.png')

  },
  {
    id: '5',
    title: 'Item 5',
    image: require('./image/logo.png')

  },
];

const Item = ({ title, image }: any) => (
  <View style={styles.item}>
    <Image source={image} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Home = () => {
  const renderItem = ({ item }: any) => <Item title={item.title} image={item.image} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDC3C3'
  },
  item: {
    backgroundColor: 'gray',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    width: width* 0.2,
    height: 60,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    color: 'red',
    textAlign: 'center'
  },
});

export default Home;
