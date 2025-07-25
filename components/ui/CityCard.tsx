import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import { router } from 'expo-router';
import uri from "ajv/lib/runtime/uri";

interface CityCardProps {
  id: string;
  name: string;
  image: ImageSourcePropType;
}

export default function CityCard({ id, name, image}: CityCardProps) {
  const handlePress = () => {
    // router.push(`/city/${id}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
    elevation: 5,
    shadowColor: '#000',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    textAlign: 'center',
  },
});
