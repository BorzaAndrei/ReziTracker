import React from 'react';
import {StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import ChapterSummary from '../components/ChapterSummary';
import useDataManagement from '../utils/LoadChapters';

const ChaptersScreen = (props: any) => {
  const {chapters, saveChapters} = useDataManagement();

  return (
    <ScrollView>
      {Object.keys(chapters)
        .filter(index => !chapters[Number(index)].isChild)
        .map(index => (
          <ChapterSummary
            key={chapters[Number(index)].id}
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
