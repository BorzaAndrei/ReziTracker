import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, TouchableHighlight, View } from "react-native";
import StyledText from "./StyleText";
import * as Animatable from 'react-native-animatable';


export default function ChapterSummary({ navigation, id, chaptersById, topLevelStyle }: {navigation: any, id: number, chaptersById: any, topLevelStyle: any}) {

    const [showChildView, setShowChildView] = useState(false);

    const chapter = chaptersById[id];
    const childIds = chapter.childChapters;


    const [totalPages, setTotalPages] = useState(calculateTotalPages(chapter, childIds))
    const [totalReadPages, setTotalReadPages] = useState(calculateTotalReadPages(chapter, childIds))

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

    useEffect(() => {
        const calculatedTotalPages = calculateTotalPages(chapter, childIds);
        const calculatedTotalReadPages = calculateTotalReadPages(chapter, childIds);
    
        setTotalPages(calculatedTotalPages);
        setTotalReadPages(calculatedTotalReadPages);
      }, [chaptersById]);



    function onPressParent() {
        navigation.navigate('SingleChapter', chapter)
    }

    function onPressShow() {
        setShowChildView(!showChildView);
    }

    function calculateProportion(idOfChilds: any) {
        if (childIds.length > 0) {
            const totalPages = childIds.reduce((sum: number, index: string) => sum + (chaptersById[Number(index)].endPage - chaptersById[Number(index)].startPage), 0);
            const totalReadPages = childIds.reduce((sum: number, index: string) => sum + chaptersById[Number(index)].currentPage - chaptersById[Number(index)].startPage, 0);
            return `${totalReadPages}/${totalPages}`
        } else {
            return `${chapter.currentPage - chapter.startPage}/${chapter.endPage - chapter.startPage}`;
        }
    }

    return (
        <View style={topLevelStyle}>
                <View style={styles.chapterView}>
                    {childIds.length > 0 ?
                        <View style={{flex: 4}}>
                            <TouchableHighlight onPress={onPressShow} onLongPress={onPressParent} underlayColor="#DDDDDD">
                                
                                    <StyledText style={{color: 'red'}}>{chapter.chapterName}</StyledText>
                                
                            </TouchableHighlight>
                        </View>
                        :
                        <View style={{flex: 4}}>
                            <TouchableHighlight onPress={onPressParent} underlayColor="#DDDDDD">
                                
                                    <StyledText>{chapter.chapterName}</StyledText>
                                
                            </TouchableHighlight>
                        </View>
                    }
                    <View style={{flex: 2}}>
                        <StyledText style={styles.pageProportion}>{totalReadPages}/{totalPages}</StyledText>
                    </View>
                </View>
            
            {showChildView && (
                <Animatable.View
                    animation="fadeInDown"
                    duration={1}
                >
                    {childIds.length > 0 && (
                    childIds.map((childId: number) => {
                        return (
                        <ChapterSummary navigation={navigation} id={childId} chaptersById={chaptersById} topLevelStyle={styles.childrenView} />
                        )
                    })
                    )}
                </Animatable.View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    touchable: {
        borderRadius: 8
    },
    pageProportion: {
        textAlign: 'right'
    },
    chapterView: {
        flexDirection: 'row'
    },
    childrenView: {
        marginLeft: '3%',
        marginTop: '2%'
    }
})
