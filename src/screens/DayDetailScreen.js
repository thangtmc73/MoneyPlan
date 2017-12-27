import React, { Component } from 'react';

import {
    Alert,
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
import formatter from './../utils/formatter'


class DayDetailScreen extends React.Component {
    static navigationOptions = {
        title: "Chi Tiết Giao Dịch",
        headerStyle: {
            backgroundColor: '#f0f0f0',
        },
        headerTintColor: 'black',
        headerRight: <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ width: 40 }} onPress={() => {

            }}>
                <Icon name='pencil' size={28} color='gray' />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 40 }} onPress={() => {
                Alert.alert(null,
                    'Bạn có muốn xoá giao dịch này không?',
                    [{ text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'Có', onPress: () => console.log('OK Pressed') },])
            }}>
                <Icon name='delete' size={28} color='gray' />
            </TouchableOpacity>
        </View>
    };

    constructor(props) {
        super(props);
        this.states = {}
    }

    render() {
        const { navigate } = this.props.navigation;
        const { params } = { title: 'Di chuyển', value: 36000, subtitle: 'Xe buýt' };
        let colorStyle = 10000 > 0 ? styles.blue : styles.red;
        return (
            <View style={styles.container}>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Image style={{ width: 40, height: 40 }} source={require('./../../images/outcome_an_uong.png')} />
                        </View>
                        <Text style={[styles.right, { fontSize: 36, color: 'black', padding: 4 }]}>Ăn uống</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left} />
                        <Text style={[styles.right, { fontSize: 36 }, colorStyle]}>{formatter.formatNumberIntoCurrency(10000 > 0 ? 10000 : -10000)} đ</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Icon name='note' size={22} color='black' />
                        </View>
                        <Text style={[styles.right, { fontSize: 20, color: 'black' }]}>Bánh mì</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Icon name='calendar-range' size={22} color='black' />
                        </View>
                        <Text style={[styles.right, { fontSize: 20 }]}>29/12/2016</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
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
        marginTop: 10,
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
    navigationButton: {
        width: 60,
        height: 60,
        backgroundColor: '#2db84c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    red: {
        color: 'red'
    },
    blue: {
        color: '#20b2aa'
    }
});

export default DayDetailScreen;

