import React, { useEffect, useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { ChapterSignature } from "../models/InitialChapters";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
import StyledText from "../components/StyleText";
import ChapterSummary from "../components/ChapterSummary";
import Card from "../components/Card";
import { useIsFocused } from '@react-navigation/native';


const Chapter = ({navigation, route}: {navigation: any, route: any}) => {

    const isFocused = useIsFocused();

    const [chapter, setChapter] = useState(route.params.chapter);
    const [chaptersById, setChaptersById] = useState(route.params.chaptersById);

    const [name, setName] = useState(route.params.chapter.chapterName)
    const [startPage, setStartPage] = useState(route.params.chapter.startPage)
    const [endPage, setEndPage] = useState(route.params.chapter.endPage)
    const [currentPage, setCurrentPage] = useState(route.params.chapter.currentPage)
    const [timesRecapped, setTimesRecapped] = useState(route.params.chapter.timesRecapped)
    // const [datesCompleted, setDatesCompleted] = useState(props.datesCompleted)
    const [childChapters, setChildChapters] = useState(route.params.chapter.childChapters)
    const [isDone, setIsDone] = useState(route.params.chapter.isDone)
    const [isParent, setIsParent] = useState(route.params.chapter.childChapters.length > 0)

    const [totalPages, setTotalPages] = useState(calculateTotalPages(route.params.chapter, childChapters))
    const [totalReadPages, setTotalReadPages] = useState(calculateTotalReadPages(route.params.chapter, childChapters))
    const [percentCompleted, setPercentCompleted] = useState(calculatePercentCompleted(totalReadPages, totalPages))

    // useEffect(() => {
    //     navigation.setOptions({ headerRight: () => (
    //         <Button onPress={() => Alert} title="Click"/>
    //     ) })
    // }, [chapter.chapterName, navigation]);

    useEffect(() => {
        AsyncStorage.getItem("chapters").then((chaptersUnparsed) => {
            if (chaptersUnparsed) {
                const chapters: ChapterSignature = JSON.parse(chaptersUnparsed);
                setChapter(chapters[chapter.id]);
                setChaptersById(chapters);
                if (isParent) {
                    const listTimesRecapped = chapter.childChapters.map((index: any) => chapters[Number(index)].timesRecapped)
                    const minTimesRecapped = listTimesRecapped.reduce((min: number, current: number) => {return Math.min(min, current);}, Infinity);
                    updateTimeRecapped(minTimesRecapped);

                    const listIsDone = chapter.childChapters.map((index: any) => chapters[Number(index)].isDone)
                    const allDone = listIsDone.every((element: any) => element === true);
                    setIsDone(allDone);
                }
            }
        })
      }, [isFocused]);

    useEffect(() => {
        const calculatedTotalReadPages = calculateTotalReadPages(chapter, chapter.childChapters);
        setPercentCompleted(calculatePercentCompleted(calculatedTotalReadPages, totalPages));
        setTotalReadPages(calculatedTotalReadPages);
    }, [chaptersById])


    function updateCurrentPage(currentValue: any) {
        AsyncStorage.getItem("chapters").then((chaptersUnparsed) => {
            if (chaptersUnparsed) {
                var chapters: ChapterSignature = JSON.parse(chaptersUnparsed);
                chapters[Number(chapter.id)].currentPage = currentValue;
                AsyncStorage.setItem("chapters", JSON.stringify(chapters))
            }
        }).then(() => handleIfDone(currentValue))
        setCurrentPage(currentValue);
    }

    function updateTimeRecapped(currentValue: any) {
        AsyncStorage.getItem("chapters").then((chaptersUnparsed) => {
            if (chaptersUnparsed) {
                var chapters: ChapterSignature = JSON.parse(chaptersUnparsed);
                chapters[Number(chapter.id)].timesRecapped = currentValue;
                AsyncStorage.setItem("chapters", JSON.stringify(chapters))
            }
        })
        setTimesRecapped(currentValue);
    }


    // const handleSliderUpdate = (value: any) => {
    //     setCurrentPage(value);
    // }


    const handleSliderComplete = (value: any) => {
        updateCurrentPage(value);
        const newTotalRead = calculateTotalReadPages({...chapter, currentPage: value}, childChapters)
        setTotalReadPages(newTotalRead);
        setPercentCompleted(calculatePercentCompleted(newTotalRead, totalPages));
    }

    function handleIfDone(value: any) {
        if (value >= endPage && !isDone && childChapters.length == 0) {
            setTimesRecapped(timesRecapped + 1);
            setIsDone(true);
            AsyncStorage.getItem("chapters").then((chaptersUnparsed) => {
                if (chaptersUnparsed) {
                    var chapters: ChapterSignature = JSON.parse(chaptersUnparsed);
                    chapters[Number(chapter.id)].timesRecapped = timesRecapped + 1;
                    chapters[Number(chapter.id)].isDone = true;
                    AsyncStorage.setItem("chapters", JSON.stringify(chapters))
                }
            }).finally(() => {
                onDoneAlert();
            });
        }
    }

    const onDoneAlert = () =>
        Alert.alert('Capitol finalizat!', 'Ce doresti mai departe?', [
            {
                text: 'Ia-o de la capat acum',
                onPress: () => resetChapter()
            },
            {
                text: 'Lasa-l asa',
                onPress: () => navigation.goBack()
            }
        ]);

    function resetChapter() {
        AsyncStorage.getItem("chapters").then((chaptersUnparsed) => {
            if (chaptersUnparsed) {
                var chapters: ChapterSignature = JSON.parse(chaptersUnparsed);
                chapters[Number(chapter.id)].isDone = false;
                AsyncStorage.setItem("chapters", JSON.stringify(chapters))
            }
        }).then(() => {
            setIsDone(false);
            handleSliderComplete(startPage);
        })
    }

    function calculateTotalPages(ch: any, idOfChildren: any) {
        if (idOfChildren.length > 0) {
            return idOfChildren.reduce((sum: number, index: string) => sum + calculateTotalPages(chaptersById[Number(index)], chaptersById[Number(index)].childChapters), 0)
        } 
        return ch.endPage - ch.startPage;
    }

    function calculateTotalReadPages(ch: any, idOfChildren: any) {
        if (idOfChildren.length > 0) {
            return idOfChildren.reduce((sum: number, index: string) => sum + calculateTotalReadPages(chaptersById[Number(index)], chaptersById[Number(index)].childChapters), 0)
        } 
        return ch.currentPage - ch.startPage;
    }

    function calculatePercentCompleted(totalRead: number, total: number) {
        return Math.floor((totalRead / total) * 100)
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
                            <StyledText>{startPage}-{endPage}</StyledText>
                        </View>
                        <View style={styles.pageInfoContainer}>
                            <StyledText>Pagina curenta:</StyledText>
                            <StyledText>{currentPage == startPage ? `Neinceput` : currentPage >= endPage ? 'Finalizat' : currentPage}</StyledText>
                        </View>
                        <View style={styles.pageInfoContainer}>
                            <StyledText>Numar pagini citite din total:</StyledText>
                            <StyledText>{totalReadPages}/{totalPages}</StyledText>
                        </View>
                        <View style={styles.pageInfoContainer}>
                            <StyledText>Numar finalizari:</StyledText>
                            <StyledText>{timesRecapped}</StyledText>
                        </View>
                    </View>
                </Card>
                
                <Card>
                    <StyledText style={styles.cardTitle}>Actualizeaza progresul</StyledText>
                    <Slider 
                        minimumValue={startPage}
                        maximumValue={endPage}
                        step={1}
                        value={currentPage}
                        tapToSeek={true}
                        onSlidingComplete={handleSliderComplete}
                        //onValueChange={handleSliderUpdate}
                    />
                </Card>
                
            </View>
        )
    }

    function parentComponents() {
        return (
            <ScrollView>
                <Card>
                    <StyledText style={styles.cardTitle}>Informatii</StyledText>
                    <View style={styles.cardTextContainer}>
                        <View style={styles.pageInfoContainer}>
                            <StyledText style={styles.cardTextElement}>Procent de completare:</StyledText>
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
                            <StyledText>
                                {totalPages}
                            </StyledText>
                        </View>
                        <View style={styles.pageInfoContainer}>
                            <StyledText>Numar finalizari:</StyledText>
                            <StyledText>{timesRecapped}</StyledText>
                        </View>
                    </View>
                </Card>
                <Card>
                    <StyledText style={styles.cardTitle}>Subcapitole:</StyledText>
                    
                        {childChapters.map((index: any) => (
                            <ChapterSummary navigation={navigation} id={index} chaptersById={chaptersById} topLevelStyle={styles.chapterSummaryView} />
                        ))}
                    
                </Card>
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            <StyledText style={styles.chapterName}>{name}</StyledText>
            {isParent ? parentComponents() : childComponents()}
            {/* <Button title="Reseteaza progresul" onPress={resetTimesRecapped}/> */}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 8,
        marginBottom: 16,
    },
    chapterName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    pageInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chapterSummaryView: {
        marginHorizontal: '5%',
        marginBottom: '2%'
    },
    subChaptersView: {
        borderStyle: 'solid',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: 'rgba(228,236,255,1)'
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: '2%'
    },
    cardTextContainer: {
        marginHorizontal: '5%'
    },
    cardTextElement: {

    }
    
})

export default Chapter
