// bottom_nav.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/homescreen';
import { View } from '@/components/ui';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'black',
          marginHorizontal: 16,
          borderRadius: 50,
          height: 65,
          // position: 'absolute',
          bottom: 0,
          borderTopWidth: 0,

        },
        tabBarIconStyle: {
          marginTop: 13,
        },
        tabBarActiveTintColor: 'black', // Couleur des icones actives
        tabBarInactiveTintColor: 'white', // Couleur des icones inactives
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className={focused ? 'bg-white w-10 h-10 rounded-full justify-center  items-center ' : ''} >
              <Ionicons name="home-outline" size={24} color={color} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Fav"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className={focused ? 'bg-white w-10 h-40 rounded-full justify-center  items-center ' : ''} >
              <Ionicons name="heart-outline" size={24} color={color} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className={focused ? 'bg-white w-10 h-40 rounded-full justify-center  items-center ' : ''} >
              <Ionicons name="cart-outline" size={24} color={color} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className={focused ? 'bg-white w-10 h-40 rounded-full justify-center  items-center ' : ''} >
              <Ionicons name="person-outline" size={24} color={color} />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

