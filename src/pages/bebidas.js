import React, { useState } from "react";
import { View, Text, ScrollView, FlatList, TouchableOpacity, StyleSheet, StatusBar } from "react-native";


const DATA = [
  {
    id: "1",
    title: "Coca Cola: R$ 10",
  },
  {
    id: "2",
    title: "Pepsi: R$ 7",
  },
  {
    id: "3",
    title: "Fanta Laranja: R$ 8",
  },
  {
    id: "4",
    title: "Fanta Uva: R$ 8",
  },
  {
    id: "5",
    title: "Fanta Guarana: R$ 8",
  },
  {
    id: "6",
    title: "Sprite: R$ 6",
  },
  {
    id: "7",
    title: "Kuat: R$ 6",
  },
  {
    id: "8",
    title: "Coca Cola Zero: R$ 9",
  },
  {
    id: "9",
    title: "Doly guarana: R$ 5",
  },
  {
    id: "10",
    title: "It guarana: R$ 3",
  },
  {
    id: "11",
    title: "Pop Laranja: R$ 6",
  },
  {
    id: "12",
    title: "Guarana Jesus: R$ 15",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);


export default function Bebidas() {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? 'grey' : "#d3d3d3";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});