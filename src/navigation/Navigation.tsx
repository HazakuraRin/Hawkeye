import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WelcomeScreens} from '../screens/Welcome/WelcomeScreens';
import {Home} from '../screens/Home/Home';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useLaunchDispatch, useLaunchState} from '../context/launchContext';

const RootStack = createNativeStackNavigator();

export const RootStackScreen = () => {
  const launchState = useLaunchState();
  const launchDispatch = useLaunchDispatch();
  useEffect(() => {
    const checkSecondLaunch = async () => {
      AsyncStorage.getItem('second_launch').then((item) => {
        if (item !== null) {
          launchDispatch({type: 'setSecondLaunch', isSecondLaunch: JSON.parse(item)});
        } else {
          launchDispatch({type: 'setSecondLaunch', isSecondLaunch: false});
        }
      });
    };
    checkSecondLaunch().then();
  }, [launchDispatch]);

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {!launchState.isSecondLaunch ? (
        <RootStack.Screen name={'Welcome'} component={WelcomeScreens} />
      ) : (
        <RootStack.Screen name={'GeneralStack'} component={Home} />
      )}
    </RootStack.Navigator>
  );
};
