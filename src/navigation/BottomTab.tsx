import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import HomeScreen from 'src/screens/HomeScreen';

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
    </Tab.Navigator>
  );
};

export default BottomTab;
