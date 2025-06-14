import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  TouchableOpacity,
  View as RNView,
  StyleSheet,
  FlatListProps,
  ListRenderItem,
  Pressable
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  withTiming,
  Extrapolate,
  withDelay,
} from 'react-native-reanimated';
import { SearchStatus, ShoppingCart } from 'iconsax-react-nativejs';
import { Text, View } from '@/components/ui';
import colors from '../../components/ui/colors';
import CategoryCard from '@/components/category-card';
import ProductCard from '@/components/product-card';
import LocationSelector from '@/components/location-selector';
import RecommandedCard from '@/components/recomanded-card';
import DailyPromoCard from '@/components/daily-promo-cart.tsx';
import { Product, products, recommandedProducts } from '@/data/product';
import { ProductModal, useProductModal } from '@/components/product_detail';

interface RecommandedProduct extends Product {
  adress: string;
}

type AnimatedProductCardProps = {
  item: Product;
  index: number;
};

type AnimatedRecommandedCardProps = {
  item: RecommandedProduct;
  index: number;
};

interface FlatListContentItem {
  key: string;
}

const AnimatedFlatList = Animated.createAnimatedComponent<FlatListProps<FlatListContentItem>>(FlatList);
const screenWidth = Dimensions.get('window').width;

const HomeScreen: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { ref: productModalRef, present: presentProductModal } = useProductModal();
  const scrollY = useSharedValue<number>(0);

  const categories: string[] = ['Burger', 'Pizza', 'Thai', 'Sushi'];

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const handleProductPress = (product: Product) => {
    setSelectedProduct(product);
    presentProductModal();
  };

  const handleAddToCart = () => {
    // Logique pour ajouter au panier
    console.log('Product added to cart:', selectedProduct);
  };

  const promoCardStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [0, 80], [1, 0], Extrapolate.CLAMP),
    transform: [
      {
        translateY: interpolate(scrollY.value, [0, 100], [0, -40], Extrapolate.CLAMP)
      },
      {
        rotate: `${interpolate(scrollY.value, [0, 100], [0, 15], Extrapolate.CLAMP)}deg`
      }
    ]
  }));

  const categoryStyle = useAnimatedStyle(() => ({
    transform: [{
      scale: interpolate(scrollY.value, [0, 50], [1, 0.95], Extrapolate.CLAMP)
    }],
    opacity: interpolate(scrollY.value, [0, 100], [1, 0.9], Extrapolate.CLAMP)
  }));

  const stickyHeaderStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [300, 350], [0, 1], Extrapolate.CLAMP),
    transform: [{
      translateY: interpolate(scrollY.value, [300, 350], [20, 0], Extrapolate.CLAMP)
    }]
  }));

  const AnimatedProductCard: React.FC<AnimatedProductCardProps> = ({ item, index }) => {
    const productOpacity = useSharedValue<number>(0);

    React.useEffect(() => {
      productOpacity.value = withDelay(index * 100, withTiming(1, { duration: 500 }));
    }, []);

    const productStyle = useAnimatedStyle(() => ({
      opacity: productOpacity.value,
      transform: [{
        translateY: interpolate(productOpacity.value, [0, 1], [20, 0], Extrapolate.CLAMP)
      }],
    }));

    return (
      <TouchableOpacity onPress={() => handleProductPress(item)}>
        <Animated.View style={[productStyle, { flex: 1 }]}>
          <ProductCard {...item} />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const AnimatedRecommandedCard: React.FC<AnimatedRecommandedCardProps> = ({ item, index }) => {
    const cardOpacity = useSharedValue<number>(0);

    React.useEffect(() => {
      cardOpacity.value = withDelay(index * 150, withTiming(1, { duration: 600 }));
    }, []);

    const cardStyle = useAnimatedStyle(() => ({
      opacity: cardOpacity.value,
      transform: [{
        translateX: interpolate(cardOpacity.value, [0, 1], [50, 0], Extrapolate.CLAMP)
      }],
    }));

    return (
      <Animated.View style={cardStyle}>
        <RecommandedCard {...item} />
      </Animated.View>
    );
  };

  const renderItem: ListRenderItem<FlatListContentItem> = ({ item }) => (
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
          keyExtractor={(item) => item.id}
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

      <View className='flex-1 w-full px-4'>
        <FlatList
          data={recommandedProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <AnimatedRecommandedCard item={item} index={index} />}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
    </>
  );

  return (
    <View className='flex-1 bg-quadrary-300'>
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
        data={[{ key: 'content' }]}
        renderItem={renderItem}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />

      {selectedProduct && (
        <ProductModal
          ref={productModalRef}
          product={selectedProduct}
          onAddToCart={handleAddToCart}
        />
      )}
    </View>
  );
};

export default HomeScreen;