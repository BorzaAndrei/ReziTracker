import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import ChaptersScreen from './Screens/ChaptersScreen';
import Chapter from './models/Chapter';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'ReziTracker - Home' }} />
        <Stack.Screen name='ChaptersScreen' component={ChaptersScreen} options={{ title: 'ReziTracker - Chapters' }} />
        <Stack.Screen name='SingleChapter' component={Chapter} options={{title: 'Chapter'}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
