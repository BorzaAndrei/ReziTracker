import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StyleSheet, Text, View} from 'react-native';
import { initialChapters, ChapterSignature } from "../models/InitialChapters";
import StyledText from "./StyleText";

function TotalProgress({chapters}: {chapters: ChapterSignature}) {

    const [totalPages, setTotalPages] = useState(calculateTotalPages())
    const [totalReadPages, setTotalReadPages] = useState(calculateTotalReadPages())

    useEffect(() => {
        const calculatedTotalPages = calculateTotalPages();
        const calculatedTotalReadPages = calculateTotalReadPages();
    
        setTotalPages(calculatedTotalPages);
        setTotalReadPages(calculatedTotalReadPages);
      }, [chapters]);

    function calculateTotalPages() {
        const nonParentChapters = Object.keys(chapters).filter(index => chapters[Number(index)].childChapters.length == 0)
        return nonParentChapters.reduce((sum, index) => sum + (chapters[Number(index)].endPage - chapters[Number(index)].startPage), 0)
    }

    function calculateTotalReadPages() {
        const nonParentChapters = Object.keys(chapters).filter(index => chapters[Number(index)].childChapters.length == 0)
        return nonParentChapters.reduce((sum: number, index: string) => sum + chapters[Number(index)].currentPage - chapters[Number(index)].startPage, 0);
    }

    return (
        <View>
            <StyledText style={styles.text}>Your progress: {totalReadPages}/{totalPages} - {Math.floor((totalReadPages / totalPages) * 100)}%</StyledText>
            <StyledText style={styles.text}>Pages Left: {totalPages - totalReadPages}</StyledText>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: '2%'
    }
})

export default TotalProgress
