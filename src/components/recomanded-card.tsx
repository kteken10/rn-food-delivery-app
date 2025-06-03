import React from 'react';
import { ImageSourcePropType } from "react-native";
import { View, Text, Image, TouchableOpacity, colors } from '@/components/ui';
import { ShoppingCart, Star1 } from 'iconsax-react-nativejs';

interface RecommandedCardProps {
  name: string;
  rating: number;
  price: string | number;
  adress?: string;
  image: ImageSourcePropType;
}

export default function RecommandedCard({ name, rating, price, image, adress }: RecommandedCardProps) {
  return (
    <View className="bg-white rounded-2xl p-4 mb-4  w-full">
      <View className="flex-row items-center w-full">
        <Image
          source={image}

          style={{ width: '33%', height: 96, resizeMode: 'contain' }} // 96 = 24 * 4 (h-24)
        />
        <View className="pl-4 flex-1">

          <View className='flex-row justify-between'>   <Text className="font-bold my-1 text-lg">{name}</Text>


            <View className='ml-2 flex-row  h-7 border border-neutral-400 px-2 rounded-full items-center '>
              <Star1 color={colors.primary[500]} size={15} variant='Bulk' />
              <Text className='text-sm'> {rating}</Text>
            </View>


          </View>



          <View className="flex-row items-center justify-between mt-2">
            <Text className="font-bold text-neutral-900">{adress}</Text>

          </View>

/* The commented out code block you provided is a section of JSX code that seems to be a
          button for adding an item to a shopping cart. Let me break it down for you: */

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