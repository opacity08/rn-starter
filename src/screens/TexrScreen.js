import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {

    const [password, setPassword] = useState('');

    return <View>
        <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={newValue => setPassword(newValue)}
        />
        <Text>My name is {password}</Text>
        {password.length <= 5 ? <Text>Password must be longer than 5 characters</Text> : null }
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;