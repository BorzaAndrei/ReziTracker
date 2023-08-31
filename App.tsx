import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import ChaptersScreen from './Screens/ListChaptersScreen';
import Chapter from './Screens/ChapterScreen';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  }
}

function App(): JSX.Element {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'ReziTracker', headerTintColor: 'rgba(83,157,241,1)'}} />
        <Stack.Screen name='ChaptersScreen' component={ChaptersScreen} options={{ title: 'Capitole', headerTintColor: 'rgba(83,157,241,1)'}} />
        <Stack.Screen name='SingleChapter' component={Chapter} options={{title: 'Chapter', headerTintColor: 'rgba(83,157,241,1)'}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
