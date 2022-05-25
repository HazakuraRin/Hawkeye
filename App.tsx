import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackScreen} from './src/navigation';
import {LaunchProvider} from './src/context/launchContext';

const App = () => {
  React.useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1500);
  });

  return (
    <LaunchProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </LaunchProvider>
  );
};

export default App;
