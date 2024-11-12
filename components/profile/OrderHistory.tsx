import { Order } from '@/src/types';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface OrderHistoryProps {
  headerTitle: string;
  orders: Order[];
  renderOrderCard: (item: { item: Order; index: number; }) => JSX.Element;
}

export default function OrderHistory({ headerTitle, orders, renderOrderCard }: OrderHistoryProps) {
  return (
    <View style={[styles.section, { paddingHorizontal: 0 }]}>
      <Text style={[styles.sectionTitle]}>{headerTitle}</Text>
      <FlatList
        data={orders}
        renderItem={renderOrderCard}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.orderCardContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  orderCardContainer: {
    padding: 10,
    gap: 20
  },
})