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
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import apartments from '@/assets/dummyData.json';
import { FontAwesome } from '@expo/vector-icons';

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.788825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {apartments.map((apartment) => (
          <Marker
            key={apartment.id}
            coordinate={{
              latitude: apartment.latitude,
              longitude: apartment.longitude
            }}
            title={apartment.title}
            description={apartment.description}
          >
            <View style={styles.customMarker}>
              <Text style={styles.markerText}><FontAwesome name="star" size={12} color="#F59E0B" />{apartment.rating}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
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
  customMarker: {
    backgroundColor: 'white',
    paddingHorizontal: 2,
    paddingVertical: 1,
    borderWidth: 1,
    minHeight: 20,
    minWidth: 32,
    borderColor: 'grey',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  markerText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#007AFF',
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

