import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import ShipmentDetailsScreen from '../screens/ShipmentDetailsScreen/ShipmentDetailsScreen';
import CreateShipmentScreen from '../screens/CreateShipmentScreen/CreateShipmentScreen';
import TrackingScreen from '../screens/TrackingScreen/TrackingScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
        />

        <Stack.Screen
          name="ShipmentDetails"
          component={ShipmentDetailsScreen}
        />

        <Stack.Screen
          name="CreateShipment"
          component={CreateShipmentScreen}
        />

        <Stack.Screen
          name="Tracking"
          component={TrackingScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}

export default AppNavigator;