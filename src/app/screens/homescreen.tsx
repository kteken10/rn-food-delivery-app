import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  withTiming,
  Extrapolate,
  withDelay
} from 'react-native-reanimated';

import CategoryCard from '@/components/category-card';
import ProductCard from '@/components/product-card';
import LocationSelector from '@/components/location-selector';
import { Text, View } from '@/components/ui';
import { SearchStatus, ShoppingCart } from 'iconsax-react-nativejs';
import colors from '../../components/ui/colors';
import DailyPromoCard from '@/components/daily-promo-cart.tsx';
import RecommandedCard from '@/components/recomanded-card';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function HomeScreen() {
  const scrollY = useSharedValue(0);
  const categories = ['Burger', 'Pizza', 'Thai', 'Sushi'];
  const screenWidth = Dimensions.get('window').width;
  const products = [
    { name: 'Cheeseburger', time: '20 min', rating: 4.8, price: '$6.00', image: require('../../../assets/burger.png'), orderf: 500 },
    { name: 'Latte', time: '15 min', rating: 4.5, price: '$4.00', image: require('../../../assets/coffee.png'), orderf: 500 },
  ];

  const recommandedProducts = [
    { name: 'Pizza Margherita', rating: 4.9, price: '$8.00', image: require('../../../assets/burger.png'), adress: "Cokie Heaven, 53 US city street" },
    { name: 'Sushi Deluxe', rating: 4.7, price: '$12.00', image: require('../../../assets/burger.png'), adress: "Cokie Heaven, 53 US city street" },
  ];

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  // Style animé pour le DailyPromoCard (effet parallax)
  const promoCardStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      scrollY.value,
      [0, 100],
      [0, 15], // 15 degrés de rotation
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      scrollY.value,
      [0, 80],
      [1, 0],
      Extrapolate.CLAMP
    );
    return {
      opacity,
      transform: [
        { translateY: interpolate(scrollY.value, [0, 100], [0, -40], Extrapolate.CLAMP) },
        { rotate: `${rotate}deg` }
      ]
    };
  });

  // Style animé pour les catégories (scale au scroll)
  const categoryStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollY.value,
            [0, 50],
            [1, 0.95],
            Extrapolate.CLAMP
          ),
        },
      ],
      opacity: interpolate(
        scrollY.value,
        [0, 100],
        [1, 0.9],
        Extrapolate.CLAMP
      ),
    };
  });

  // Style animé pour le sticky header "Recommanded"
  const stickyHeaderStyle = useAnimatedStyle(() => ({
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    opacity: interpolate(
      scrollY.value,
      [300, 350],
      [0, 1],
      Extrapolate.CLAMP
    ),
    transform: [{
      translateY: interpolate(
        scrollY.value,
        [300, 350],
        [20, 0],
        Extrapolate.CLAMP
      )
    }]
  }));

  // Animation pour les produits recommandés
  const AnimatedRecommandedCard = ({ item, index }: { item: typeof recommandedProducts[0]; index: number }) => {
    const cardOpacity = useSharedValue(0);
    React.useEffect(() => {
      cardOpacity.value = withDelay(index * 150, withTiming(1, { duration: 600 }));
    }, []);

    const cardStyle = useAnimatedStyle(() => ({
      opacity: cardOpacity.value,
      transform: [{
        translateX: interpolate(
          cardOpacity.value,
          [0, 1],
          [50, 0],
          Extrapolate.CLAMP
        )
      }],
    }));

    return (
      <Animated.View style={cardStyle}>
        <RecommandedCard
          name={item.name}
          rating={item.rating}
          price={item.price}
          image={item.image}
          adress={item.adress}
        />
      </Animated.View>
    );
  };

  // Animation pour les produits normaux
  const AnimatedProductCard = ({ item, index }: { item: typeof products[0]; index: number }) => {
    const productOpacity = useSharedValue(0);
    React.useEffect(() => {
      productOpacity.value = withDelay(index * 100, withTiming(1, { duration: 500 }));
    }, []);

    const productStyle = useAnimatedStyle(() => ({
      opacity: productOpacity.value,
      transform: [{
        translateY: interpolate(
          productOpacity.value,
          [0, 1],
          [20, 0],
          Extrapolate.CLAMP
        )
      }],
    }));

    return (
      <Animated.View style={[productStyle, { flex: 1 }]}>
        <ProductCard {...item} />
      </Animated.View>
    );
  };

  return (
    <View className='flex-1 bg-quadrary-700'>
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

      <AnimatedFlatList
        data={[{ key: 'content' }]} // Dummy data pour le FlatList
        renderItem={() => (
          <>
            <View className='px-2'>
              <Animated.View style={promoCardStyle}>
                <DailyPromoCard />
              </Animated.View>



              <Animated.View style={categoryStyle}>
                <FlatList
                  horizontal
                  data={categories}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <CategoryCard name={item} width={screenWidth / 4} />
                  )}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ marginTop: 16 }}
                />
              </Animated.View>



              <View className="flex-row items-center justify-between mt-4 mx-4">
                <Text className="text-xl font-bold mb-2">Grab Coffee And Tea</Text>
                <Text className="text-primary-400">See All</Text>
              </View>

              <FlatList
                data={products}
                keyExtractor={(_, i) => i.toString()}
                numColumns={2}
                renderItem={({ item, index }) => <AnimatedProductCard item={item} index={index} />}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
              />
            </View>


            <Animated.View
              className='mx-4 mb-4 bg-neutral-100 pt-2 z-10'
              style={stickyHeaderStyle}
            >
              <Text className='text-xl font-bold'>Recommanded</Text>
            </Animated.View>

            {/* Cartes Recommandées avec animation */}
            <View className='flex-1 w-full px-4'>
              <FlatList
                data={recommandedProducts}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item, index }) => <AnimatedRecommandedCard item={item} index={index} />}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
              />
            </View>
          </>
        )}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </View>
  );
}