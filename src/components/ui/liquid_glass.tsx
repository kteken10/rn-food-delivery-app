import React from 'react';
import { View, StyleSheet, Pressable, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming
} from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';
import { Text } from '@/components/ui';

const { width } = Dimensions.get('window');

interface LiquidGlassModalProps {
  visible: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const LiquidGlassModal = ({
  visible,
  title,
  children,
  onClose
}: LiquidGlassModalProps) => {
  const scale = useSharedValue(0.8);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    if (visible) {
      scale.value = withSpring(1, { damping: 15 });
      opacity.value = withTiming(1, { duration: 300 });
    } else {
      scale.value = withTiming(0.8, { duration: 200 });
      opacity.value = withTiming(0, { duration: 200 });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value
  }));

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.modal, animatedStyle]}>
        {/* Effet liquide avec flou */}
        <BlurView
          style={styles.liquidBackground}
          blurType="light"
          blurAmount={100}
          reducedTransparencyFallbackColor="transparent"
        >
          <View style={styles.liquidEffect} />
        </BlurView>

        {/* Contenu */}
        <View style={styles.content}>
          {title && <Text style={styles.title}>{title}</Text>}
          {children}
        </View>

        {/* Bouton de fermeture */}
        <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>×</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backgroundColor: 'transparent', // Fond complètement transparent
  },
  modal: {
    width: width * 0.85,
    maxWidth: 400,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  liquidBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  liquidEffect: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent', // Fond complètement transparent
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  content: {
    padding: 24,
    backgroundColor: 'transparent', // Fond complètement transparent
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  title: {
    fontSize: 22,

    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  closeText: {
    color: 'white',
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '300',
  },
});