import React from 'react';
import Main from '../pages/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const routes: React.FC = () => {
  const stackNavigation = createStackNavigator();

  return (
    <NavigationContainer>
      <stackNavigation.Navigator>
        <stackNavigation.Screen
          name="Home"
          component={Main}
          options={{
            headerBackTitleStyle: {fontSize: 16},
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#333',
            },
            title: 'Carousel',
          }}
        />
      </stackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default routes;
