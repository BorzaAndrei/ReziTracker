import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { initialChapters, loadChapters } from "../models/InitialChapters";
import ChapterSummary from "../components/ChapterSummary";


const ChaptersScreen = (props: any) => {

    const [chapters, setChapters] = useState(initialChapters);

    useEffect(() => {
        loadChapters(setChapters);
    })

    return (
        <ScrollView>
            {
                Object.keys(chapters).filter(index => !chapters[Number(index)].isChild).map(index => (
                    <ChapterSummary navigation={props.navigation} id={chapters[Number(index)].id} chaptersById={chapters} topLevelStyle={styles.chapterSummaryView} />
                ))
            }
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    chapterSummaryView: {
        marginHorizontal: '5%',
        marginTop: '5%',
    }
})

export default ChaptersScreen
