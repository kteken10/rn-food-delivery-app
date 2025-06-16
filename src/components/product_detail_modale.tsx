// components/animated-modal.tsx
import { Product } from '@/data/product';
import React, { useEffect } from 'react';
import { StyleSheet, Pressable, Dimensions } from 'react-native';
import { Text, View, Image } from '@/components/ui';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const { height } = Dimensions.get('window');

interface AnimatedModalProps {
  visible: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  product?: Product | null; 
  onAddToCart?: () => void; 
}

export const AnimatedModal = ({
  visible,
  children,
  onClose,
  product,
  onAddToCart
}: AnimatedModalProps) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(height);

  useEffect(() => {
    if (visible) {
      opacity.value = withTiming(1, { duration: 300 });
      translateY.value = withSpring(0, {
        damping: 15,
        stiffness: 100,
      });
    } else {
      opacity.value = withTiming(0, { duration: 200 });
      translateY.value = withTiming(height, { duration: 300 });
    }
  }, [visible]);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const modalStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  if (!visible) return null;

  return (
    <>
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <Pressable style={styles.absoluteFill} onPress={onClose} />
      </Animated.View>

      <Animated.View style={[styles.modalContainer, modalStyle]}>
   
        {children || (
          <View style={styles.productContainer}>
            {product && (
              <>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>${product.price}</Text>
                <Pressable
                  style={styles.addToCartButton}
                  onPress={onAddToCart}
                >
                  <Text style={styles.addToCartText}>Add to Cart</Text>
                </Pressable>
              </>
            )}
          </View>
        )}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  absoluteFill: {
    flex: 1,
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  productContainer: {
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    color: '#888',
    marginBottom: 24,
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});