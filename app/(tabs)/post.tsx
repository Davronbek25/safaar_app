import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome6 } from "@expo/vector-icons";

export default function PostScreen() {
  return (
    <View className="flex-1 bg-white p-3 pt-5">
      {/* Tabs */}
      <View className="flex-row justify-evenly gap-3 px-7 mb-6">
        <Text className="text-gray-500 font-medium">Following</Text>
        <View className="items-center">
          <Text className="font-semibold text-base">For you</Text>
          <View className="h-0.5 w-10 bg-black rounded-full mt-1" />
        </View>
        <Text className="text-gray-400 font-medium">Favorites</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Post 1 */}
        <View className="px-4 pb-8">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center">
              <Image
                source={require('@/assets/images/guide_sabina.png')}
                className="w-8 h-8 rounded-full mr-2"
              />
              <View>
                <View className="flex-row items-center">
                  <Text className="font-semibold mr-1">Sabina</Text>
                  <Text className="text-gray-500 text-sm">in Tashkent</Text>
                </View>
                <Text className="text-xs text-gray-400">3 min ago</Text>
              </View>
            </View>
            <TouchableOpacity>
              <FontAwesome6 name="ellipsis" size={20} color="#888" />
            </TouchableOpacity>
          </View>
          {/* Image */}
          <Image
            source={require('@/assets/images/post_tashkent.jpg')}
            className="w-[280px] h-[299px] rounded-xl mb-2 mx-auto"
            resizeMode="cover"
          />
          {/* Caption */}
          <Text className="mb-3 mx-auto">Bugun sayohatlarimiz bilan manzilimiz Toshke</Text>
          {/* Actions */}
          <View className="flex-row ml-8 items-center gap-4 mb-1">
            <View className="flex-row items-center">
              <FontAwesome name="heart-o" size={19} color="black" />
              <Text className="ml-1 text-[15px]">21 likes</Text>
            </View>
            <View className="flex-row items-center">
              <FontAwesome name="comment-o" size={18} color="black" />
              <Text className="ml-1 text-[15px]">4 comments</Text>
            </View>
            <Text className="ml-2 text-gray-400 text-sm">Translate</Text>
          </View>
        </View>
        {/* Post 2 */}
        <View className="px-4 pb-8">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center">
              <Image
                source={require('@/assets/images/daniel.jpg')}
                className="w-8 h-8 rounded-full mr-2"
              />
              <View>
                <View className="flex-row items-center">
                  <Text className="font-semibold mr-1">Daniel</Text>
                  <Text className="text-gray-500 text-sm">in Group Name</Text>
                </View>
                <Text className="text-xs text-gray-400">2 hrs ago</Text>
              </View>
            </View>
            <TouchableOpacity>
              <FontAwesome6 name="ellipsis" size={20} color="#888" />
            </TouchableOpacity>
          </View>
          {/* Caption */}
          <Text className="mb-3 ml-8 leading-5">
            Sabina sizning turlaringizni kuzatib boraman, juda qiziqarli va maroqli olib borasiz.{"\n"}
            O’zbekistonda albatta sizga bog’lanaman.
          </Text>
          {/* Actions */}
          <View className="flex-row ml-8 items-center gap-4 mb-1">
            <View className="flex-row items-center">
              <FontAwesome name="heart-o" size={19} color="black" />
              <Text className="ml-1 text-[15px]">6 likes</Text>
            </View>
            <View className="flex-row items-center">
              <FontAwesome name="comment-o" size={18} color="black" />
              <Text className="ml-1 text-[15px]">18 comments</Text>
            </View>
            <Text className="ml-2 text-gray-400 text-sm">Tarjima qilish</Text>
          </View>
        </View>
        <View className="h-16" />
      </ScrollView>
    </View>
  );
}