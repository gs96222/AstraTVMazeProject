// Core
import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../screens/Home/HomeScreen';
import ShowDetailsScreen from '../screens/ShowDetails/ShowDetailsScreen';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {styles} from './styles';

export type RootStackParamList = {
  home: undefined;
  showDetail: {
    path: 'show/:id';
    screen: string;
    exact: true;
  };
};

const AppNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.navContainer,
        {
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="showDetail"
            component={ShowDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default AppNavigator;
