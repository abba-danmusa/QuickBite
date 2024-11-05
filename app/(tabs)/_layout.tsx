import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Header from '@/components/home/Header';
// import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        header: () => <Header />,
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabBarIcon
              name={'home'}
              color={Colors[colorScheme ?? 'light'].tint}
              style={{ color: focused ? '#E74C3C' : '#000' }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabBarIcon
              name={'search'}
              color={Colors[colorScheme ?? 'light'].tint}
              style={{ color: focused ? '#E74C3C' : '#000' }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          title: 'Bag',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabBarIcon
              name={'shopping-bag'}
              color={Colors[colorScheme ?? 'light'].tint}
              style={{ color: focused ? '#E74C3C' : '#000' }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <TabBarIcon
              name={'user'}
              color={Colors[colorScheme ?? 'light'].tint}
              style={{ color: focused ? '#E74C3C' : '#000' }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
