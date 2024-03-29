import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { MaterialIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import MovieDetailsScreen from '../MovieDetails';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}
      initialRouteName='Home'
    >
      <Tabs.Screen
        name='Home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name='home' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='ComingSoon'
        options={{
          title: 'Coming Soon',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name='video-library' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='Search'
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <Ionicons name='search' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='Downloads'
        options={{
          title: 'Downloads',
          tabBarIcon: ({ color }) => (
            <AntDesign name='download' size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
