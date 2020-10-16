import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './../App';

export default ({history}) => (
    <View>
        <Text style={styles.header}>Welcome to NoID Test Page 2!</Text>
        <Button title="Go to Home Page" onPress = {() => history.push("/")} />
        <Button title="Go to Page 1" onPress = {() => history.push("/page1")} />
        <Button title="Go to Page 3" onPress = {() => history.push("/page3")} />
        <Button title="ERROR" onPress = {() => history.push("/ERROR")} />
    </View>
)