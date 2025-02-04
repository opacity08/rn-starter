import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {  

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go To List"
      />
      <TouchableOpacity onPress={() => navigation.navigate('ImageList')}>
        <Text>Go To Image</Text>        
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go To Counter"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go To Colors"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go To Square"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go To Text"
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go To Box"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
