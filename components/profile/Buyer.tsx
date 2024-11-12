import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from "react";
import { CurrentUser } from '@/src/types';
import OrderHistory from './OrderHistory';
import { Order } from '@/src/types';
import { Styles } from '@/constants/Styles';

interface BuyerProfileProps {
  currentUser: NonNullable<CurrentUser['currentUser']>
}

const orders = [
  { id: '1', seller: 'Bilnaf Kitchen', title: 'Classic Burger', description: 'Juicy beef patty with cheese Juicy beef patty with cheese Juicy beef patty with cheese Juicy beef patty with cheese Juicy beef patty with cheese Juicy beef patty with cheese', price: '$8.99', image: require('../../assets/images/a.png'), rating: '4.5' },
  { id: '2', seller: 'Lady M', title: 'Sushi Platter', description: 'Assorted sushi rolls', price: '$12.99', image: require('../../assets/images/b.png'), rating: '4.8' },
  { id: '3', seller: 'Katsina City Restaurant', title: 'Margherita Pizza', description: 'Fresh mozzarella and basil', price: '$10.99', image: require('../../assets/images/c.png'), rating: '4.3' },
  { id: '4', seller: 'Ice Hub', title: 'Classic Burger', description: 'Juicy beef patty with cheese', price: '$8.99', image: require('../../assets/images/a.png'), rating: '4.5' },
  { id: '5', seller: 'Sally\'s Cuisine', title: 'Sushi Platter', description: 'Assorted sushi rolls', price: '$12.99', image: require('../../assets/images/b.png'), rating: '4.8' },
  { id: '6', seller: 'Bilnaf Kitchen', title: 'Margherita Pizza', description: 'Fresh mozzarella and basil', price: '$10.99', image: require('../../assets/images/c.png'), rating: '4.3' },
  // Add more items as needed
]

export default function BuyerProfile({currentUser}: BuyerProfileProps) {

  return (
    <View style={{ flex: 1 }}>

      {/* Profile Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Information</Text>
        <TouchableOpacity style={styles.option}>
          {currentUser.firstName && currentUser.lastName ?
            (
              <Text style={styles.optionText}>
                {`${currentUser.firstName}  ${currentUser.lastName}`}
              </Text>
            ) : (
              <Text style={styles.optionText}>
                Your Name
              </Text>
            )
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>
            {currentUser.phoneNumber || 'Your Phone Number'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>
            {currentUser.address || 'Your Address'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Order History */}
      <OrderHistory
        orders={orders}
        headerTitle='Order History'
        renderOrderCard={renderOrderCard}
      />

      {/* Payment Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Settings</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Manage Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Set Default Payment Option</Text>
        </TouchableOpacity>
      </View>

      {/* Notification Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notification Preferences</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Order Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Promotions</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const renderOrderCard = ({ item }:  { item: Order; index: number; }) => (
  <View style={styles.card}>
    <View style={styles.buyerContainer}>
      <Text style={styles.buyerText} numberOfLines={1}>{item.seller}</Text>
    </View>
    <Image source={item.image} style={styles.image} />
    <View style={[styles.infoContainer, { flex: 1 }]}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name} numberOfLines={1}>{item.title}</Text>
        <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.rating}>⭐ {item.rating}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>View Order</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 14,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    overflow: 'hidden',
    width: 200,
    ...Styles.shadow
  },
  buyerContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 2,
    marginBottom: 10,
    width: '50%',
    zIndex: 1,
    ...Styles.shadow
  },
  buyerText: {
    color: '#000',
    fontSize: 12,
    textAlign: 'center',
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
    borderRadius: 4,
    alignItems: 'center',
    paddingVertical: 5,
    // backgroundColor: '#ff6347',
    backgroundColor: '#000',
    ...Styles.shadow,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lobster'
  },
});