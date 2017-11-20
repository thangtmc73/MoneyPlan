import React, { Component } from 'react';

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

import CurrentMoney from './../components/CurrentMoney'
import MonthStatus from './../components/MonthStatus'
import DayStatus from './../components/DayStatus'
import HeaderTextButton from './../components/HeaderTextButton'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';

class AddDayDetailScreen extends React.Component {
    static navigationOptions = {
        title: "Thêm Giao Dịch",
        headerStyle: {
            backgroundColor: '#dcdcdc',
        },
        headerTintColor: 'black',
    };

    constructor(props) {
        super(props);
        this.state = {date: Moment()};
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <View style={styles.left} />
                        <TextInput autoFocus={true} keyboardType='numeric' style={[styles.right, { fontSize: 36 }]} />
                    </View>
                    <View style={styles.row}>
                        <Image style={styles.left} />
                        <Picker style={styles.right} />
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Icon name='note' size={22} color='black' />
                        </View>
                        <TextInput style={[styles.right, { fontSize: 20 }]} placeholder='Ghi chú' />
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Icon name='calendar-range' size={22} color='black' />
                        </View>
                        <Calendar
                            onChange={(date) => this.setState({ date })}
                            selected={this.state.date}
                            // We use Moment.js to give the minimum and maximum dates.
                            minDate={Moment().startOf('day')}
                            maxDate={Moment().add(10, 'years').startOf('day')}/>                    
                        </View>
                </View>
                <TouchableOpacity style={styles.floatingActionButton}>
                    <Icon name='save-content' size={22} color='white' />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    group: {
        margin: 4,
        backgroundColor: 'white',
        height: 'auto',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
    },
    row: {
        marginLeft: 4,
        marginRight: 4,
        flexDirection: 'row',
        alignItems: 'center',
        height: 'auto',
        width: 'auto'
    },
    left: {
        padding: 5,
        flex: 1,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        flex: 7,
    },
    floatingActionButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2db84c',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        right: 30,
        bottom: 30,
    },
});

export default AddDayDetailScreen;

