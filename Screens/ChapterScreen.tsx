import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChapterSignature } from "../models/InitialChapters";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
import StyledText from "../components/StyleText";


const Chapter = ({navigation, route}: {navigation: any, route: any}) => {

    const [name, setName] = useState(route.params.chapterName)
    const [startPage, setStartPage] = useState(route.params.startPage)
    const [endPage, setEndPage] = useState(route.params.endPage)
    const [currentPage, setCurrentPage] = useState(route.params.currentPage)
    // const [timesRecapped, setTimesRecapped] = useState(props.timesRecapped)
    // const [datesCompleted, setDatesCompleted] = useState(props.datesCompleted)
    // const [childChapters, setChildChapters] = useState(props.childChapers)

    useEffect(() => {
        navigation.setOptions({ title: route.params.chapterName })
    }, [route.params.chapterName, navigation]);


    function updateCurrentPage(currentValue: any) {
        AsyncStorage.getItem("chapters").then((chaptersUnparsed) => {
            if (chaptersUnparsed) {
                var chapters: ChapterSignature = JSON.parse(chaptersUnparsed);
                chapters[Number(route.params.id)].currentPage = currentValue;
                AsyncStorage.setItem("chapters", JSON.stringify(chapters))
            }
        })
        setCurrentPage(currentValue)
    }


    const handleSliderComplete = (value: any) => {
        updateCurrentPage(value);
    }

    function totalPages() {
        return route.params.endPage - route.params.startPage
    }

    function percentageDone() {
        return Math.floor(((currentPage - startPage) / totalPages()) * 100)
    }

    return (
        <View style={styles.container}>
            <StyledText style={styles.chapterName}>{name}</StyledText>
            <StyledText style={styles.percentage}>Percentage completed: {percentageDone()}%</StyledText>
            <View style={styles.pageInfoContainer}>
                <StyledText style={styles.pageInfo}>
                    Current Page: {currentPage}
                </StyledText>
                <StyledText style={styles.pageInfo}>
                    Total Pages: {endPage}
                </StyledText>
            </View>
            
            <Slider 
                style={styles.slider}
                minimumValue={startPage}
                maximumValue={endPage}
                step={1}
                value={currentPage}
                tapToSeek={true}
                onSlidingComplete={handleSliderComplete}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
      },
      chapterName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      percentage: {
        fontSize: 16,
        marginBottom: 4,
      },
      pageInfo: {
        fontSize: 14,
        marginBottom: 12,
      },
      slider: {
        marginBottom: 8,
      },
      pageInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
})

export default Chapter
