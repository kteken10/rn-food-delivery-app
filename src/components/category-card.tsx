import React from 'react';
import { TouchableOpacity, Text } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';

type CategoryCardProps = {
  name: string;
  width?: number;
};

export default function CategoryCard({ name, width }: CategoryCardProps) {
  return (
    <TouchableOpacity
      className="h-20 bg-quadrary-400 rounded-xl items-center justify-center mx-1 gap-4"
      style={{ width }}
    >
      <Ionicons name="fast-food-outline" size={24} color="#FF8800" />
      <Text className='text-neutral-700'>{name}</Text>
    </TouchableOpacity>
  );
}