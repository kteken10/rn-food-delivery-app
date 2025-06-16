// components/floating-modal.tsx
import React from 'react';
import { Modal, View, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Text } from '@/components/ui';

const { width } = Dimensions.get('window');

interface FloatingModalProps {
  visible: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const FloatingModal = ({ visible, title, children, onClose }: FloatingModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.background} onPress={onClose} />
        
        <View style={styles.card}>
          {title && <Text style={styles.title}>{title}</Text>}
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  card: {
    width: width * 0.85,
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});