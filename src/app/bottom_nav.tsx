// bottom_nav.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home, Location, User, ReceiptItem } from 'iconsax-react-nativejs';

import HomeScreen from './screens/homescreen';
import { View } from '@/components/ui';
import ProfileScreen from './screens/profilescreen';

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

          bottom: 0,
          borderTopWidth: 0,

        },
        tabBarIconStyle: {
          marginTop: 13,
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className={focused ? 'bg-white w-10 h-10 rounded-full justify-center  items-center ' : ''} >
              <Home size={24} color={color} variant='Bold' />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Fav"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className={focused ? 'bg-white w-10 h-10 rounded-full justify-center  items-center ' : ''} >
              <Location size={24} color={color} variant='Bold' />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className={focused ? 'bg-white w-10 h-10 rounded-full justify-center  items-center ' : ''} >
              <ReceiptItem size={24} color={color} variant='Bold' />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View className={focused ? 'bg-white w-10 h-10 rounded-full justify-center  items-center ' : ''} >
              <User size={24} color={color} variant='Bold' />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

