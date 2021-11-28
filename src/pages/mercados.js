import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, Switch, FlatList } from "react-native";

import { Picker } from '@react-native-picker/picker';

import api from '../services/api'

const mercadosData = [
  {
    text: "Mercado do Ze",
    value: 1,
    favorito: true
  },
  {
    text: "Padaria e Mercado Conde",
    value: 2,
    favorito: false
  },
  {
    text: "Extra Supermecardo",
    value: 3,
    favorito: true
  },
  {
    text: "Carrefour Supermecardo",
    value: 4,
    favorito: false
  },
  {
    text: "Mercado Moleza",
    value: 5,
    favorito: false
  },
  {
    text: "Rocato Supermercado",
    value: 6,
    favorito: false
  },
  {
    text: "Rossi Supermercado",
    value: 7,
    favorito: false
  },
  {
    text: "Saito Supermercado",
    value: 8,
    favorito: false
  },
  {
    text: "Ferdezone Supermercado",
    value: 9,
    favorito: true
  },
]
export default function Mercados() {
  const [selectedEstado, setSelectedEstado] = useState(null);
  const [estados, setEstados] = useState([]);

  const [selectedCidade, setSelectedCidade] = useState(null);
  const [cidades, setCidades] = useState([]);

  const [mostrarFavorito, setMostrarFavorito] = useState(false);

  const [mercados, setMercados] = useState([]);
  const [filtroMercado, onChangeFiltroMercado] = useState("");

  const [isEnabled, setIsEnabled] = useState(null);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  useEffect(() => {  
    if (isEnabled != null) {
      if (isEnabled) {
        setMercados(mercadosData.filter(c => c.favorito == true && c.text.toUpperCase().includes(filtroMercado.toUpperCase())));
      } else {
        setMercados(mercadosData.filter(c => c.text.toUpperCase().includes(filtroMercado.toUpperCase())));
      }
    }
  }, [isEnabled, filtroMercado]);

  useEffect(() => {
    async function carregarEstados() {
      const response = await api.get('/api/v1/localidades/estados');
      const data = response.data.map(c => ({ text: c.nome, value: c.id })).sort((a, b) => a.text > b.text);
      setEstados(data);
    }
    carregarEstados();
  }, []);

  useEffect(() => {
    async function carregarCidades() {
      if (selectedEstado) {
        const response = await api.get(`/api/v1/localidades/estados/${selectedEstado}/distritos`);
        const data = response.data.map(c => ({ text: c.nome, value: c.id })).sort((a, b) => a.text > b.text);
        setCidades(data);
      }
    }
    carregarCidades();
  }, [selectedEstado]);

  useEffect(() => {
    if (selectedCidade)
      setMostrarFavorito(true)
  }, [selectedCidade]);


  const renderMercado = ({ item }) => {
    return (
      <Text>{item.text}</Text>
    );
  };

  return (
    <View style={{ margin: 10 }}>
      <View>
        <Text>Infome seu estado</Text>
        <Picker
          selectedValue={selectedEstado}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedEstado(itemValue)
          }>
          <Picker.Item label="Selecione o estado" />
          {estados.map(item => (<Picker.Item key={item.value} label={item.text} value={item.value} />))}
        </Picker>
      </View>
      <View>
        <Text>Infome a sua cidade</Text>
        <Picker
          selectedValue={selectedCidade}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedCidade(itemValue);
            setMercados(mercadosData);

          }}>
          <Picker.Item label="Selecione a cidade" />
          {cidades.map(item => (<Picker.Item key={item.value} label={item.text} value={item.value} />))}
        </Picker>
      </View>
      {mostrarFavorito ? (
        <>
          <View>
            <Text>Filtrar por nome</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1
              }}
              value={filtroMercado}
              onChangeText={onChangeFiltroMercado}
            />
          </View>

          <View>
            <Text>Mostrar apenas os favoritos?</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </>) : null
      }
      <View>
        <FlatList
          data={mercados}
          renderItem={renderMercado}
          keyExtractor={(item) => item.value}
        />
      </View>
    </View>
  )
}