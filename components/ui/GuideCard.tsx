import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

interface GuideCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: string;
  image: any;
}

export default function GuideCard({ id, name, location, rating, price, image }: GuideCardProps) {
  const handlePress = () => {
    // router.push(`/guide/${id}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.rating}>
          <FontAwesome name="star" size={12} color="#F59E0B" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 148,
    marginRight: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
    borderWidth: 0.3,
    borderColor: '#D1D5DB',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 151,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  location: {
    fontSize: 12,
    color: '#6B7280',
    textTransform: 'uppercase',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#374151',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginBottom: 4,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
});

