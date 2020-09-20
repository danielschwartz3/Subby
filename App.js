import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import PostingScreen from './src/screens/PostingScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import PostingScreen from './src/screens/PostingScreen';
import ListDetailScreen from './src/screens/ListDetailScreen';

import {color} from 'react-native-reanimated';

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ListDetail" component={ListDetailScreen} />

            <Stack.Screen name="Posting" component={PostingScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
