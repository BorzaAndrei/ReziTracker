import AsyncStorage from '@react-native-async-storage/async-storage';
import {AllChaptersSignature, initialChapters} from '../models/InitialChapters';
import {useEffect, useState} from 'react';

export default function useDataManagement() {
  const [chapters, setChapters] =
    useState<AllChaptersSignature>(initialChapters);

  useEffect(() => {
    loadChapters().then((loadedChapters: any) => {
      setChapters(loadedChapters);
    });
  }, []);

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
