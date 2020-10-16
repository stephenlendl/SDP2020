import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from './../App';

export default ({history}) => (
    <View>
        <Text style={styles.header}> There was an Error! :( </Text>
        <Button title="Back to Home" onPress= {()=> history.push("/")} />
    </View>
)