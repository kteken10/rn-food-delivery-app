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
    <View className="bg-white rounded-2xl p-4 mb-4 w-full">
      <Image
        source={image}
        className="w-full h-24 object-contain"
      />

      <Text className="font-bold my-1 text-xm">{name}</Text>
      <View className='flex-row  justify-between '>
        <Text className="text-neutral-400 text-sm" >{time}</Text>
        <Star1 color={colors.primary[500]} size={20} variant='Bulk'></Star1>
        <Text> {rating}</Text>
        <Text className="text-neutral-400 " >({orderf} +)</Text>
      </View>

      <View className="flex-row items-center justify-center mt-2 mx-4">



        <Text className="font-bold text-xm">{price}</Text>


        <TouchableOpacity className="bg-primary-500 flex-row items-center rounded-full px-4 h-10 mx-1">
          <Text className="text-white text-sm font-medium">Add to cart</Text>

          <View className="bg-white w-6 h-6 ml-2 rounded-full flex items-center justify-center">
            <ShoppingCart size={16} color={colors.primary[500]} variant="Bulk" />
          </View>
        </TouchableOpacity>

      </View>



    </View>
  );
}