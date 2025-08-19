import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

interface PostCardProps {
  id: string;
  location: string;
  description: string;
  image: any;
}

export default function PostCard({ id, location, description, image }: PostCardProps) {
  const handlePress = () => {
    router.push(`/guide/${id}`);
  };

  return (
    <TouchableOpacity className="w-[148px] mr-3">
      <Image
        source={image}
        className="w-full h-[151px] rounded-xl"
      />
      <Text numberOfLines={2}
        ellipsizeMode="tail" 
        className="font-bold text-gray-400 text-sm mt-2">
          {location}
      </Text>
      <Text numberOfLines={2} className="text-xs text-gray-800 mt-1">
        {description}
      </Text>
    </TouchableOpacity>
  );
}
