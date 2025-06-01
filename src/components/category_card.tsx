import React from 'react';
import {TouchableOpacity,Text} from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';

type CategoryCardProps = {
  name: string;
};

export default function CategoryCard({ name }: CategoryCardProps) {
  return (
    <TouchableOpacity className="w-20 h-20  bg-neutral-100 rounded-xl items-center justify-center mx-2">
      <Ionicons name="fast-food-outline" size={24} color="#FF9933" />
      <Text className='text-neutral-600'>{name}</Text>
    </TouchableOpacity>
  );
}

