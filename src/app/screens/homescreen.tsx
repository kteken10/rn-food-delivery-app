import React from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoryCard from '@/components/category_card';
import ProductCard from '@/components/product_card';
import { Text, View, ScrollView, Image, Button  } from '@/components/ui';

export default function HomeScreen() {
  const categories = ['Burger', 'Pizza', 'Thai', 'Sushi'];
  const products = [
    { name: 'Cheeseburger', time: '20 min', rating: 4.8, price: '$6.00', image: require('../../../assets/burger.png') },
    { name: 'Latte', time: '15 min', rating: 4.5, price: '$4.00', image: require('../../../assets/coffee.png') }
  ];
  return (
    <>
    <View className='mx-4 mt-2'>
      <View className="flex-row justify-between items-center mt-2">
        <Text className="text-2xl font-bold">Good Morning</Text>
        <View className="flex-row">
          <Ionicons name="search" size={24} />
          <Ionicons name="cart-outline" size={24} style={{ marginLeft: 16 }} />
        </View>
      </View>
      
      <View className="flex-row items-center mt-2">
         <Ionicons name="location-outline" />
      <Text className="text-gray-500 my-1 flex-row items-center">
       
         New York
      </Text>
      
      </View>


      </View>

       <ScrollView className="px-4  flex-1">
                 <View className="flex-row h-40 bg-primary-400 rounded-2xl p-4 items-center mt-2">
            <View className="flex-1">
              <Text className="text-lg font-bold text-white">Claim your daily!</Text>
              <Text className="text-lg font-bold text-white mt-1">free delivery naw!</Text>
              <Button label="Order Now" className="w-40 border mt-3 rounded-full" />
            </View>
            <Image
              source={require('../../../assets/scooter.png')}
              className="w-40 h-40 ml-3 "
            /> 
          </View>


      <View className="flex-row items-center justify-between mt-4">
       <Text className="text-lg font-bold mb-2">Grab Coffee And Tea</Text>
        <Text className="text-blue-500">See All</Text>
       </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryCard name={item} />}
        contentContainerStyle={{ marginVertical: 20 }}
      />

      <Text className="text-lg font-bold mb-2">Recommended</Text>
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
</ScrollView>
    </>
  );
}

