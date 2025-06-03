import React from 'react';
import { FlatList, ScrollView } from 'react-native';

import CategoryCard from '@/components/category-card';
import ProductCard from '@/components/product-card';
import LocationSelector from '@/components/location-selector';
import { Text, View, Image, Button } from '@/components/ui';
import { SearchStatus, ShoppingCart } from 'iconsax-react-nativejs';
import colors from '../../components/ui/colors';
import DailyPromoCard from '@/components/daily-promo-cart.tsx';
import RecommandedCard from '@/components/recomanded-card';

export default function HomeScreen() {
  const categories = ['Burger', 'Pizza', 'Thai', 'Sushi'];
  const products = [
    { name: 'Cheeseburger', time: '20 min', rating: 4.8, price: '$6.00', image: require('../../../assets/burger.png'), orderf: 500 },
    { name: 'Latte', time: '15 min', rating: 4.5, price: '$4.00', image: require('../../../assets/coffee.png'), orderf: 500 },
  ];

  // Données pour les cartes recommandées
  const recommandedProducts = [
    { name: 'Pizza Margherita', rating: 4.9, price: '$8.00', image: require('../../../assets/burger.png'), adress: "Cokie Heaven, 53 US city street" },
    { name: 'Sushi Deluxe', rating: 4.7, price: '$12.00', image: require('../../../assets/burger.png'), adress: "Cokie Heaven, 53 US city street" },

  ];

  return (
    <View className='flex-1 bg-neutral-100'>
      <View className='mx-4 mt-2'>
        <View className="flex-row justify-between items-center mt-2">
          <Text className="text-2xl font-bold">Good Morning</Text>
          <View className="flex-row gap-8">
            <SearchStatus size={18} color={colors.neutral[700]} variant="Outline" />
            <ShoppingCart size={18} color={colors.primary[400]} variant="Bulk" />
          </View>
        </View>
        <LocationSelector />
      </View>

      <ScrollView>
        <View className='px-2 '>
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
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ marginTop: 16 }}
                  style={{ flexGrow: 0 }}
                >

                  {categories.map((item) => (
                    <CategoryCard key={item} name={item} />
                  ))}

                </ScrollView>
                <View className="flex-row items-center justify-between mt-4  mx-4 ">
                  <Text className="text-xl font-bold mb-2">Grab Coffee And Tea</Text>
                  <Text className="text-primary-400">See All</Text>
                </View>
              </>
            }
          />
        </View>

        <View className='mx-4 mb-4'>
          <Text className='text-xl font-bold'>Recommanded</Text>
        </View>

        {/* Ajout des cartes recommandées juste en dessous du titre */}
        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          className='flex-1 w-full px-4'


        >

          {recommandedProducts.map((item, idx) => (
            <RecommandedCard
              key={idx}
              name={item.name}
              rating={item.rating}
              price={item.price}
              image={item.image}
              adress={item.adress}
            />
          ))}

        </ScrollView>
      </ScrollView>
    </View>
  );
}