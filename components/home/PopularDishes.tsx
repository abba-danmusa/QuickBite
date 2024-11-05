import { Text, View, StyleSheet } from "react-native"
import { Image } from "react-native"

interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: any; // Replace with the appropriate type for your image (e.g., ImageSourcePropType)
}

const popularDishes: Dish[] = [
  {
    id: '1',
    name: 'Classic Burger',
    description: 'Juicy beef patty with all the fixings',
    price: '$9.99',
    image: require('../../assets/images/1.jpg'), // Replace with your image path
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    description: 'Fresh basil and melted cheese on thin crust',
    price: '$12.99',
    image: require('../../assets/images/2.jpg'), // Replace with your image path
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce with parmesan and croutons',
    price: '$7.99',
    image: require('../../assets/images/3.jpg'), // Replace with your image path
  },
];

export default function PopularDishes() {
  return (
    <View style={styles.popularDishesContainer}>
      <Text style={styles.sectionTitle}>Popular Dishes</Text>
      {popularDishes.map((item, index) => 
        <View key={ item.id } style={styles.dishItem}>
            <Image source={item.image} style={styles.dishImage} />
            <View style={styles.dishDetails}>
              <Text style={styles.dishName}>{item.name}</Text>
              <Text style={styles.dishDescription}>{item.description}</Text>
            </View>
            <Text style={styles.dishPrice}>{item.price}</Text>
          </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  popularDishesContainer: {
    marginHorizontal: 10
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  dishItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dishImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  dishDetails: {
    flex: 1,
  },
  dishName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dishDescription: {
    fontSize: 14,
    color: '#777',
  },
  dishPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})