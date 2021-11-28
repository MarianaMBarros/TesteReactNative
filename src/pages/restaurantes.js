import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');
const DATA = [
  {
    coverImageUri: 'https://blog.agenciadosite.com.br/wp-content/uploads/2017/01/logo-para-restaurante8-e1486901918936.jpg',
    cornerLabelColor: '#FFD300',
    cornerLabelText: 'Oxente',
  },
  {
    coverImageUri: 'https://blog.agenciadosite.com.br/wp-content/uploads/2017/01/logo-spettaria-e1486901494991.jpg',
    cornerLabelColor: '#0080ff',
    cornerLabelText: 'spettaria',
  },
  {
    coverImageUri: 'https://blog.agenciadosite.com.br/wp-content/uploads/2017/01/saladday.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'saladday',
  },
  {
    coverImageUri: 'https://blog.agenciadosite.com.br/wp-content/uploads/2017/01/logo-acaibeach.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'acai beach',
  },
  {
    coverImageUri: 'https://blog.agenciadosite.com.br/wp-content/uploads/2017/01/logo-bistro2go.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'bistro',
  },
  {
    coverImageUri: 'https://blog.agenciadosite.com.br/wp-content/uploads/2017/01/logo-para-restaurante.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Fabrica Sabores',
  },
];


export default function Restaurantes() {
  const renderItem = data => (
    <View
      key={data.coverImageUri}
      style={styles.cardContainer}
    >
      <View
        style={styles.cardWrapper}
      >
        <Image
          style={styles.card}
          source={{ uri: data.coverImageUri }}
        />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>
            { data.cornerLabelText }
          </Text>
        </View>
      </View>
    </View>
  );

    return( 
      <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
        autoplayInterval={3000}
      />
    </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
});