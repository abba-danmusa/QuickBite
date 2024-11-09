import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { Styles } from "@/constants/Styles";
import React from "react";


export default function BuyerProfile() {

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* Profile Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Information</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Change Profile Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Edit Contact Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Adjust Delivery Preferences</Text>
        </TouchableOpacity>
      </View>

      {/* Order History */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order History</Text>
        <View style={styles.orderCard}>
          <Image style={styles.orderImage} source={{ uri: 'https://via.placeholder.com/100' }} />
          <View style={styles.orderDetails}>
            <Text style={styles.orderText}>Product A</Text>
            <Text style={styles.orderText}>Date: MM/DD/YYYY</Text>
            <Text style={styles.orderText}>Price: $XX.XX</Text>
          </View>
        </View>
        {/* Repeat for more order cards */}
      </View>

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
    </SafeAreaView>
  )
}

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
  orderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  orderImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  orderDetails: {
    flex: 1,
  },
  orderText: {
    fontSize: 14,
    color: '#333',
  },
});