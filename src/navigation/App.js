import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from '~/features/films/containers';
import FilmDetailScreen from '~/features/films/containers/detail';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'Roboto_medium',
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Star Warers' }}/>
          <Stack.Screen name="FilmDetail" component={FilmDetailScreen} options={{
            headerMode: 'none',
            headerShown: false,
          }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
