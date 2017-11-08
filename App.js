/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import HomeScreen from "./HomeScreen"
import DayDetailSaveEditScreen from "./DayDetailSaveEditScreen"

const ScreenStack = StackNavigator({
    Home: {screen: HomeScreen},    
    DayDetailSaveEdit: {screen: DayDetailSaveEditScreen},                
});

export default class App extends Component<{}> {
    render() {
        return (
            <ScreenStack/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
