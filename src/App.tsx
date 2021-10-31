import React from 'react';
import { StatusBar } from 'react-native';
import StackNavigation from './navigation/StackNavigation';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar />
      <StackNavigation />
    </React.Fragment>
  );
};

export default App;
