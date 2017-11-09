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

import CurrentMoney from './CurrentMoney'
import MonthStatus from './MonthStatus'
import DayStatus from './DayStatus'
import HeaderIconButton from './HeaderIconButton'

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: (
            <CurrentMoney name='1.505.500'/>
        ),
        headerStyle:{
            backgroundColor:'#2db84c',
        },
        headerTitleStyle: {alignSelf: 'center'},
        headerTintColor:'white',
        headerLeft: <HeaderIconButton name='bars' size={22} tintColor='white' onPress={() => {

        }}/>,
        headerRight: <HeaderIconButton name='bell-o' size={22} tintColor='white' onPress={() => {

        }}/>,
    };

    constructor(props) {
        super(props);
        this.states = {}
    }



    render() {
        const {navigate} = this.props.navigation;
        dataTest = [{title: 'Di chuyển', subtitle: 'Xe buýt', value:-2000},
            {title: 'Lương', subtitle: 'Công ty', value: 100000},
            {title: 'Ăn cơm', subtitle: 'Trưa', value: -15000}];
        return (
            <View>
                <ScrollView style={styles.list}>
                    <MonthStatus month={10} income={15000} outcome={30000}/>
                    <DayStatus data={dataTest}/>
                    <DayStatus data={dataTest}/>
                </ScrollView>
                <TouchableOpacity  style={styles.floatingActionButton}>
                        <Icon name='plus' size={22} color='white'/>                                                                                     
                </TouchableOpacity>
            </View>
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

export default HomeScreen;

