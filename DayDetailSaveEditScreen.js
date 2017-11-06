import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Button,
    Picker,
} from 'react-native';

import CurrentMoney from './CurrentMoney'
import MonthStatus from './MonthStatus'
import DayStatus from './DayStatus'

class DayDetailSaveEditScreen extends React.Component {
    static navigationOptions = {
        title: "Chi Tiết Giao Dịch",
        headerTintColor: 'black',
        headerRight: <TouchableOpacity><Text>Lưu</Text></TouchableOpacity>,
    };

    constructor(props) {
        super(props);
        this.states = {}
    }



    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={{height:100, width:100}}/>
                    <TextInput/>
                </View>
                <View style={styles.row}>
                    <Picker/>
                </View>
                <View style={styles.row}>
                    <TextInput/>
                </View>
                <View style={styles.row}>
                    <Image style={styles.image}/>
                    <TextInput/>
                </View>
                <DayStatus data={dataTest}/>
            </View>
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
        height: 100,
        width: 100
    },
    title: {
        fontSize: 20
    },

});

export default DayDetailSaveEditScreen;

