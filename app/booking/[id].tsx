import React from 'react';
import { 
  View, 
  Text, 
  ScrollView,
  StyleSheet, 
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useLocalSearchParams, router } from 'expo-router';
import Button from '@/components/ui/Button';

// Define a type for the icon that matches FontAwesome's expected values
type FontAwesomeIconName = React.ComponentProps<typeof FontAwesome>['name'];

// Define a type for the booking details
interface BookingDetail {
  label: string;
  value: string;
  icon: FontAwesomeIconName;
}

export default function BookingDetailScreen() {
  const { id } = useLocalSearchParams();

  const bookingDetails: BookingDetail[] = [
    { label: 'MANZILLINGIZ', value: '', icon: 'chevron-right' },
    { label: 'XIZMAT NARXI', value: 'Birinchi mijozlar uchun Standard | 1-2 KUN', icon: 'chevron-right' },
    { label: "TO'LOV", value: 'Visa *1234', icon: 'chevron-right' },
    { label: 'PROMO KOD', value: 'Promo kodini kiriting', icon: 'chevron-right' },
  ];

  const orderItems = [
    {
      type: 'guide',
      location: 'TASHKENT',
      name: 'Sabina',
      description: '3 tilda so\'zlochi va sirli manzillar',
      price: '$10.99',
      image: require('@/assets/images/favicon.png'),
    },
    {
      type: 'guide',
      location: 'TASHKENT - BUKHARA',
      name: 'John',
      description: 'Transfer Tarjimon Haydovchi',
      price: '$10.99',
      image: require('@/assets/images/favicon.png'),
    },
  ];

  const additionalServices = [
    { name: 'Lokatsiya bo\'yicha natija', price: '$19.98' },
    { name: 'Birinchi xizmat', price: 'Free' },
    { name: 'Soliqlar', price: '$2.00' },
  ];

  const total = '$21.98';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <FontAwesome name="chevron-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Band qilish</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* Booking Details */}
        {bookingDetails.map((detail, index) => (
          <TouchableOpacity key={index} style={styles.detailRow}>
            <View>
              <Text style={styles.detailLabel}>{detail.label}</Text>
              {detail.value && (
                <Text style={styles.detailValue}>{detail.value}</Text>
              )}
            </View>
            <FontAwesome name={detail.icon} size={16} color="#9CA3AF" />
          </TouchableOpacity>
        ))}

        {/* Order Items */}
        <View style={styles.section}>
          <View style={styles.sectionTabs}>
            <Text style={[styles.tab, styles.activeTab]}>GIDLAR</Text>
            <Text style={styles.tab}>MALUMOTLAR</Text>
            <Text style={styles.tab}>NARXLAR</Text>
          </View>

          {orderItems.map((item, index) => (
            <View key={index} style={styles.orderItem}>
              <View style={styles.itemImage} />
              <View style={styles.itemDetails}>
                <Text style={styles.itemLocation}>{item.location}</Text>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          ))}
        </View>

        {/* Additional Services */}
        <View style={styles.section}>
          {additionalServices.map((service, index) => (
            <View key={index} style={styles.serviceRow}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.servicePrice}>{service.price}</Text>
            </View>
          ))}

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalPrice}>{total}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Place Order Button */}
      <View style={styles.footer}>
        <Button
          title="Place order"
          onPress={() => {}}
          style={styles.placeOrderButton}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginLeft: 16,
  },
  content: {
    flex: 1,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: '#6B7280',
  },
  section: {
    marginTop: 16,
  },
  sectionTabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
    marginRight: 24,
  },
  activeTab: {
    color: '#000',
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 12,
  },
  itemImage: {
    width: 60,
    height: 60,
    backgroundColor: '#F59E0B',
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemLocation: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 2,
  },
  itemDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  serviceName: {
    fontSize: 14,
    color: '#6B7280',
  },
  servicePrice: {
    fontSize: 14,
    color: '#374151',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  placeOrderButton: {
    width: '100%',
  },
});
