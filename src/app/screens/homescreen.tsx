import React from 'react';
import { FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoryCard from '@/components/category_card';
import ProductCard from '@/components/product_card';
import LocationSelector from '@/components/location_selector';
import { Text, View, Image, Button  } from '@/components/ui';
import { SearchStatus, ShoppingCart } from 'iconsax-react-nativejs';
import colors from '../../components/ui/colors'; 
import DailyPromoCard from '@/components/daily_promo_cart';
import RecommandedCard from '@/components/recomanded_card';

export default function HomeScreen() {
  const categories = ['Burger', 'Pizza', 'Thai', 'Sushi'];
  const products = [
    { name: 'Cheeseburger', time: '20 min', rating: 4.8, price: '$6.00', image: require('../../../assets/burger.png'), orderf: 500 },
    { name: 'Latte', time: '15 min', rating: 4.5, price: '$4.00', image: require('../../../assets/coffee.png'), orderf: 500  },
  ];

  // Données pour les cartes recommandées
  const recommandedProducts = [
    { name: 'Pizza Margherita', rating: 4.9, price: '$8.00', image: require('../../../assets/burger.png') },
    { name: 'Sushi Deluxe', rating: 4.7, price: '$12.00', image: require('../../../assets/burger.png') },
  ];

  return (
    <View className='flex-1 bg-neutral-50'>
      <View className='mx-4 mt-2'>
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-2xl font-bold">Good Morning</Text>
          <View className="flex-row gap-8">
            <SearchStatus size={18} color={colors.neutral[700]} variant="Outline"  />
            <ShoppingCart size={18} color={colors.primary[400]} variant="Bulk"  />
          </View>
        </View>
        <LocationSelector/>
      </View>
      <View className='px-2 mb-8'>
        <FlatList
          data={products}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => <ProductCard {...item} />}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
         
          ListHeaderComponent={
            <>
              <DailyPromoCard />
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <CategoryCard name={item} />}
                contentContainerStyle={{ marginTop: 16}}
                scrollEnabled={false}
              />
              <View className="flex-row items-center justify-between mt-4  mx-4 ">
                <Text className="text-xl font-bold mb-2">Grab Coffee And Tea</Text>
                <Text className="text-primary-400">See All</Text>
              </View>
            </>
          }
        />
      </View>

      <View className='mx-4'>
        <Text className='text-xl font-bold'>Recommanded</Text>
      </View>

      {/* Ajout des cartes recommandées juste en dessous du titre */}
      <View className="flex-row mx-4">
        {recommandedProducts.map((item, idx) => (
          <RecommandedCard
            key={idx}
            name={item.name}
            rating={item.rating}
            price={item.price}
            image={item.image}
          />
        ))}
      </View>
    </View>
  );
}