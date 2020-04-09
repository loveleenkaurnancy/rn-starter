import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {

  return <View>
      <Text style={styles.text}>Hi PK</Text>
      <Button
        onPress={() => navigation.navigate('Component')}
        title="Go to Component Demo"/>
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
