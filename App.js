import React from 'react';
import {
  WelComeScreen,
  LoginScreen,
  RegisterClient,
  RegisterProvider,
  Register,
  ConfirmationClient,
  ConfirmationProvider,
} from './src/Screens';
import AuthStack from './src/Navigation/AuthStack';

const App = () => {
  return (
  
      <AuthStack />
  
  );
};

export default App;
