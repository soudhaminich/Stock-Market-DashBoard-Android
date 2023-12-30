import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import StockListScreen from './StockListScreen';
import StockDetailsScreen from './StockDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StockList" component={StockListScreen} />
        <Stack.Screen name="StockDetails" component={StockDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;