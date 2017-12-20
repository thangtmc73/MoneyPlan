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

import { StackNavigator, TabNavigator  } from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen"
import EditDayDetailScreen from "./src/screens/EditDayDetailScreen"
import AddDayDetailScreen from "./src/screens/AddDayDetailScreen"
import PlansScreen from "./src/screens/PlansScreen"
import DayDetailScreen from "./src/screens/DayDetailScreen"
import CurrentMoney from "./src/components/CurrentMoney"
import HeaderIconButton from "./src/components/HeaderIconButton"
import MonthContainer from "./src/screens/MonthContainer"
import NotificationScreen from "./src/screens/NotificationScreen"

const PlansContent = StackNavigator({
    PlansList: {
        screen: PlansScreen,
    },
});

const ScreenStack = StackNavigator(
    {        
        Home: {
            screen: HomeScreen,
        },
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
        Notifications : {
            screen: NotificationScreen,
        },
        DayDetail: { screen: DayDetailScreen },                                
        AddDayDetail: { screen: AddDayDetailScreen },
        EditDayDetail : { screen: EditDayDetailScreen },          
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
    },
    {
        initialRouteName: "Home",
    }
);

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
        height: 'auto',
    },
    list: {
        padding: 0,
        backgroundColor:'#dcdcdc'
    },
    row: {
        flexDirection: 'row',
        height: 100
    },
    headerButton: {
        padding: 4,
    },
    image: {
        height: 100
    },
    title: {
        fontSize: 20
    },
    floatingActionButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2db84c',
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',        
        bottom: 30,
    },

});
