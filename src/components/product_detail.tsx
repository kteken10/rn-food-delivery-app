// components/product-modal.tsx
import React from 'react';
import { Image, View, StyleSheet, Pressable } from 'react-native';
import {Text} from '@/components/ui';
import colors from '@/components/ui/colors';
import { Product } from '@/data/product';
import { Modal, useModal } from './ui';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/src/types';

interface ProductModalProps {
  product: Product | null;
  onAddToCart: () => void;
}

export const useProductModal = () => {
  return useModal();
};

export const ProductModal = React.forwardRef<BottomSheetModalMethods, ProductModalProps>(
  ({ product, onAddToCart }, ref) => {
    const { dismiss } = useProductModal();

    return (
      <Modal
        ref={ref}
        title={product?.name || 'Product Details'}
        snapPoints={['70%']}
      >
        {product && (
          <View style={styles.container}>
            <Image
              source={product.image}
              style={styles.productImage}
              resizeMode="cover"
            />

            <View style={styles.detailsContainer}>
              <Text style={styles.price}>{product.price}</Text>
              <Text style={styles.rating}>Rating: {product.rating} ★</Text>
              <Text style={styles.description}>{product.description}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.button, styles.addToCartButton]}
                onPress={() => {
                  onAddToCart();
                  dismiss();
                }}
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Modal>
    );
  }
);

ProductModal.displayName = 'ProductModal';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  price: {
    color: colors.primary[400],
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  rating: {
    color: colors.neutral[600],
    fontSize: 16,
    marginBottom: 12,
  },
  description: {
    color: colors.neutral[600],
    fontSize: 14,
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 16,
  },
  button: {
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartButton: {
    backgroundColor: colors.primary[400],
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});