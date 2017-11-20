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
    DayDetail: { screen: DayDetailScreen },                    
    Home: { screen: HomeScreen },           
    AddDayDetail : { screen: AddDayDetailScreen },            
    AddDayDetail : { screen: AddDayDetailScreen },        
    Home: { screen: HomeScreen },            
    EditDayDetail : { screen: EditDayDetailScreen },    
    Home: { screen: HomeScreen },        

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
