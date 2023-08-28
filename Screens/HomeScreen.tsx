import React from "react";
import { Button, ScrollView } from "react-native";
import Title from "../components/Title";
import Countdown from "../components/Countdown";


const HomeScreen = ({navigation}: {navigation: any}) => {
    return (
        <ScrollView>
            <Countdown />
            <Button title='Details' onPress={() => navigation.navigate('ChaptersScreen')}/>
        </ScrollView>
    )
}

export default HomeScreen
