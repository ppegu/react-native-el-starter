import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from './contexts/ThemeContext';
import StackNavigation from './navigation/StackNavigation';

const App = () => {
  return (
    <ThemeProvider>
      <StatusBar />
      <StackNavigation />
    </ThemeProvider>
  );
};

export default App;
