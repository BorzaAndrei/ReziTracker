import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Chapter from "../models/Chapter";
import ChapterProps from "../models/ChapterProps";
import { initialChapters, ChapterSignature } from "../models/InitialChapters";
import ChapterSummary from "../models/ChapterSummary";


const ChaptersScreen = (props: any) => {

    const [chapters, setChapters] = useState(initialChapters);

     function loadChapters() {
        AsyncStorage.getItem("chapters").then((chapters) => {
            if (chapters){
                let obj: ChapterSignature = JSON.parse(chapters);
                setChapters(obj);
            } else {
                setChapters(initialChapters);
                AsyncStorage.setItem("chapters", JSON.stringify(initialChapters))
            }
        })
        .catch(() => {
            return setChapters(initialChapters);
        })
    }

    useEffect(() => {
        loadChapters();
    })

    return (
        <View>
            {
                Object.keys(chapters).filter(index => !chapters[Number(index)].isChild).map(index => (
                    <ChapterSummary navigation={props.navigation} id={chapters[Number(index)].id} chaptersById={chapters} topLevelStyle={styles.chapterSummaryView} />
                ))
            }
        </View>
    )

}

const styles = StyleSheet.create({
    chapterSummaryView: {
        marginHorizontal: '5%',
        marginTop: '5%',
        borderColor: 'blue',
        borderStyle: 'solid',
        borderWidth: 1
    }
})

export default ChaptersScreen
