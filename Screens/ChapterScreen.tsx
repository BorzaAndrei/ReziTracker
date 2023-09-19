import React, {useState} from 'react';
import {Button, ScrollView, StyleSheet, View} from 'react-native';
import {initialChapters} from '../models/InitialChapters';
import Slider from '@react-native-community/slider';
import StyledText from '../components/StyleText';
import ChapterSummary from '../components/ChapterSummary';
import Card from '../components/Card';
import {useIsFocused} from '@react-navigation/native';

const Chapter = ({navigation, route}: {navigation: any; route: any}) => {
  const [currentChapterId, setCurrentChapterId] = useState(
    route.params.chapterId,
  );
  const [chapters, setChapters] = useState(initialChapters);
  const [isParent, setIsParent] = useState(
    chapters[currentChapterId].childChapters.length > 0,
  );

  const [displayCurrentPage, setDisplayCurrentPage] = useState(
    chapters[currentChapterId].currentPage,
  );

  const [totalPages, setTotalPages] = useState(
    calculateTotalPages(
      chapters[currentChapterId],
      chapters[currentChapterId].childChapters,
    ),
  );
  const [totalReadPages, setTotalReadPages] = useState(
    calculateTotalReadPages(
      chapters[currentChapterId],
      chapters[currentChapterId].childChapters,
      chapters,
    ),
  );
  const [percentCompleted, setPercentCompleted] = useState(
    calculatePercentCompleted(totalReadPages, totalPages),
  );

  const [disabledResetButton, setDisabledResetButton] = useState(
    false,
    // !chapters[currentChapterId].isDone,
  );

  // useEffect(() => {
  //     navigation.setOptions({ headerRight: () => (
  //         <Button onPress={() => Alert} title="Click"/>
  //     ) })
  // }, [chapter.chapterName, navigation]);

  const isFocused = useIsFocused();

  function checkParentDone(tempChapter: any, allChapters: any) {
    // const listTimesRecapped = tempChapter.childChapters.map(
    //   (index: any) => allChapters[Number(index)].timesRecapped,
    // );
    // const minTimesRecapped = listTimesRecapped.reduce(
    //   (min: number, current: number) => {
    //     return Math.min(min, current);
    //   },
    //   Infinity,
    // );
    // var otherTempChapter = prepareUpdateChapter(
    //   tempChapter,
    //   'timesRecapped',
    //   minTimesRecapped,
    // );
    // const listIsDone = tempChapter.childChapters.map(
    //   (index: any) => allChapters[Number(index)].isDone,
    // );
    // const allDone = listIsDone.every((element: any) => element === true);
    // updateChapter(prepareUpdateChapter(otherTempChapter, 'isDone', allDone));
    // setChapters(prepareUpdateAllChapters(tempChapter));
  }

  const handleSliderUpdate = (value: any) => {
    setDisplayCurrentPage(value);
  };

  const handleSliderComplete = (value: any) => {
    // var tempChapter = prepareUpdateChapter(
    //   chapters[currentChapterId],
    //   'currentPage',
    //   value,
    // );
    // updateReadProgress(tempChapter, chapters);
    // tempChapter = handleIfDone(tempChapter);
    // updateChapter(tempChapter);
    // setChapters(prepareUpdateAllChapters(tempChapter));
  };

  function handleIfDone(tempChapter: any) {
    // if (
    //   tempChapter.currentPage >= chapters[currentChapterId].endPage &&
    //   !chapters[currentChapterId].isDone &&
    //   chapters[currentChapterId].childChapters.length == 0
    // ) {
    //   var otherTempChapter = prepareUpdateChapter(
    //     tempChapter,
    //     'timesRecapped',
    //     tempChapter.timesRecapped + 1,
    //   );
    //   setDisabledResetButton(false);
    //   return prepareUpdateChapter(otherTempChapter, 'isDone', true);
    // } else {
    //   return tempChapter;
    // }
  }

  function resetDisplayedChapter(displayedChapter: any) {
    // var tempChapter = prepareUpdateChapter(displayedChapter, 'isDone', false);
    // tempChapter = prepareUpdateChapter(
    //   tempChapter,
    //   'currentPage',
    //   tempChapter.startPage,
    // );
    // var changedChapters = [tempChapter];
    // if (isParent) {
    //   changedChapters.push(
    //     displayedChapter.childChapters
    //       .map((index: any) => chapters[Number(index)])
    //       .map((childChapter: any) => resetSubChapter(childChapter)),
    //   );
    // }
    // changedChapters = changedChapters.flat();
    // var tempChapters = {...chapters};
    // changedChapters.forEach((changedChapter: any) => {
    //   tempChapters[Number(changedChapter.id)] = changedChapter;
    // });
    // updateReadProgress(tempChapter, tempChapters);
    // setDisabledResetButton(true);
    // setChapters(tempChapters);
  }

  function resetSubChapter(subChapter: any) {
    // var tempChapter = prepareUpdateChapter(subChapter, 'isDone', false);
    // tempChapter = prepareUpdateChapter(
    //   tempChapter,
    //   'currentPage',
    //   tempChapter.startPage,
    // );
    // return tempChapter;
  }

  function calculateTotalPages(ch: any, idOfChildren: any) {
    if (idOfChildren.length > 0) {
      return idOfChildren.reduce(
        (sum: number, index: string) =>
          sum +
          calculateTotalPages(
            chapters[Number(index)],
            chapters[Number(index)].childChapters,
          ),
        0,
      );
    }
    return ch.endPage - ch.startPage;
  }

  function calculateTotalReadPages(
    ch: any,
    idOfChildren: any,
    allChapters: any,
  ) {
    if (idOfChildren.length > 0) {
      return idOfChildren.reduce(
        (sum: number, index: string) =>
          sum +
          calculateTotalReadPages(
            allChapters[Number(index)],
            allChapters[Number(index)].childChapters,
            allChapters,
          ),
        0,
      );
    }
    return ch.currentPage - ch.startPage;
  }

  function calculatePercentCompleted(totalRead: number, total: number) {
    return Math.floor((totalRead / total) * 100);
  }

  function updateReadProgress(newChapter: any, allChapters: any) {
    // const calculatedTotalReadPages = calculateTotalReadPages(
    //   newChapter,
    //   newChapter.childChapters,
    //   allChapters,
    // );
    // console.log(calculatedTotalReadPages);
    // setPercentCompleted(
    //   calculatePercentCompleted(calculatedTotalReadPages, totalPages),
    // );
    // setTotalReadPages(calculatedTotalReadPages);
  }

  function childComponents() {
    return (
      <View>
        <Card>
          <StyledText style={styles.cardTitle}>Informatii</StyledText>
          <View style={styles.cardTextContainer}>
            <View style={styles.pageInfoContainer}>
              <StyledText>Procent de completare:</StyledText>
              <StyledText>{percentCompleted}%</StyledText>
            </View>
            <View style={styles.pageInfoContainer}>
              <StyledText>Intervalul de pagini:</StyledText>
              <StyledText>
                {chapters[currentChapterId].startPage}-
                {chapters[currentChapterId].endPage}
              </StyledText>
            </View>
            <View style={styles.pageInfoContainer}>
              <StyledText>Pagina curenta:</StyledText>
              <StyledText>
                {chapters[currentChapterId].currentPage ==
                chapters[currentChapterId].startPage
                  ? `Neinceput`
                  : displayCurrentPage >= chapters[currentChapterId].endPage
                  ? 'Finalizat'
                  : displayCurrentPage}
              </StyledText>
            </View>
            <View style={styles.pageInfoContainer}>
              <StyledText>Numar pagini citite din total:</StyledText>
              <StyledText>
                {totalReadPages}/{totalPages}
              </StyledText>
            </View>
            <View style={styles.pageInfoContainer}>
              <StyledText>Numar finalizari:</StyledText>
              <StyledText>
                {chapters[currentChapterId].timesRecapped}
              </StyledText>
            </View>
          </View>
        </Card>

        <Card>
          <StyledText style={styles.cardTitle}>
            Actualizeaza progresul
          </StyledText>
          <Slider
            minimumValue={chapters[currentChapterId].startPage}
            maximumValue={chapters[currentChapterId].endPage}
            step={1}
            value={chapters[currentChapterId].currentPage}
            tapToSeek={true}
            onSlidingComplete={handleSliderComplete}
            onValueChange={handleSliderUpdate}
            disabled={!disabledResetButton}
          />
        </Card>
      </View>
    );
  }

  function parentComponents() {
    return (
      <ScrollView>
        <Card>
          <StyledText style={styles.cardTitle}>Informatii</StyledText>
          <View style={styles.cardTextContainer}>
            <View style={styles.pageInfoContainer}>
              <StyledText style={styles.cardTextElement}>
                Procent de completare:
              </StyledText>
              <StyledText>{percentCompleted}%</StyledText>
            </View>
            <View style={styles.pageInfoContainer}>
              <StyledText style={styles.cardTextElement}>
                Pagini citite:
              </StyledText>
              <StyledText>{totalReadPages}</StyledText>
            </View>
            <View style={styles.pageInfoContainer}>
              <StyledText style={styles.cardTextElement}>
                Numar total pagini:
              </StyledText>
              <StyledText>{totalPages}</StyledText>
            </View>
            <View style={styles.pageInfoContainer}>
              <StyledText>Numar finalizari:</StyledText>
              <StyledText>
                {chapters[currentChapterId].timesRecapped}
              </StyledText>
            </View>
          </View>
        </Card>
        <Card>
          <StyledText style={styles.cardTitle}>Subcapitole:</StyledText>

          {chapters[currentChapterId].map((index: any) => (
            <ChapterSummary
              navigation={navigation}
              id={index}
              chaptersById={chapters}
              topLevelStyle={styles.chapterSummaryView}
            />
          ))}
        </Card>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <StyledText style={styles.chapterName}>
        {chapters[currentChapterId].chapterName}
      </StyledText>
      {isParent ? parentComponents() : childComponents()}
      <Button
        title="Reseteaza progresul"
        onPress={() => resetDisplayedChapter(chapters[currentChapterId])}
        disabled={disabledResetButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  chapterName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pageInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chapterSummaryView: {
    marginHorizontal: '5%',
    marginBottom: '2%',
  },
  subChaptersView: {
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgba(228,236,255,1)',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: '2%',
  },
  cardTextContainer: {
    marginHorizontal: '5%',
  },
  cardTextElement: {},
});

export default Chapter;
