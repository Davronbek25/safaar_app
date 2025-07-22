import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground, ImageSourcePropType,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import SearchBar from '@/components/ui/SearchBar';
import Button from '@/components/ui/Button';
import CombinedSearchBar from "@/components/ui/CombinedSearchBar";

interface GuideCardProps {
  guideImage: ImageSourcePropType;
}

function GuideCard({guideImage}: GuideCardProps) {
  return (
      <View className="bg-white rounded-2xl overflow-hidden shadow-sm mx-4 my-4">
        {/* Image */}
        <ImageBackground
            source={guideImage}
            className="w-full h-48"
            imageStyle={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
            resizeMode="cover"
        />

        {/* Content */}
        <View className="p-4">
          {/* Title row */}
          <View className="flex-row items-center mb-2">
            <Text className="font-bold text-lg mr-3">BUKHARA</Text>
            <Text className="font-bold text-lg mr-3">TASHKENT</Text>
            <Text className="font-bold text-lg">JOHN</Text>
          </View>

          {/* Reviews & distance */}
          <View className="flex-row items-center mb-4">
            <FontAwesome name="star" size={16} color="#888" />
            <Text className="text-gray-400 ml-1 mr-4">
              4.8 (500 reviews)
            </Text>
            <Ionicons name="location-outline" size={16} color="#888" />
            <Text className="text-gray-400 ml-1">1.2 miles</Text>
          </View>

          {/* Price and button */}
          <View className="flex-row items-center justify-between">
            <Text className="text-2xl font-bold">
              $10.99{' '}
              <Text className="text-base font-normal text-gray-500">/ DAY</Text>
            </Text>
            <TouchableOpacity className="bg-black px-6 py-2 rounded-xl">
              <Text className="text-white text-lg font-medium">Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <CombinedSearchBar
            initialValue="BUKHARA"
            subtitle="Sep 12 – 15 • 1 guide • 2 guests"
            onSearch={text => console.log("Search for:", text)}
            onEditPress={() => console.log("Edit pressed")}
        />

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
          <ImageBackground
              source={require('../../assets/images/map.png')} // <-- update path to your PNG
              style={styles.mapPlaceholder}
              imageStyle={{ resizeMode: 'cover' }} // or 'contain', as needed
          >
          </ImageBackground>
        </View>

        {/* Guide Card */}
       <GuideCard guideImage={require('@/assets/images/bukhara_card.jpg')} />

        {/* Additional guide card placeholder */}
        <GuideCard guideImage={require('@/assets/images/bukhara_card.jpg')} />

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
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 16,
    borderColor: '#D1D5DB',
  },
  selectedMarker: {
    backgroundColor: '#000',
  },
  priceText: {
    fontSize: 13,
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

