import SearchBar from '@/components/explore/SearchBar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { BlurView } from '@react-native-community/blur'; // Install this package for blur effect

const vendors = [
  {
    id: 1,
    name: 'Tasty Corner',
    latitude: 37.78825,
    longitude: -122.4324,
    image: 'https://example.com/vendor1.jpg',
    specialty: 'Burgers & Fries',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Sushi Delight',
    latitude: 37.78925,
    longitude: -122.4354,
    image: 'https://example.com/vendor2.jpg',
    specialty: 'Sushi & Rolls',
    rating: 4.8,
  },
  // Add more vendors as needed
];

const ExploreScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <SearchBar/>

      {/* Map Section with Rounded Corners */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {vendors.map((vendor) => (
          <Marker
            key={vendor.id}
            coordinate={{ latitude: vendor.latitude, longitude: vendor.longitude }}
            title={vendor.name}
            description={vendor.specialty}
          />
        ))}
      </MapView>

      {/* Featured Menus Section with Improved Styling */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuList}>
        {vendors.map((vendor) => (
          <TouchableOpacity key={vendor.id} style={styles.menuCard}>
            <Image source={{ uri: vendor.image }} style={styles.menuImage} />
            <View style={styles.menuDetails}>
              <Text style={styles.menuTitle}>{vendor.name}</Text>
              <Text style={styles.menuSpecialty}>{vendor.specialty}</Text>
              <Text style={styles.menuRating}>⭐ {vendor.rating}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Blurred and Transparent Tab Bar */}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  searchInput: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  map: {
    height: Dimensions.get('window').height * 0.4,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    marginTop: 10,
  },
  menuList: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  menuCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    width: 160,
    marginHorizontal: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  menuImage: {
    width: '100%',
    height: 100,
  },
  menuDetails: {
    padding: 10,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  menuSpecialty: {
    fontSize: 14,
    color: '#888',
    marginVertical: 2,
  },
  menuRating: {
    fontSize: 14,
    color: '#FF6D00',
    fontWeight: 'bold',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  tabIcon: {
    alignItems: 'center',
  },
});

export default ExploreScreen