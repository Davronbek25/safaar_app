import CityCard from '@/components/ui/CityCard';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PostCard from '@/components/ui/PostCard';
import { useRouter } from 'expo-router';

const cities = [
  { id: 'tashkent', name: 'Tashkent', image: require('@/assets/images/tashkent_card.jpg') },
  { id: 'bukhara', name: 'Bukhara', image: require('@/assets/images/bukhara_card.jpg') },
];

const posts = [
  {
    id: 'post_tashkent',
    location: 'Tashkent',
    description: 'Bugun sayyohlarimiz bilan manzilimiz Toshkent...',
    image: require('@/assets/images/post_tashkent.jpg'),
  },
  {
    id: 'post_chorsu',
    location: 'Tashkent, Chorsu Bazaar',
    description: 'Toshkent shahrining markazida joylashgan...',
    image: require('@/assets/images/post_chorsu.jpg'),
  },
  {
    id: 'post_yurt',
    location: 'Safari Yurt Camp',
    description: 'Shunday tajriba uchun hoziroq band qiling...',
    image: require('@/assets/images/post_yurt.jpg'),
  },
]

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white pt-4 px-2">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile top section */}
        <View className="flex-row items-start px-5 mt-2">
          <Image
            source={require('@/assets/images/guide_sabina.png')}
            className="w-[81px] h-[82px] rounded-full bg-yellow-200"
          />
          <View className="flex-1 ml-4 flex gap-2 h-[82px] justify-center pl-2 pr-5">
            <TouchableOpacity className="bg-gray-100 rounded-3xl px-3 py-2 flex items-center">
              <Text className="text-base font-semibold">Professional dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-100 rounded-3xl px-3 py-2 flex items-center">
              <Text 
                className="text-base font-semibold">
                Switch account
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Name */}
        <Text className="font-bold text-2xl px-5 mt-2">SABINA</Text>

        {/* Headline */}
        <Text className="font-black text-[15px] px-5 mt-2">Not your typical tour.</Text>

        {/* Description */}
        <Text className="text-[14px] text-[#222] px-5 mt-2 leading-5">
          👋 I won’t just guide you — I’ll share my city with you.{"\n"}
          You’ll experience it like a friend, not a visitor.{"\n"}
          Discover the soul of Uzbekistan with me — only on Safaar
        </Text>

        {/* Find me in */}
        <Text className="font-semibold text-xl px-5 mt-6 mb-2">Find me in</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cities.map((city) => (
            <CityCard key={city.id} {...city} />
          ))}
        </ScrollView>

        {/* Latest section */}
        <TouchableOpacity className="flex-row items-center px-5 mb-3 mt-5 gap-3">
          <Text className="font-semibold text-xl">Latest</Text>
          <FontAwesome name='chevron-right' size={16} color="#666" />
        </TouchableOpacity>
        {/* Latest cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-5">
          {posts.map(post => <PostCard key={post.id} {...post} />)}
        </ScrollView>
        <View className="h-8" />
      </ScrollView>
    </View>
  );
}