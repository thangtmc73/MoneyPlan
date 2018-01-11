import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-datepicker'
import Moment from 'moment';
import formatter from './../utils/formatter'
import DBService from './../service/DBService'
import PlanModel from './../model/PlanModel'

let windowWidth = Dimensions.get('window').width;

class AddPlanScreen extends React.Component {
    static navigationOptions = {
        title: "Thêm Kế Hoạch",
        headerStyle: {
            backgroundColor: '#dcdcdc',
        },
        headerTintColor: 'black',
    };

    amountChanged(e) {
        let value = formatter.formatCurrencyIntoNumber(e);
        this.setState({amount: value});
    }

    constructor(props) {
        super(props);
        let today = new Date();
        let date = today.getDate().toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getFullYear().toString();
        this.state = { date: date, amount: 0, subtitle: '' };
        this.amountChanged = this.amountChanged.bind(this);
    }

    render() {
        const { navigation } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <View style={styles.left} />
                        <TextInput autoFocus={true} keyboardType='numeric' style={[{ fontSize: 32, flex: 6, color: 'black', fontFamily: 'Roboto-Medium'}]} onChangeText={this.amountChanged} value={formatter.formatNumberIntoCurrency(this.state.amount)} />
                        <Text style={{flex: 1, fontSize: 36, color: 'black', fontFamily: 'Roboto-Medium'}}>đ</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Icon name='note-outline' size={22} color='black' />
                        </View>
                        <TextInput style={[styles.right, { fontSize: 20, fontFamily: 'Roboto-Light' }]} placeholder='Ghi chú' value={this.state.subtitle} onChangeText={(subtitle) => this.setState({subtitle})} />
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
                                dateText:{
                                    fontSize: 24,
                                    fontFamily:'Roboto-Light',
                                    alignSelf: 'flex-start',
                                    marginLeft: 5,
                                }
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.floatingActionButton} onPress={() => {
                    let value = isNaN(this.state.amount) ? 0 : this.state.amount;
                    let parts = this.state.date.split('/');
                    DBService.addNewPlan(new PlanModel(this.state.subtitle, new Date(parts[2], parts[1] - 1, parts[0]), this.state.amount));
                    this.props.navigation.state.params.updateUI();
                    this.props.navigation.goBack();
                }}>
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
        width: windowWidth,
        height: windowWidth / 8 * 5,
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

export default AddPlanScreen;

