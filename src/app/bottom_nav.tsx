// bottom_nav.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/homescreen';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} />
      }} />
      <Tab.Screen name="Fav" component={HomeScreen} options={{
        tabBarIcon: ({ color }) => <Ionicons name="heart-outline" size={24} color={color} />
      }} />
      <Tab.Screen name="Cart" component={HomeScreen} options={{
        tabBarIcon: ({ color }) => <Ionicons name="cart-outline" size={24} color={color} />
      }} />
      <Tab.Screen name="Profile" component={HomeScreen} options={{
        tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />
      }} />
    </Tab.Navigator>
  );
}
