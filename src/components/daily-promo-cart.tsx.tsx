import React from 'react';
import { View, Text, Image } from '@/components/ui';
import { Button } from './ui/button';

export default function DailyPromoCard() {
  return (
    <View className="flex-row bg-primary-500 rounded-2xl px-2 items-center mt-2 mx-2">
      <View className="flex-1">
        <Text className="text-lg font-bold text-white">Claim your daily!</Text>
        <Text className="text-lg font-bold text-white mt-1 mb-8">free delivery naw!</Text>
        <Button label="Order Now" className="w-40  border rounded-full " />
      </View>
      <Image
        source={require('../../assets/scooter.png')}
        className="w-40 h-40 ml-3"
      />
    </View>
  );
}