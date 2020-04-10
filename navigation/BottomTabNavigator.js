import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import LinksScreen from '../screens/LinksScreen';
import Scorecard from '../screens/Scorecard';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: '#076335',
      }}>
      <BottomTab.Screen
        name="Scorecard"
        component={Scorecard}
        options={{
          title: 'Scorecard',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ios-calendar" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Analytics"
        component={LinksScreen}
        options={{
          title: 'Analytics',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-book" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Scorecard':
      return 'Scorecard';
    case 'Analytics':
      return 'Analytics';
  }
}
