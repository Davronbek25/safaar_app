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
import HomeCarousel from "@/components/ui/HomeCarousel";

const cities = [
  { id: 'tashkent', name: 'Tashkent', image: require('@/assets/images/tashkent_card.jpg') },
  { id: 'rome', name: 'Rome', image: require('@/assets/images/rome_card.png') },
  { id: 'bukhara', name: 'Bukhara', image: require('@/assets/images/bukhara_card.jpg') },
  { id: 'paris', name: 'Paris', image: require('@/assets/images/paris_card.jpg') },
];

const guides = [
  {
    id: 'sabina',
    name: 'Sabina',
    location: 'Tashkent',
    rating: 4.5,
    price: '$10.99',
    image: require('@/assets/images/guide_sabina.png'),
  },
  {
    id: 'amiran',
    name: 'Amiran',
    location: 'Rome',
    rating: 5.0,
    price: '$15.99',
    image: require('@/assets/images/guide_amirxan.jpg'),
  },
  {
    id: 'john',
    name: 'John',
    location: 'Bukhara',
    rating: 4.8,
    price: '$20.99',
    image: require('@/assets/images/guide_baxa.jpg'),
  },
];

const imgConditional = (src: string): boolean => {
  return !!src;
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <SearchBar placeholder="Search" />

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

        {/* Carousel */}
        <View>
          <HomeCarousel />
        </View>

        {/* Choose the city */}
        <View style={styles.section} className="mt-3">
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Choose the city</Text>
            <FontAwesome className="relative top-0.5" name="chevron-right" size={16} color="#666" />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cityList}>
            {cities.map((city) => (
              <CityCard key={city.id} {...city} />
            ))}
          </ScrollView>
        </View>

        {/* Candidates */}
        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Candidates</Text>
            <FontAwesome className="relative top-0.5" name="chevron-right" size={16} color="#666" />
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
    marginVertical: 8,
  },
  logo: {
    width: 344,
    height: 136,
  },
  logoText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#132858',
    position: 'relative',
    bottom: '70%',
    right: '33%',
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
    alignItems: 'center',
    gap: 12,
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

