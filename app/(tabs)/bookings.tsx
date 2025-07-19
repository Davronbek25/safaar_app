import React from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function BookingsScreen() {
  return (
      <View className="flex-1 bg-white p-4 pb-3">
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pb-2 border-b border-gray-200">
          <Pressable>
            <FontAwesome name="angle-left" size={28} color="#111" />
          </Pressable>
          <Text className="text-xl font-bold">Band qilish</Text>
          <View style={{ width: 28 }} />
        </View>

        <ScrollView
            className="flex-1"
            contentContainerStyle={{ paddingBottom: 32 }}
            showsVerticalScrollIndicator={false}
        >
          {/* Location Section */}
          <View className="border-b border-gray-200">
            <Pressable className="flex-row items-center justify-between px-5 py-4">
              <Text className="text-lg text-gray-400">MANZILINGIZ</Text>
              <FontAwesome name="angle-right" size={18} color="#888" />
            </Pressable>
          </View>

          {/* Service Fee Section */}
          <Pressable className="flex-row items-center justify-between px-5 py-4 border-b border-gray-200">
            <Text className="text-base text-black font-semibold w-1/3">XIZMAT NARXI</Text>
            <Text className="text-sm text-gray-500 flex-1 ml-3">Birinchi mijozlar uchun Standard | 1-2 KUN</Text>
            <FontAwesome name="angle-right" size={18} color="#888" />
          </Pressable>

          {/* Payment Section */}
          <Pressable className="flex-row items-center justify-between px-5 py-4 border-b border-gray-200">
            <Text className="text-base text-black font-semibold w-1/3">TO'LOV</Text>
            <Text className="text-sm text-gray-500 flex-1 ml-3">Visa *1234</Text>
            <FontAwesome name="angle-right" size={18} color="#888" />
          </Pressable>

          {/* Promo Code Section */}
          <Pressable className="flex-row items-center justify-between px-5 py-4 border-b border-gray-200">
            <Text className="text-base text-black font-semibold w-1/3">PROMO KOD</Text>
            <Text className="text-sm text-gray-400 flex-1 ml-3">Promo kodni kiriting</Text>
          </Pressable>

          {/* Table Header */}
          <View className="flex-row px-5 pt-6 pb-2">
            <Text className="text-base font-bold text-gray-500 w-1/3 mr-3">GIDLAR</Text>
            <Text className="text-base font-bold text-gray-500 flex-1">MA'LUMOTLAR</Text>
            <Text className="text-base font-bold text-gray-500 w-[90px] text-right">NARXLAR</Text>
          </View>

          {/* Guide Rows */}
          <View className="flex-row items-center px-5 py-2">
            <Image
                source={require('@/assets/images/guide_sabina.png')}
                className="w-[84px] h-[84px] rounded-xl mr-8"
            />
            <View className="flex-1">
              <Text className="text-sm text-gray-400 font-bold">TASHKNET</Text>
              <Text className="text-lg text-black font-semibold">Sabina</Text>
              <Text className="text-base text-gray-600">3 tilda so’zlovchi va sirli manzillar</Text>
            </View>
            <Text className="w-1/5 text-right text-lg text-black font-semibold">$10.99</Text>
          </View>
          <View className="flex-row items-center px-5 py-2">
            <Image
                source={require('@/assets/images/guide_baxa.jpg')}
                className="w-[84px] h-[84px] rounded-xl mr-8"
            />
            <View className="flex-1">
              <Text className="text-sm text-gray-400 font-bold">TASHKNET - BUKHARA</Text>
              <Text className="text-lg text-black font-semibold">John</Text>
              <Text className="text-base text-gray-600">Transfer Tarjimon Haydovchi</Text>
            </View>
            <Text className="w-1/5 text-right text-lg text-black font-semibold">$10.99</Text>
          </View>

          {/* Charges Table */}
          <View className="px-5 mt-6">
            <View className="flex-row justify-between py-1">
              <Text className="text-base text-black">Lokatsiya bo’yicha natija</Text>
              <Text className="text-base text-black">$19.98</Text>
            </View>
            <View className="flex-row justify-between py-1">
              <Text className="text-base text-black">Birinchi xizmat</Text>
              <Text className="text-base text-black">Free</Text>
            </View>
            <View className="flex-row justify-between py-1">
              <Text className="text-base text-black">Soliqlar</Text>
              <Text className="text-base text-black">$2.00</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-lg font-bold">Total</Text>
              <Text className="text-lg font-bold">$21.98</Text>
            </View>
          </View>
        </ScrollView>

        {/* Place Order Button */}
        <View className="pt-5">
          <Pressable className="bg-black rounded-2xl py-4" android_ripple={{ color: "#222" }}>
            <Text className="text-white text-center text-lg font-semibold">Place order</Text>
          </Pressable>
        </View>
      </View>
  );
}