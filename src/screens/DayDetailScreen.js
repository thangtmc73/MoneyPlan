import React, { Component } from 'react';

import {
    Alert,
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Picker,
    Dimensions,
} from 'react-native';

import CurrentMoney from './../components/CurrentMoney'
import MonthStatus from './../components/MonthStatus'
import DayStatus from './../components/DayStatus'
import HeaderTextButton from './../components/HeaderTextButton'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import formatter from './../utils/formatter'
import DBService from './../service/DBService'
import categories from './../model/Categories'
let windowWidth = Dimensions.get('window').width;

class DayDetailScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Chi Tiết Giao Dịch",
        headerStyle: {
            backgroundColor: '#f0f0f0',
        },
        headerTintColor: 'black',
        headerRight: <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ width: 40 }} onPress={() => {
                navigation.navigate('EditDayDetail', {id: navigation.state.params.id, updateCurrentUI: navigation.state.params.updateCurrentUI});
            }}>
                <Icon name='pencil' size={28} color='gray' />
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 40 }} onPress={() => {
                Alert.alert(null,
                    'Bạn có muốn xoá giao dịch này không?',
                    [{ text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'Có', onPress: () => {DBService.deleteUsedMoneyDetail(navigation.state.params.id); navigation.state.params.updateUI(); navigation.goBack();}}])
            }}>
                <Icon name='delete' size={28} color='gray' />
            </TouchableOpacity>
        </View>
    });

    componentDidMount()
    {
        const {setParams} = this.props.navigation;
        setParams({
            updateCurrentUI: this.updateCurrentUI.bind(this)
        });
    }

    componentDidUpdate()
    {
        if (this.state.reload === true)
        {
            this.setState({reload: false});
            this.props.navigation.state.params.updateUI();
        }
    }


    updateCurrentUI()
    {
        this.setState({reload: true});
    }

    constructor(props) {
        super(props);
        this.state = {reload: false, data: DBService.getUsedMoneyDetailWithId(this.props.navigation.state.params.id)};
    }

    render() {
        const { navigate } = this.props.navigation;
        let colorStyle = (categories[this.state.data.category_id].type_id === 1 ? styles.red : styles.blue);
        return (
            <View style={styles.container}>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Image style={{ width: 40, height: 40 }} source={categories[this.state.data.category_id].image} />
                        </View>
                        <Text style={[styles.right, { fontSize: 28, color: 'black', fontFamily:'Roboto-Light'}]}>{categories[this.state.data.category_id].title}</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left} />
                        <Text style={[styles.right, { fontSize: 36, fontFamily:'Roboto-Medium' }, colorStyle]}>{formatter.formatNumberIntoCurrency(this.state.data.value > 0 ? this.state.data.value : -this.state.data.value)} đ</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Icon name='note-outline' size={22} color='black' />
                        </View>
                        <Text style={[styles.right, { fontSize: 20, color: 'black', fontFamily:'Roboto-Light' }]}>{this.state.data.subtitle}</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.left}>
                            <Icon name='calendar-range' size={22} color='black' />
                        </View>
                        <Text style={[styles.right, { fontSize: 20, fontFamily:'Roboto-Light', color: 'black' }]}>{this.state.data.date.getDate()}/{this.state.data.date.getMonth() + 1}/{this.state.data.date.getFullYear()}</Text>
                    </View>
                </View>
            </View>);
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
        padding: 4
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
        color: '#039be5'
    }
});

export default DayDetailScreen;

