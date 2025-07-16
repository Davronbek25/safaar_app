import React, { useState } from 'react';
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
import Button from '@/components/ui/Button';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>BUKHARA</Text>
          <Text style={styles.headerSubtitle}>Sep 12 - 15 • 1 guide • 2 guests</Text>
          <TouchableOpacity style={styles.editButton}>
            <FontAwesome name="edit" size={16} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Filter and Sort */}
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Filter</Text>
            <FontAwesome name="chevron-down" size={12} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Sort</Text>
            <FontAwesome name="chevron-down" size={12} color="#666" />
          </TouchableOpacity>
          <Text style={styles.resultsText}>99 results</Text>
        </View>

        {/* Map */}
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapText}>Map View</Text>
            {/* Price markers */}
            <View style={[styles.priceMarker, { top: 50, left: 30 }]}>
              <Text style={styles.priceText}>$20</Text>
            </View>
            <View style={[styles.priceMarker, { top: 80, right: 40 }]}>
              <Text style={styles.priceText}>$50</Text>
            </View>
            <View style={[styles.priceMarker, { bottom: 100, right: 60 }]}>
              <Text style={styles.priceText}>$200</Text>
            </View>
            <View style={[styles.priceMarker, styles.selectedMarker, { bottom: 120, left: 50 }]}>
              <Text style={[styles.priceText, styles.selectedPriceText]}>$10</Text>
            </View>
            <View style={[styles.priceMarker, { bottom: 80, left: 20 }]}>
              <Text style={styles.priceText}>$45</Text>
            </View>
            <View style={[styles.priceMarker, { top: 120, right: 80 }]}>
              <Text style={styles.priceText}>$80</Text>
            </View>
            <View style={[styles.priceMarker, { bottom: 60, right: 20 }]}>
              <Text style={styles.priceText}>$15</Text>
            </View>
          </View>
        </View>

        {/* Guide Card */}
        <View style={styles.guideCard}>
          <Image 
            source={require('@/assets/images/icon.png')} 
            style={styles.guideImage}
          />
          <View style={styles.guideInfo}>
            <Text style={styles.guideLocation}>BUKHARA TASHKENT JOHN</Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={12} color="#F59E0B" />
              <Text style={styles.ratingText}>4.8 (500 reviews)</Text>
              <FontAwesome name="map-marker" size={12} color="#666" style={{ marginLeft: 8 }} />
              <Text style={styles.distanceText}>1.2 miles</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>$10.99</Text>
              <Text style={styles.priceUnit}>/ DAY</Text>
              <Button 
                title="Select" 
                onPress={() => {}} 
                size="small"
                style={styles.selectButton}
              />
            </View>
          </View>
        </View>

        {/* Additional guide card placeholder */}
        <View style={[styles.guideCard, { marginTop: 16 }]}>
          <Image 
            source={require('@/assets/images/icon.png')} 
            style={styles.guideImage}
          />
          <View style={styles.guideInfo}>
            <Text style={styles.guideLocation}>BUKHARA GUIDE 2</Text>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={12} color="#F59E0B" />
              <Text style={styles.ratingText}>4.5 (320 reviews)</Text>
              <FontAwesome name="map-marker" size={12} color="#666" style={{ marginLeft: 8 }} />
              <Text style={styles.distanceText}>2.1 miles</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>$15.99</Text>
              <Text style={styles.priceUnit}>/ DAY</Text>
              <Button 
                title="Select" 
                onPress={() => {}} 
                size="small"
                style={styles.selectButton}
              />
            </View>
          </View>
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
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
    flex: 2,
  },
  editButton: {
    padding: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    marginRight: 12,
  },
  filterText: {
    fontSize: 14,
    color: '#374151',
    marginRight: 4,
  },
  resultsText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 'auto',
  },
  mapContainer: {
    height: 200,
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  mapText: {
    fontSize: 16,
    color: '#666',
  },
  priceMarker: {
    position: 'absolute',
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  selectedMarker: {
    backgroundColor: '#000',
  },
  priceText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
  },
  selectedPriceText: {
    color: 'white',
  },
  guideCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  guideImage: {
    width: 120,
    height: 120,
  },
  guideInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  guideLocation: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  distanceText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
  },
  priceUnit: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  selectButton: {
    paddingHorizontal: 16,
  },
});

