import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './src/pages/Products/Products';
import Detail from './src/pages/Detail/Detail';

type RootStackParamList = {
  ProductsScreen: undefined;
  DetailScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="ProductsScreen" component={Products} />
        <Stack.Screen name="DetailScreen" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App