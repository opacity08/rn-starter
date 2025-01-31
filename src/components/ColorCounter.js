import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`Increse ${color}`} />
            <Button onPress={() => onDecrease()} title={`Decrese ${color}`} />
        </View>
    )    
}

const styles = StyleSheet.create({});

export default ColorCounter;