import React from 'react';
import {ImageSourcePropType} from "react-native";
import { View, Text, Image, TouchableOpacity,  } from '@/components/ui';

interface ProductCardProps {
  name: string;
  time: string;
  rating: number;
  price: string | number;
  image: ImageSourcePropType;
}

export default function ProductCard({ name, time, rating, price, image }: ProductCardProps) {
  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm shadow-black/5 w-1/2">
      <Image 
        source={image} 
        className="w-full h-24 object-contain" 
      />
      <Text className="font-bold my-1">{name}</Text>
      <Text className="text-gray-500">{time}</Text>
      <Text className="text-amber-600">⭐ {rating}</Text>
      <Text className="font-bold mt-1">{price}</Text>
      <TouchableOpacity className="bg-amber-600 py-2 rounded-lg mt-2 items-center">
        <Text className="text-white">Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}