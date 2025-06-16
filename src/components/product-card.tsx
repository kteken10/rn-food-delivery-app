import React from 'react';
import { ImageSourcePropType } from "react-native";
import { View, Text, Image, TouchableOpacity, colors } from '@/components/ui';
import { ShoppingCart, Star1, } from 'iconsax-react-nativejs';
interface ProductCardProps {
  name: string;
  time: string;
  rating: number;
  price: string | number;
  image: ImageSourcePropType;
  orderf?: number;
}
export default function ProductCard({ name, time, rating, price, image, orderf }: ProductCardProps) {
  return (
    <View className="bg-slate-950 rounded-2xl p-4 mb-4 shadow-sm shadow-black/5 mx-2 flex-1">
      <Image
        source={image}
        className="w-full h-24 object-contain"
      />

      <Text className="font-bold my-1 text-lg">{name}</Text>
      <View className='flex-row  justify-between '>
        <Text className="text-neutral-400">{time}</Text>
        <Star1 color={colors.primary[500]} size={20} variant='Bulk'></Star1>
        <Text> {rating}</Text>
        <Text className="text-neutral-400 " >({orderf} +)</Text>
      </View>

      <View className="flex-row items-center justify-between mt-2">
        <Text className="font-bold">{price}</Text>
        <TouchableOpacity className="bg-primary-500 h-8 flex-row py-2 rounded-full items-center ml-2 px-2 ">
          <Text className="text-white text-sm">Add to cart</Text>
          <View className='bg-white w-6 h-6 ml-1 rounded-full  items-center justify-center'>
            <ShoppingCart size={16} color={colors.primary[500]} variant='Bulk' />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}