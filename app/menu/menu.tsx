import BagButton from '@/components/BagButton';
import { Styles } from '@/constants/Styles';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const menuItems = [
  { id: '1', seller: 'Bilnaf Kitchen', name: 'Classic Burger', description: 'Juicy beef patty with cheese Juicy beef patty with cheese Juicy beef patty with cheese Juicy beef patty with cheese Juicy beef patty with cheese Juicy beef patty with cheese', price: '$8.99', image: require('../../assets/images/a.png'), rating: 4.5 },
  { id: '2', seller: 'Lady M', name: 'Sushi Platter', description: 'Assorted sushi rolls', price: '$12.99', image: require('../../assets/images/b.png'), rating: 4.8 },
  { id: '3', seller: 'Katsina City Restaurant', name: 'Margherita Pizza', description: 'Fresh mozzarella and basil', price: '$10.99', image: require('../../assets/images/c.png'), rating: 4.3 },
  { id: '1', seller: 'Ice Hub', name: 'Classic Burger', description: 'Juicy beef patty with cheese', price: '$8.99', image: require('../../assets/images/a.png'), rating: 4.5 },
  { id: '2', seller: 'Sally\'s Cuisine', name: 'Sushi Platter', description: 'Assorted sushi rolls', price: '$12.99', image: require('../../assets/images/b.png'), rating: 4.8 },
  { id: '3', seller: 'Bilnaf Kitchen', name: 'Margherita Pizza', description: 'Fresh mozzarella and basil', price: '$10.99', image: require('../../assets/images/c.png'), rating: 4.3 },
  // Add more items as needed
];

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: string;
    image: any;
    rating: number;
    seller: string;
  };
}

const VendorMenuScreen = () => {
  const renderMenuItem = ({ item }: MenuItemProps) => (
    <View style={styles.card}>
      <View style={styles.sellerContainer}>
        <Text style={styles.sellerText} numberOfLines={1}>{item.seller}</Text>
      </View>
      <Image source={item.image} style={styles.image} />
      <View style={[styles.infoContainer, { flex: 1 }]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.rating}>⭐ {item.rating}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <BagButton />
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  flatListContentContainer: {
    paddingBottom: 100,
    width: '100%',
    paddingHorizontal: 10,
  },
  sellerContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 2,
    marginBottom: 10,
    width: '50%',
    zIndex: 1,
    ...Styles.shadow
  },
  sellerText: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
    overflow: 'hidden',
    width: '45%',
    ...Styles.shadow
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginVertical: 5,
    lineHeight: 15,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 12,
    color: '#000',
    // color: '#ff9800',
    marginTop: 5,
  },
  addButton: {
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#ff6347',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lobster'
  },
});

export default VendorMenuScreen