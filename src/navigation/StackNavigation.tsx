import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="bottomtab"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="bottomtab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
