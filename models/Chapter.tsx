import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Recap from "./Recap";
import { ChapterSignature } from "./InitialChapters";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";


const Chapter = ({navigation, route}: {navigation: any, route: any}) => {

    const [name, setName] = useState(route.params.chapterName)
    const [totalPages, setTotalPages] = useState(route.params.totalPages)
    const [startPage, setStartPage] = useState(route.params.startPage)
    // const [endPage, setEndPage] = useState(props.endPage)
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



    return (
        <View>
            <View>
                <Text>{name}</Text>
                <Text>{percentageDone()}%</Text>
                <Text>
                    Current Page: {currentPage}
                    Total Pages: {totalPages}
                </Text>
                <Slider 
                    minimumValue={startPage}
                    maximumValue={totalPages}
                    step={1}
                    value={currentPage}
                    onSlidingComplete={updateCurrentPage}
                />
            </View>
        </View>
    )

    function percentageDone() {
        return Math.floor((currentPage / totalPages) * 100)
    }

}

const styles = StyleSheet.create({
    
})

export default Chapter
