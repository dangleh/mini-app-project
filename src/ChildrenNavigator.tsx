import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChildrenHome from './ChildrenHome';
import ChildrenPost from './ChildrenPost';

export type RootStackParamList = {
  Home: undefined;
  Post: undefined;
};

const Stack = createStackNavigator();

const ChildrenNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator key={'children-stack'}>
        <Stack.Screen name="Home" component={ChildrenHome} />
        <Stack.Screen name="Post" component={ChildrenPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ChildrenNavigator;
