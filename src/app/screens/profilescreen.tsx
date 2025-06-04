import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoryCard from '@/components/category-card';

const ProfileScreen = ({ navigation }: any) => {
  // Données simulées pour les méthodes de paiement
  const paymentMethods = [];
  const categories = ['Orders', 'Saved', 'Favourite', 'Address'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* En-tête du profil */}
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <Image
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              style={styles.profileImage}
            />
            <View style={styles.profileText}>
              <Text style={styles.name}>Alex Carry</Text>
              <Text style={styles.email}>alexcarry32@gmail.com</Text>
            </View>
          </View>
        </View>

        {/* Barre d'onglets */}
        {/* <View style={styles.tabsContainer}>
          <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Orders')}>
            <Text style={styles.tabText}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Saved')}>
            <Text style={styles.tabText}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Favourite')}>
            <Text style={styles.tabText}>Favourite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate('Address')}>
            <Text style={styles.tabText}>Address</Text>
          </TouchableOpacity>
        </View> */}
        <View className="flex-row w-full mt-4">
          {categories.map((item) => (
            <CategoryCard key={item} name={item} />
          ))}
        </View>

        {/* Section Paiement */}
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
                {/* Afficher les méthodes de paiement ici si elles existent */}
              </View>
            )}
          </View>
        </View>

        {/* Section Générale */}
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    flex: 1,
  },
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