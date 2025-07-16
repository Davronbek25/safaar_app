import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SearchBar from '@/components/ui/SearchBar';
import CityCard from '@/components/ui/CityCard';
import GuideCard from '@/components/ui/GuideCard';

const cities = [
  { id: 'tashkent', name: 'Tashkent', image: require('@/assets/images/favicon.png') },
  { id: 'rome', name: 'Rome', image: require('@/assets/images/favicon.png') },
  { id: 'bukhara', name: 'Bukhara', image: require('@/assets/images/favicon.png') },
  { id: 'paris', name: 'Paris', image: require('@/assets/images/favicon.png') },
];

const guides = [
  {
    id: 'sabina',
    name: 'Sabina',
    location: 'Tashkent',
    rating: 4.5,
    price: '$10.99',
    image: require('@/assets/images/favicon.png'),
  },
  {
    id: 'amiran',
    name: 'Amiran',
    location: 'Rome',
    rating: 5.0,
    price: '$15.99',
    image: require('@/assets/images/favicon.png'),
  },
  {
    id: 'john',
    name: 'John',
    location: 'Bukhara',
    rating: 4.8,
    price: '$20.99',
    image: require('@/assets/images/favicon.png'),
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          {/* Navigation Pills */}
          <View style={styles.navPills}>
            <TouchableOpacity style={[styles.pill, styles.activePill]}>
              <FontAwesome name="heart" size={16} color="#000" />
              <Text style={styles.pillText}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pill}>
              <FontAwesome name="history" size={16} color="#666" />
              <Text style={[styles.pillText, styles.inactivePillText]}>History</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.pill}>
              <FontAwesome name="users" size={16} color="#666" />
              <Text style={[styles.pillText, styles.inactivePillText]}>Following</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <SearchBar placeholder="Search" />

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image 
            source={require('@/assets/images/icon.png')} 
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>SAFAR</Text>
          <Text style={styles.logoSubtext}>UZBEKISTAN</Text>
        </View>

        {/* Choose the city */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Choose the city</Text>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cityList}>
            {cities.map((city) => (
              <CityCard key={city.id} {...city} />
            ))}
          </ScrollView>
        </View>

        {/* Candidates */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Candidates</Text>
            <FontAwesome name="chevron-right" size={16} color="#666" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.guideList}>
            {guides.map((guide) => (
              <GuideCard key={guide.id} {...guide} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navPills: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  activePill: {
    backgroundColor: '#F3F4F6',
  },
  pillText: {
    fontSize: 14,
    marginLeft: 6,
    color: '#000',
  },
  inactivePillText: {
    color: '#666',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 24,
  },
  logo: {
    width: 120,
    height: 60,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginTop: 8,
  },
  logoSubtext: {
    fontSize: 16,
    color: '#F59E0B',
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
  },
  cityList: {
    paddingLeft: 16,
  },
  guideList: {
    paddingLeft: 16,
  },
});

