/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './screens/types/navigation'; // adjust path

import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import MyViewPager from './components/ViewPager';
import Assignment from './screens/Assignment';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        {/* Define your screens here */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            // Customize header options for Second screen
            headerShown: true,
            headerTitle: 'Dashboard Screen',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerBackTitle: 'Back',
            headerTitleStyle: {
              fontWeight: 'regular',
              color: 'white',
              fontSize: 20,
            },
          }}/>
          <Stack.Screen name="ViewPager" component={MyViewPager} 
                    options={{
                      // Customize header options for Second screen
                      headerShown: true,
                      headerTitle: 'ViewPager Screen',
                      headerStyle: {
                        backgroundColor: 'green',
                      },
                      headerTintColor: 'white',
                      headerTitleAlign: 'center',
                      headerBackTitle: 'Back',
                      headerTitleStyle: {
                        fontWeight: 'regular',
                        color: 'white',
                        fontSize: 20,
                      },
                    }}/>
          <Stack.Screen name="Assignment" component={Assignment} 
                    options={{
                      // Customize header options for Second screen
                      headerShown: true,
                      headerTitle: 'Assignments',
                      headerStyle: {
                        backgroundColor: 'green',
                      },
                      headerTintColor: 'white',
                      headerTitleAlign: 'center',
                      headerBackTitle: 'Back',
                      headerTitleStyle: {
                        fontWeight: 'regular',
                        color: 'white',
                        fontSize: 20,
                      },
                    }}/>
          
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
