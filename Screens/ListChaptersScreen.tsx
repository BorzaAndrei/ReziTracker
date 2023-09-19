import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {initialChapters} from '../models/InitialChapters';
import ChapterSummary from '../components/ChapterSummary';
import {useIsFocused} from '@react-navigation/native';
import loadChapters from '../utils/LoadChapters';

const ChaptersScreen = (props: any) => {
  const [chapters, setChapters] = useState(initialChapters);
  const isFocused = useIsFocused();

  useEffect(() => {
    loadChapters(setChapters);
  }, [isFocused]);

  return (
    <ScrollView>
      {Object.keys(chapters)
        .filter(index => !chapters[Number(index)].isChild)
        .map(index => (
          <ChapterSummary
            navigation={props.navigation}
            id={chapters[Number(index)].id}
            chaptersById={chapters}
            topLevelStyle={styles.chapterSummaryView}
          />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chapterSummaryView: {
    marginHorizontal: '5%',
    marginTop: '5%',
  },
});

export default ChaptersScreen;
