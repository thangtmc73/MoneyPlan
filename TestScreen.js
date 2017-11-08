import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Button,
    ScrollView,
    FlatList
} from 'react-native';

import CurrentMoney from './CurrentMoney'
import MonthStatus from './MonthStatus'
import DayStatus from './DayStatus'

class TestScreen extends React.Component {
    static navigationOptions = {
        headerTitle: (
            <CurrentMoney name='1.505.500'/>
        ),
        // headerStyle:{
        //     backgroundColor:'#2db84c',
        // },
        // headerTitleStyle: {alignSelf: 'center'},
        // headerTintColor:'white',
        // headerLeft: <TouchableOpacity><View><Image source={require('./menu.png')}/></View></TouchableOpacity>,
        // headerRight: <TouchableOpacity><View><Image source={require('./get-money.png')}/></View></TouchableOpacity>,
    };
    constructor(props) {
        super(props);
        this.states = {}
    }



    render() {
        const {navigate} = this.props.navigation;
        return (
            <Text>dfsdf</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        flex: 1,
        backgroundColor:'#d3d3d3'
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

});

export default TestScreen;

