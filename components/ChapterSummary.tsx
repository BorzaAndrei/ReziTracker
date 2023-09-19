import React, {useState, useEffect} from 'react';
import {StyleSheet, Button, TouchableHighlight, View} from 'react-native';
import StyledText from './StyleText';
import * as Animatable from 'react-native-animatable';

export default function ChapterSummary({
  navigation,
  id,
  chaptersById,
  topLevelStyle,
}: {
  navigation: any;
  id: number;
  chaptersById: any;
  topLevelStyle: any;
}) {
  const [showChildView, setShowChildView] = useState(false);

  const chapter = chaptersById[id];

  const [totalPages, setTotalPages] = useState(
    calculateTotalPages(chapter, chapter.childChapters),
  );
  const [totalReadPages, setTotalReadPages] = useState(
    calculateTotalReadPages(chapter, chapter.childChapters),
  );

  function calculateTotalPages(ch: any, childChapters: any) {
    if (childChapters.length > 0) {
      return childChapters.reduce(
        (sum: number, index: string) =>
          sum +
          calculateTotalPages(
            chaptersById[Number(index)],
            chaptersById[Number(index)].childChapters,
          ),
        0,
      );
    }
    return ch.endPage - ch.startPage;
  }

  function calculateTotalReadPages(ch: any, childChapters: any) {
    if (childChapters.length > 0) {
      return childChapters.reduce(
        (sum: number, index: string) =>
          sum +
          calculateTotalReadPages(
            chaptersById[Number(index)],
            chaptersById[Number(index)].childChapters,
          ),
        0,
      );
    }
    return ch.currentPage - ch.startPage;
  }

  useEffect(() => {
    const calculatedTotalPages = calculateTotalPages(
      chapter,
      chapter.childChapters,
    );
    const calculatedTotalReadPages = calculateTotalReadPages(
      chapter,
      chapter.childChapters,
    );

    setTotalPages(calculatedTotalPages);
    setTotalReadPages(calculatedTotalReadPages);
  }, [chaptersById]);

  function onPressNavigateChapter() {
    navigation.push('SingleChapter', {
      chapterId: chapter.id,
    });
  }

  function onPressShow() {
    setShowChildView(!showChildView);
  }

  return (
    <View style={topLevelStyle}>
      <View>
        {chapter.childChapters.length > 0 ? (
          <View style={styles.chapterView}>
            <View style={{flex: 4}}>
              <TouchableHighlight
                onPress={onPressShow}
                onLongPress={onPressNavigateChapter}
                underlayColor="#DDDDDD">
                <View>
                  <StyledText style={{color: 'rgba(69,93,150,1)'}}>{`${
                    chapter.chapterName
                  }${chapter.isDone ? ' \u2611' : ''}`}</StyledText>
                </View>
              </TouchableHighlight>
            </View>
            <View style={{flex: 2}}>
              <StyledText
                style={{...styles.pageProportion, color: 'rgba(69,93,150,1)'}}>
                {totalReadPages}/{totalPages}
              </StyledText>
            </View>
          </View>
        ) : (
          <View style={styles.chapterView}>
            <View style={{flex: 4}}>
              <TouchableHighlight
                onPress={onPressNavigateChapter}
                underlayColor="#DDDDDD">
                <StyledText>{`${chapter.chapterName}${
                  chapter.isDone ? ' \u2611' : ''
                }`}</StyledText>
              </TouchableHighlight>
            </View>
            <View style={{flex: 2}}>
              <StyledText style={styles.pageProportion}>
                {totalReadPages}/{totalPages}
              </StyledText>
            </View>
          </View>
        )}
      </View>

      {showChildView && (
        <Animatable.View animation="fadeInDown" duration={1}>
          {chapter.childChapters.length > 0 &&
            chapter.childChapters.map((childId: number) => {
              return (
                <ChapterSummary
                  navigation={navigation}
                  id={childId}
                  chaptersById={chaptersById}
                  topLevelStyle={styles.childrenView}
                />
              );
            })}
        </Animatable.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 8,
  },
  pageProportion: {
    textAlign: 'right',
  },
  chapterView: {
    flexDirection: 'row',
  },
  childrenView: {
    marginLeft: '5%',
    marginTop: '2%',
  },
});
