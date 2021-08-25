import React, {createRef} from 'react';
import {View, Text} from 'react-native';
import {
  ConfirmationClient,
  ConfirmationProvider,
  LoginScreen,
  Register,
  RegisterClient,
  RegisterProvider,
  WelComeScreen,
} from '../Screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const navigationRef = createRef();

export function goBack() {
  navigationRef.current.goBack();
}

const AuthStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="WelComePage"
          component={WelComeScreen}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="LoginScreenPage"
          component={LoginScreen}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="RegisterPage"
          component={Register}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="RegisterClientPage"
          component={RegisterClient}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="ConfirmationClientPage"
          component={ConfirmationClient}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="RegisterProviderPage"
          component={RegisterProvider}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="ConfirmationProviderPage"
          component={ConfirmationProvider}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
