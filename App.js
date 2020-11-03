/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput
} from 'react-native';
import { NativeRouter, Route, Switch, Link } from 'react-router-native';

const welcomePage = ({history}) => {
  return (
  <View>
    <Text style={styles.header}>
      Welcome to NoID Test Home Page!{"\n"}
      Select an Account to Login
    </Text>
    <View style={styles.container}>
      <Button title="Member Login" onPress = {() => history.push("/memberLogin")} />
      <Button title="Merchant Login" onPress = {() => history.push("/merchantLogin")} />
      <Button title="Create an Account" onPress = {() => history.push("/accountCreation")} />
    </View>
  </View>
  );
}

const memLogin = ({history}) => {
  const [value, onChangeText] = React.useState('');
  return (
    <View>
        <Text style={styles.header}>Welcome to NoID Member Login!</Text>
        <View style={styles.container}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "white", width: 300}}
            onChangeText={text => onChangeText(text)}
            placeholder={'Username'}
            value={value}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "white", width: 300}}
            onChangeText={text => onChangeText(text)}
            placeholder={'Password'}
            value={value}
          />
          <Button title="Go to Home Page" onPress = {() => history.push("/")} />
          <Button title="ERROR" onPress = {() => history.push("/error")} />
        </View>
        
    </View>
  );
}

const merchLogin = ({history}) => {
  const [value, onChangeText] = React.useState('');
  return (
    <View>
        <Text style={styles.header}>Welcome to NoID Merchant Login!</Text>
        <View style={styles.container}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "white", width: 300}}
            onChangeText={text => onChangeText(text)}
            placeholder={'Username'}
            value={value}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "white", width: 300}}
            onChangeText={text => onChangeText(text)}
            placeholder={'Password'}
            value={value}
          />
          <Button title="Go to Home Page" onPress = {() => history.push("/")} />
          <Button title="ERROR" onPress = {() => history.push("/error")} />
        </View>
    </View>
  );
}

const accMake = ({history}) => {
  const [value, onChangeText] = React.useState('');
  return( 
    <View>
        <Text style={styles.header}>Welcome to NoID Account Creation!</Text>
        <View style={styles.container}>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "white", width: 300}}
            onChangeText={text => onChangeText(text)}
            placeholder={'Create Username'}
            value={value}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "white", width: 300}}
            onChangeText={text => onChangeText(text)}
            placeholder={'Create Password'}
            value={value}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: "white", width: 300}}
            onChangeText={text => onChangeText(text)}
            placeholder={'Email Address'}
            value={value}
          />
          <Button title="Go to Home Page" onPress = {() => history.push("/")} />
          <Button title="ERROR" onPress = {() => history.push("/error")} />
        </View>
    </View>
  )
}

const errorPage = ({history}) => {
  return(
    <View>
        <Text style={styles.header}> There was an Error! :( </Text>
        <View style={styles.container}>
          <Button title="Back to Home" onPress= {()=> history.push("/")} />
        </View>
    </View>
  );
}

const App = () => {
  return (
  <NativeRouter>
    <View style={styles.container}>
      <Switch>
        <Route exact path="/" component={welcomePage} />
        <Route path="/memberLogin" component={memLogin} />
        <Route path="/merchantLogin" component={merchLogin} />
        <Route path="/accountCreation" component={accMake} />
        <Route path="/error" component={errorPage} />
      </Switch>
    </View>
  </NativeRouter>
  );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green"
    },
    header: {
        fontSize: 20,
        marginTop: 20
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navItem: {
        flex: 1,
        alignItems: "center",
        padding: 10
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: "center",
        fontSize: 15
    }
});

export default App;
