/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen"
<<<<<<< HEAD
import DayDetailSaveEditScreen from "./src/screens/DayDetailSaveEditScreen"
import ThemKeHoach from "./src/screens/ThemKeHoach"

const ScreenStack = StackNavigator({
    ThemKeHoach: {screen: ThemKeHoach},
    Home: {screen: HomeScreen},    
    DayDetailSaveEdit: {screen: DayDetailSaveEditScreen}, 
               
=======
import EditDayDetailScreen from "./src/screens/EditDayDetailScreen"
import AddDayDetailScreen from "./src/screens/AddDayDetailScreen"
import PlansScreen from "./src/screens/PlansScreen"
import DayDetailScreen from "./src/screens/DayDetailScreen"

const PlansContent = StackNavigator({
    PlansList: {
        screen: PlansScreen,
    },
});

const ScreenStack = StackNavigator({
    AddDayDetail : { screen: AddDayDetailScreen },        
    DayDetail: { screen: DayDetailScreen },        
    Home: { screen: HomeScreen },            
    EditDayDetail : { screen: EditDayDetailScreen },    
    Home: { screen: HomeScreen },        
    Plans: {
        screen: PlansContent,
        navigationOptions : {
            headerTitle: (
                <Text style={{fontSize: 24, color: 'white', alignSelf: 'center'}}>Kế hoạch</Text>
            ),
            headerStyle: {
                backgroundColor: '#2db84c',
            },
        },
    },
>>>>>>> 4d994c8a07dc86abf9a3c75b3c05b30d31b59c2e
});


export default class App extends Component<{}> {
    render() {
        return (
            <ScreenStack />
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
