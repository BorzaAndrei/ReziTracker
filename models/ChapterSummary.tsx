import React, { Fragment } from "react";
import { Alert, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import StyledText from "../components/StyleText";


export default function ChapterSummary({ navigation, id, chaptersById, topLevelStyle }: {navigation: any, id: number, chaptersById: any, topLevelStyle: any}) {

    const chapter = chaptersById[id];
    const childIds = chapter.childChapters;

    function onPressParent() {
        navigation.navigate('SingleChapter', chapter)
    }

    return (
        <View style={topLevelStyle}>
            <TouchableHighlight onPress={onPressParent}>
                <View style={styles.chapterView}>
                    <View style={{flex: 1}}>
                        <StyledText style={styles.chapterName}>{chapter.chapterName}</StyledText>
                    </View>
                    <View style={{flex: 1}}>
                        <StyledText style={styles.pageProportion}>{chapter.currentPage}/{chapter.totalPages}</StyledText>
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
