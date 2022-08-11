import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from './SignIn';

const Stack = createNativeStackNavigator();

export const Navigation: any = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'SignIn' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
