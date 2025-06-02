import React from 'react';
import { ImageSourcePropType } from "react-native";
import { View, Text, Image, TouchableOpacity, colors } from '@/components/ui';
import { ShoppingCart, Star1,  } from 'iconsax-react-nativejs';

interface RecommandedCardProps {
  name: string;
  rating: number;
  price: string | number;
  adress?: string;
  image: ImageSourcePropType;
}

export default function RecommandedCard({ name,  rating, price, image }: RecommandedCardProps) {
  return (
    <View className="bg-white rounded-2xl flex-1 p-4 mb-4   mx-2 ">
      <Image 
        source={image} 
        className="w-full h-24 object-contain" 
      />
     
      <Text className="font-bold my-1 text-xl">{name}</Text>
      <View className='flex-row  justify-between '>
       
        <Star1  color={colors.primary[500]} size={20} variant='Bulk'></Star1>
        <Text> {rating}</Text>
      
      </View>
    
      <View className="flex-row items-center justify-between mt-2">
        <Text className="font-bold">{price}</Text>
        <TouchableOpacity className="bg-primary-500 py-2 rounded-full items-center ml-2  flex-1">
          <View className='flex-row '>
            <Text className="text-white text-sm">Add to cart</Text>
            <View className='bg-white w-6 h-6 ml-1 rounded-full  items-center justify-center'>
              <ShoppingCart size={16} color={colors.primary[500]} variant='Bulk' />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}