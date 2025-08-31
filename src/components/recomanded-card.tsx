import React from 'react';
import { ImageSourcePropType } from "react-native";
import { View, Text, Image, TouchableOpacity, colors } from '@/components/ui';
import { ShoppingCart, Star1 } from 'iconsax-react-nativejs';

interface RecommandedCardProps {
  name: string;
  rating: number;
  price: string | number;
  address?: string;
  image: ImageSourcePropType;
}

export default function RecommandedCard({ name, rating, price, image, address }: RecommandedCardProps) {
  return (
    <View className="bg-white rounded-2xl px-4 mb-4 py-2 w-full">
      <View className="flex-row items-center w-full">
        <Image
          source={image}

          style={{ width: '33%', height: 100, resizeMode: 'contain' }}
        />
        <View className="pl-4 flex-1">

          <View className='flex-row justify-between items-center'>   <Text className="font-bold my-1 text-xm">{name}</Text>


            <View className='ml-2 flex-row  h-7 border border-quadrary-500 px-2 rounded-full items-center '>
              <Star1 color={colors.primary[500]} size={15} variant='Bulk' />
              <Text className='text-sm'> {rating}</Text>
            </View>


          </View>
          <View className='flex-row justify-between items-center'>   <Text className="font-bold my-1 text-sm text-quadrary-600">{address}</Text>





          </View>







          <View className="flex-row items-center justify-between mt-2">
            <Text className="font-bold">{price}</Text>
            <TouchableOpacity className="bg-primary-500 h-8 flex-row py-2 rounded-full items-center ml-2 px-2">

              <Text className="text-white text-sm">Add to cart</Text>
              <View className='bg-white w-6 h-6 ml-1 rounded-full items-center justify-center'>
                <ShoppingCart size={16} color={colors.primary[500]} variant='Bulk' />
              </View>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}