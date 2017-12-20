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
import DatePicker from 'react-native-datepicker'
import Moment from 'moment';
import formatter from './../utils/formatter'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class EditDayDetailScreen extends React.Component {
    static navigationOptions = {
        title: "Sửa Giao Dịch",
        headerStyle: {
            backgroundColor: '#dcdcdc',
        },
        headerTintColor: 'black',
    };

    amountChanged(e) {
        let value = formatter.formatCurrencyIntoNumber(e);
        this.setState({ amount: value });
    }

    constructor(props) {
        super(props);
        this.state = { date: '20/11/2017', amount: 0 };
        this.amountChanged = this.amountChanged.bind(this);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <View style={styles.left} />
                        <TextInput autoFocus={true} keyboardType='numeric' style={[{ fontSize: 36, flex: 6 }]} onChangeText={this.amountChanged} value={this.state.amount > 0 ? formatter.formatNumberIntoCurrency(this.state.amount) : ''} />
                        <Text style={{ flex: 1, fontSize: 36, color: 'black' }}>đ</Text>

                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Image style={{ width: 40, height: 40 }} source={require('./../../images/an_uong.png')} />
                        </View>
                        <Text style={[styles.right, { fontSize: 32, color: 'black', padding: 4 }]}>Ăn uống</Text>
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
                        <DatePicker
                            style={styles.right}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="DD/MM/YYYY"
                            minDate="01/01/1990"
                            maxDate="31/12/2099"
                            confirmBtnText="Xác nhận"
                            cancelBtnText="Huỷ"
                            showIcon={false}
                            customStyles={{
                                dateText: {
                                    fontSize: 24,
                                }
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.floatingActionButton}>
                    <Icon name='content-save' size={22} color='white' />
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

export default EditDayDetailScreen;

