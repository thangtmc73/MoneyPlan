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

import Icon from 'react-native-vector-icons/FontAwesome';

import CurrentMoney from './../components/CurrentMoney'
import MonthStatus from './../components/MonthStatus'
import DayStatus from './../components/DayStatus'
import HeaderIconButton from './../components/HeaderIconButton'

class MonthContainer extends React.Component {
    constructor(props) {
        super(props);
        this.states = {}
    }

    render() {
        const time = this.props.screenProps.time;
        dataTest = [{title: 'Di chuyển', subtitle: 'Xe buýt', value:-2000},
            {title: 'Lương', subtitle: 'Công ty', value: 100000},
            {title: 'Ăn cơm', subtitle: 'Trưa', value: -15000}];
        //dataTest = null;
        if (dataTest != null)    
        {
            return (
                <ScrollView style={styles.list}>
                    <MonthStatus month={10} income={15000} outcome={30000}/>
                        <DayStatus data={dataTest} navigate={this.props}/>
                        <DayStatus data={dataTest} navigate={this.props}/>
                </ScrollView>    
            );
        }
        else{
            return (
                <View style={styles.container}>
                    <Text style={styles.noDataTitle}>Không có dữ liệu</Text>
                    <Text style={styles.noDataSubTitle}>Chạm <Text style={{fontSize: 22}}>+</Text> để thêm</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
    noDataTitle: {
        fontSize: 26,
        fontFamily: 'Roboto-Light',
        color: 'black',
    },
    noDataSubTitle: {
        marginTop: 5,
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        color: 'gray',
    }
});

export default MonthContainer;