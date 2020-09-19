import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesList from './screens/MoviesList'
import MoviesDetail from './screens/MoviesDetail'

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={
        {
        headerStyle: {
          backgroundColor: 'black',
          shadowOpacity: 0
        },
        headerTintColor:'white'
        }
        }>
      <Stack.Screen
        name="MoviesList"
        component={MoviesList}
        options={
          {title: 'Movies show time Example'}
        }
      />
      <Stack.Screen
        name="MoviesDetail"
        component={MoviesDetail}
        options={
          {
            title: null
          }
        }
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Navigation ;