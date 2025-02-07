import React from "react";
import { Text, View, StyleSheet } from "react-native";


const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.textOneStyle}></View>
            <View style={styles.textTwoStyle}></View>
            <View style={styles.textThreeStyle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',        
        flexDirection: "row",
        justifyContent: "space-between",   
        height: 400     
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        width: 100,
        height: 100
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'green',        
        width: 100,
        height: 100,
        alignSelf: "flex-end"    
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'violet',
        width: 100,
        height: 100
    },
});

export default BoxScreen;