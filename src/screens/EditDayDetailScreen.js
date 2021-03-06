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
    Dimensions,
} from 'react-native';

import HeaderTextButton from './../components/HeaderTextButton'
import DatePicker from 'react-native-datepicker'
import Moment from 'moment';
import formatter from './../utils/formatter'
import DBService from './../service/DBService'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import categories from './../model/Categories'
import UsedMoneyDetailModel from './../model/UsedMoneyDetailModel'

let windowWidth = Dimensions.get('window').width;

class EditDayDetailScreen extends React.Component {
    static navigationOptions = {
        title: "Sửa Giao Dịch",
        headerStyle: {
            backgroundColor: '#f0f0f0',
        },
        headerTintColor: 'black',
    };

    amountChanged(e) {
        let value = formatter.formatCurrencyIntoNumber(e);
        this.setState({ amount: value });
    }

    getReturnedData(id)
    {
        this.setState({category_id: id, type_id: categories[id].type_id});
    }

    constructor(props) {
        super(props);
        let dayDetail = DBService.getUsedMoneyDetailWithId(this.props.navigation.state.params.id);
        this.state = { 
            subtitle: dayDetail.subtitle,
            date: dayDetail.date.getDate() + '/' + (dayDetail.date.getMonth() + 1) + '/' + dayDetail.date.getFullYear(),
            amount: dayDetail.value,
            type_id: categories[dayDetail.category_id].type_id,
            category_id: dayDetail.category_id};
        this.amountChanged = this.amountChanged.bind(this);
    }

    render() {
        const { navigate } = this.props.navigation;
        let color = this.state.type_id === 1 ? 'red' : '#039be5';
        return (
            <View style={styles.container}>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <View style={styles.left} />
                        <TextInput autoFocus={true} keyboardType='numeric' style={[{ fontSize: 32, flex: 6, color: color, fontFamily:'Roboto-Medium' }]} onChangeText={this.amountChanged} value={this.state.amount >= 0 ? formatter.formatNumberIntoCurrency(this.state.amount) : formatter.formatNumberIntoCurrency(-this.state.amount)} />
                        <Text style={{flex: 1, fontSize: 36, color: 'black', fontFamily:'Roboto-Medium'}}>đ</Text>
                    </View>
                    <TouchableOpacity style={styles.row} onPress={() => {
                        this.props.navigation.navigate('Category', {category_id: this.state.category_id, getReturnedData: this.getReturnedData.bind(this)});
                    }}>
                        <View style={styles.left}>
                            <Image style={{width: 30, height: 30}} source={categories[this.state.category_id].image}/>
                        </View>
                        <Text style={[styles.right, {fontSize: 28, color: 'black', fontFamily:'Roboto-Light'}]}>{categories[this.state.category_id].title}</Text>
                    </TouchableOpacity>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Icon name='note-outline' size={22} color='black' />
                        </View>
                        <TextInput style={[styles.right, { fontSize: 20, fontFamily:'Roboto-Light' }]} placeholder='Ghi chú' value={this.state.subtitle} onChangeText={(subtitle) => this.setState({subtitle})} />
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
                    value = (categories[this.state.category_id].type_id === 1 ? -value : value);                        
                    let parts = this.state.date.split('/');
                    DBService.updateUsedMoneyDetailWithId(this.props.navigation.state.params.id, new UsedMoneyDetailModel(categories[this.state.category_id].title, this.state.subtitle.toString(), this.state.category_id, new Date(parts[2], parts[1] - 1, parts[0]), value));
                    this.props.navigation.state.params.updateCurrentUI();
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
        justifyContent: 'space-between',
        paddingTop: 5,
        paddingBottom: 5
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

