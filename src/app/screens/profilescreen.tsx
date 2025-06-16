import React from 'react';
import {

  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView, } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';
import CategoryCard from '@/components/category-card';

const ProfileScreen = ({ navigation }: any) => {
  const paymentMethods = [];
  const categories = ['Orders', 'Saved', 'Favourite', 'Address'];
  const screenWidth = Dimensions.get('window').width;
  return (
    <SafeAreaView className='flex-1 bg-white'>


      <View style={styles.profileHeader}>
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/9.jpg' }}
            style={styles.profileImage}
          />
          <View style={styles.profileText}>
            <Text style={styles.name}>Alex Carry</Text>
            <Text style={styles.email}>alexcarry9@gmail.com</Text>
          </View>
        </View>
      </View>


      <View className='mx-4'>
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
      </View>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment</Text>
        <View style={styles.sectionContent}>
          <Text style={styles.sectionItemTitle}>Payment Method</Text>
          {paymentMethods.length === 0 ? (
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('AddPayment')}
            >
              <Ionicons name="add" size={22} color="#007AFF" />
              <Text style={styles.addButtonText}>Add Payment Method</Text>
            </TouchableOpacity>
          ) : (
            <View>

            </View>
          )}
        </View>
      </View>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.sectionContent}>
          <TouchableOpacity style={styles.sectionItem}>
            <Text style={styles.sectionItemTitle}>Gift Cards</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sectionItem}>
            <Text style={styles.sectionItemTitle}>Order Push Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.sectionItem}>
            <Text style={styles.sectionItemTitle}>Making Push Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.sectionItem, { borderBottomWidth: 0 }]}>
            <Text style={styles.sectionItemTitle}>Sms Notifications</Text>
            <Ionicons name="chevron-forward" size={20} color="#ccc" />
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({


  profileHeader: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  profileText: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  tabItem: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  section: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    padding: 15,
    color: '#333',
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  sectionContent: {
    paddingHorizontal: 15,
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  sectionItemTitle: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  addButtonText: {
    color: '#007AFF',
    marginLeft: 5,
    fontSize: 16,
  },
});

export default ProfileScreen;