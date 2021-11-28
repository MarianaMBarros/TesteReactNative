import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



import Restaurantes from '../pages/restaurantes'
import Mercados from '../pages/mercados'
import Bebidas from '../pages/bebidas'
const Tab = createMaterialTopTabNavigator();

export function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Restaurantes"
      screenOptions={{
        tabBarActiveTintColor: '#211',
        tabBarLabelStyle: { fontSize: 13 },
        tabBarStyle: { backgroundColor: "#d3d3d3" },
      }}
    >
      <Tab.Screen
        name="Restaurantes"
        component={Restaurantes}
        options={{ tabBarLabel: 'Restaurantes' }}
      />
      <Tab.Screen
        name="Mercados"
        component={Mercados}
        options={{ tabBarLabel: 'Mercados' }}
      />
      <Tab.Screen
        name="Bebidas"
        component={Bebidas}
        options={{ tabBarLabel: 'Bebidas' }}
      />
    </Tab.Navigator>
  );
}