import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChapterSignature } from "../models/InitialChapters";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
import StyledText from "../components/StyleText";
import ChapterSummary from "../components/ChapterSummary";
import Card from "../components/Card";


const Chapter = ({navigation, route}: {navigation: any, route: any}) => {

    const {chapter, chaptersById} = route.params;

    const [name, setName] = useState(chapter.chapterName)
    const [startPage, setStartPage] = useState(chapter.startPage)
    const [endPage, setEndPage] = useState(chapter.endPage)
    const [currentPage, setCurrentPage] = useState(chapter.currentPage)
    // const [timesRecapped, setTimesRecapped] = useState(props.timesRecapped)
    // const [datesCompleted, setDatesCompleted] = useState(props.datesCompleted)
    const [childChapters, setChildChapters] = useState(chapter.childChapters)
    const [isParent, setIsParent] = useState(chapter.childChapters.length > 0)

    const [totalPages, setTotalPages] = useState(calculateTotalPages(chapter, childChapters))
    const [totalReadPages, setTotalReadPages] = useState(calculateTotalReadPages(chapter, childChapters))
    const [percentCompleted, setPercentCompleted] = useState(calculatePercentCompleted(totalReadPages, totalPages))

    useEffect(() => {
        navigation.setOptions({ title: chapter.chapterName })
    }, [chapter.chapterName, navigation]);


    function updateCurrentPage(currentValue: any) {
        AsyncStorage.getItem("chapters").then((chaptersUnparsed) => {
            if (chaptersUnparsed) {
                var chapters: ChapterSignature = JSON.parse(chaptersUnparsed);
                chapters[Number(chapter.id)].currentPage = currentValue;
                AsyncStorage.setItem("chapters", JSON.stringify(chapters))
            }
        })
        setCurrentPage(currentValue);
    }


    const handleSliderComplete = (value: any) => {
        updateCurrentPage(value);
        const newTotalRead = calculateTotalReadPages({...chapter, currentPage: value}, childChapters)
        setTotalReadPages(newTotalRead);
        setPercentCompleted(calculatePercentCompleted(newTotalRead, totalPages));
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
                    />
                </Card>
                
            </View>
        )
    }

    function parentComponents() {
        return (
            <View>
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
                    </View>
                </Card>
                <Card>
                    <StyledText style={styles.cardTitle}>Subcapitole:</StyledText>
                    {childChapters.map((index: any) => (
                        <ChapterSummary navigation={navigation} id={index} chaptersById={chaptersById} topLevelStyle={styles.chapterSummaryView} />
                    ))}
                </Card>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StyledText style={styles.chapterName}>{name}</StyledText>
            {isParent ? parentComponents() : childComponents()}
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
