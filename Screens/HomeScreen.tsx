import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Button, ScrollView, View} from 'react-native';
import Countdown from '../components/Countdown';
import TotalProgress from '../components/TotalProgress';
import useDataManagement from '../utils/LoadChapters';

const HomeScreen = ({navigation}: {navigation: any}) => {
  const {chapters, saveChapters} = useDataManagement();

  function resetData() {
    AsyncStorage.removeItem('chapters');
  }

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <Countdown />
      <TotalProgress chapters={chapters} />
      <View style={styles.button}>
        <Button
          title="Chapters"
          onPress={() => navigation.navigate('ChaptersScreen')}
        />
      </View>
      <View style={styles.button}>
        <Button title="Reset Data" onPress={resetData} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: '3%',
  },
});

export default HomeScreen;
