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
import Home from './routeComponents/Home';
import page1 from './routeComponents/page1';
import page2 from './routeComponents/page2';
import page3 from './routeComponents/page3';
import Error from './routeComponents/Error';
import { NativeRouter, Route, Switch, Link } from 'react-router-native';

const App = () => {
  return (
  <NativeRouter>
    <View style={styles.container}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={page1} />
        <Route path="/page2" component={page2} />
        <Route path="/page3" component={page3} />
        <Route path="/ERROR" component={Error} />
      </Switch>
    </View>
  </NativeRouter>
  );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontSize: 20
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
