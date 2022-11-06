import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootScreenStack} from '../stacks/root';

const App = () => {
  return (
    <NavigationContainer>
      <RootScreenStack />
    </NavigationContainer>
  );
};

export default App;
