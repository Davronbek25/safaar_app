import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Image, Platform } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import Icon from '@/assets/svg_icons/TabIcons';
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const sabinaProfile = (focused: boolean) => !focused 
? <Image source={require('@/assets/images/guide_sabina.png')} style={{ width: 25, height: 25, borderRadius: 12.5 }} /> 
: <Image source={require('@/assets/images/profile-sabina.png')} style={{ width: 27, height: 27, borderRadius: 12.5 }} />

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#333333",
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                height: Platform.OS === 'ios' ? 40 : 60, // fixed height for both platforms
                backgroundColor: '#fff',
                borderTopColor: 'rgb(39, 39, 41)'
            },
            tabBarIconStyle: {
                marginTop: 4,
            },
        }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color={color} size={31} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'compass-sharp' : 'compass-outline'} color={color} size={30} />,
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: 'Post',
          tabBarIcon: ({ color, focused }) => <AntDesign name={focused ? 'plussquare' : 'plussquareo'} color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'cart-sharp' : 'cart-outline'} color={color} size={28} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => sabinaProfile(focused),
        }}
      />
    </Tabs>
  );
}

