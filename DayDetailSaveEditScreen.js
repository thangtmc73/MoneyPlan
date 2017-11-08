import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Button,
    TextInput,
    Picker,
} from 'react-native';

import CurrentMoney from './CurrentMoney'
import MonthStatus from './MonthStatus'
import DayStatus from './DayStatus'
import HeaderTextButton from './HeaderTextButton'

import Icon from 'react-native-vector-icons/FontAwesome';


class DayDetailSaveEditScreen extends React.Component {
    static navigationOptions = {
        title: "Chi Tiết Giao Dịch",
        headerStyle:{
            backgroundColor:'#dcdcdc',
        },
        headerTintColor: 'black',
        headerRight: <HeaderTextButton name='LƯU'></HeaderTextButton>,
    };

    constructor(props) {
        super(props);
        this.states = {}
    }



    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <View style={styles.left}/>
                        <TextInput style={[styles.right, {fontSize: 36}]}/>
                    </View>
                    <View style={styles.row}>
                        <Image style={styles.left}/>
                        <Picker style={styles.right}/>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Icon name='info' size={22} color='black'/>
                        </View>
                        <TextInput style={[styles.right, {fontSize: 20}]} placeholder='Ghi chú'/>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Icon name='calendar-check-o' size={22} color='black'/>
                        </View>
                        <TextInput style={styles.right}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {       
    },
    group: {
        margin:4,        
        backgroundColor:'white', 
        height:'auto',
        borderWidth:1,
        borderColor:'white',        
        borderRadius:5, 
    },
    row: {
        marginLeft: 4,
        marginRight: 4,
        flexDirection: 'row',
        alignItems:'center',                
        height: 'auto',
        width: 'auto'
    },
    left: {
        padding:5,
        flex: 1,
        height: 50,
        width: 50,
        justifyContent:'center',
        alignItems:'center',
    },
    right: {
        flex: 7,
    }

});

export default DayDetailSaveEditScreen;

