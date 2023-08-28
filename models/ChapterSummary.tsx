import React, { Fragment } from "react";
import { Alert, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import StyledText from "../components/StyleText";


export default function ChapterSummary({ navigation, id, chaptersById, topLevelStyle }: {navigation: any, id: number, chaptersById: any, topLevelStyle: any}) {

    const chapter = chaptersById[id];
    const childIds = chapter.childChapters;

    function onPressParent() {
        navigation.navigate('SingleChapter', chapter)
    }

    function calculateProportion() {
        if (childIds.length > 0) {
            const totalPages = childIds.reduce((sum: number, index: string) => sum + chaptersById[Number(index)].totalPages, 0);
            const totalReadPages = childIds.reduce((sum: number, index: string) => sum + chaptersById[Number(index)].currentPage, 0);
            return `${totalReadPages}/${totalPages}`
        } else {
            return `${chapter.currentPage}/${chapter.totalPages}`;
        }
    }

    return (
        <View style={topLevelStyle}>
            <TouchableHighlight onPress={onPressParent}>
                <View style={styles.chapterView}>
                    <View style={{flex: 1}}>
                        <StyledText style={styles.chapterName}>{chapter.chapterName}</StyledText>
                    </View>
                    <View style={{flex: 1}}>
                        <StyledText style={styles.pageProportion}>{calculateProportion()}</StyledText>
                    </View>
                </View>
            </TouchableHighlight>
            <View style={{}}>
                {childIds.length > 0 && (
                    childIds.map((childId: number) => {
                        return (
                        <ChapterSummary navigation={navigation} id={childId} chaptersById={chaptersById} topLevelStyle={styles.childrenView} />
                        )
                    })
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    chapterName: {

    },
    pageProportion: {
        textAlign: 'right'
    },
    chapterView: {
        flexDirection: 'row'
    },
    childrenView: {
        marginLeft: '5%'
    }
})
