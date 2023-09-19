import AsyncStorage from '@react-native-async-storage/async-storage';
import {AllChaptersSignature, initialChapters} from '../models/InitialChapters';
import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

export default function useDataManagement() {
  const isFocused = useIsFocused();

  const [chapters, setChapters] =
    useState<AllChaptersSignature>(initialChapters);

  useEffect(() => {
    loadChapters().then((loadedChapters: any) => {
      setChapters(loadedChapters);
    });
  }, [isFocused]);

  const loadChapters = async () => {
    try {
      const storageData = await AsyncStorage.getItem('chapters');
      if (storageData) {
        let obj: AllChaptersSignature = JSON.parse(storageData);
        return obj;
      }
      return initialChapters;
    } catch (error) {
      console.log('Error loading chapters: ', error);
      return initialChapters;
    }
  };

  const saveChapters = async (newChapters: any) => {
    try {
      const data = await AsyncStorage.setItem(
        'chapters',
        JSON.stringify(newChapters),
      );
    } catch (error) {
      console.log('Error saving Chapters: ', error);
    }
  };

  return {
    chapters,
    saveChapters,
  };
}
