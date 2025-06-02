import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Location, ArrowDown2 } from 'iconsax-react-nativejs';
import { Menu } from 'react-native-paper';
import { colors } from './ui';

export default function LocationSelector() {
  const [visible, setVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('New York');

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const countries = ['New York', 'Paris', 'Douala', 'Tokyo'];

  return (
    <View className="flex-row items-center mt-2 ">
      <Location size={18} color={colors.primary[500]} variant="Bulk"  />

      <Text className="text-gray-500 mx-1">{selectedCountry}</Text>

      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={openMenu}>
            <ArrowDown2 size={18} color="#6B7280" variant="Outline" />
          </TouchableOpacity>
        }
      >
        {countries.map((country) => (
          <Menu.Item
            key={country}
            onPress={() => {
              setSelectedCountry(country);
              closeMenu();
            }}
            title={country}
          />
        ))}
      </Menu>
    </View>
  );
}