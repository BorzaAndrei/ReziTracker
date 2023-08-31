import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Button, ScrollView, View, Alert } from "react-native";
import Countdown from "../components/Countdown";
import { initialChapters, loadChapters } from "../models/InitialChapters";
import TotalProgress from "../components/TotalProgress";
import { useIsFocused } from '@react-navigation/native';


const HomeScreen = ({navigation}: {navigation: any}) => {

    const [chapters, setChapters] = useState(initialChapters);
    const isFocused = useIsFocused();

    useEffect(() => {
        loadChapters(setChapters);
    }, [isFocused])

    function resetData() {
        AsyncStorage.removeItem('chapters');
    }

    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <Countdown />
            <TotalProgress chapters={chapters}/>
            <View style={styles.button}>
                <Button title='Chapters' onPress={() => navigation.navigate('ChaptersScreen')}/>
            </View>
            <View style={styles.button}>
                <Button title='Reset Data' onPress={resetData}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: '3%'
    }
})

export default HomeScreen
