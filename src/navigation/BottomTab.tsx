import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'src/screens/HomeScreen';
import { Icon } from 'react-native-elements';
import SearchScreen from 'src/screens/SearchScreen';
import ProfileScreen from 'src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }: any) => (
            <Icon
              name="home"
              type="ionicon"
              size={size}
              color={color}
              tvParallaxProperties
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }: any) => (
            <Icon
              name="search"
              type="ionicon"
              size={size}
              color={color}
              tvParallaxProperties
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }: any) => (
            <Icon
              name="person"
              type="ionicon"
              size={size}
              color={color}
              tvParallaxProperties
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
