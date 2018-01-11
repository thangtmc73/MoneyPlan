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
import PlanInfo from './../components/PlanInfo'
import formatter from './../utils/formatter'
import DBService from './../service/DBService'
import categories from './../model/Categories'
import Utils from './../utils/Utils'

class MonthGeneralScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: (navigation.state.params.month > 0 ? navigation.state.params.month : '0' + navigation.state.params.month.toString) + '/' + navigation.state.params.year,
        headerStyle:{
            backgroundColor:'#2db84c',
        },
        headerTintColor:'white',
    });
    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.state = {data: DBService.getAllUsedMoneyDetailSpecifiedMonthSortByCategory(params.month - 1, params.year)};
    }

    render() {
        let total_income = 0;
        let total_outcome = 0;
        let id_income = -1;
        let id_outcome = -1;
        let tempt_income = 0;
        let tempt_outcome = 0;
        let tempt_category = '';
        let modifiedDataIncome = [];
        let itemArr_income = [];
        let modifiedDataOutcome = [];
        let itemArr_outcome = [];
        this.state.data.map((item, index) => {
            if (categories[item.category_id].type_id === 2) {
                total_income += item.value;
                if (item.value >= tempt_income)
                {
                    id_income = index;
                }

                if (item.category_id.toString() !== tempt_category)
                {
                    tempt_category = item.category_id.toString();
                    if (itemArr_income.length > 0)
                    {
                        modifiedDataIncome.push(itemArr_income.slice(0));
                    }
                    while (itemArr_income.length) { itemArr_income.pop()};
                    itemArr_income.push(item);
                }
                else {
                    itemArr_income.push(item);
                }
            }
            else {
                total_outcome -= item.value;
                if (item.value <= tempt_outcome)
                {
                    id_outcome = index;
                }

                if (item.category_id.toString() !== tempt_category)
                {
                    tempt_category = item.category_id.toString();
                    if (itemArr_outcome.length > 0)
                    {
                        modifiedDataOutcome.push(itemArr_outcome.slice(0));
                    }
                    while (itemArr_outcome.length) { itemArr_outcome.pop()};
                    itemArr_outcome.push(item);
                }
                else {
                    itemArr_outcome.push(item);
                }
            }

            
        });

        itemArr_income.length > 0 ? modifiedDataIncome.push(itemArr_income) : {};
        itemArr_outcome.length > 0 ? modifiedDataOutcome.push(itemArr_outcome) : {};

        return (
        <View style={styles.container}>
            {this.state.data.length > 0 ? (
            <ScrollView>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <Text style={styles.detailTitle}>Lời nhắn</Text>
                        <Text>Tháng này bạn đã chi tiêu quá mức quy định</Text>
                    </View>
                </View>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <Text style={styles.detailTitle}>Thu nhập</Text>
                        <Text style={[styles.value, {color: '#039be5'}]}>{formatter.formatNumberIntoCurrency(total_income)} đ</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.detailTitle}>Chi tiêu</Text>
                        <Text style={[styles.value, {color: 'red'}]}>{formatter.formatNumberIntoCurrency(total_outcome)} đ</Text>
                    </View>
                </View>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <Text style={styles.detailTitle}>Thu nhập ròng</Text>
                        <Text style={[styles.value, {color: 'black'}]}>{formatter.formatNumberIntoCurrency(total_income - total_outcome)} đ</Text>
                    </View>
                </View>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <Text style={[styles.detailTitle, {fontSize: 20}]}>Chi tiêu</Text>
                    </View>
                    <View style={styles.mainSeparator}/>
                    <Text style={styles.subtitle}>KHOẢN CHI LỚN NHẤT</Text>
                    {id_outcome !== -1 ?
                    <View style={styles.row}> 
                        <View style={{justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
                            <Image style={styles.image} source={categories[this.state.data[id_outcome].category_id].image}/>
                            <View style={{justifyContent:'center', flexDirection: 'column', marginLeft: 5}}>
                                <Text style={{fontSize: 14, color: 'black'}}>{this.state.data[id_outcome].title}</Text>
                                <Text>{this.state.data[id_outcome].date.getDate()} Tháng {this.state.data[id_outcome].date.getMonth() + 1} {this.state.data[id_outcome].date.getFullYear()}</Text>
                            </View>
                        </View>
                        <Text style={[styles.value, {color: 'red'}]}>{formatter.formatNumberIntoCurrency(this.state.data[id_outcome].value)} đ</Text>
                    </View> : <View/>}
                    <View style={styles.mainSeparator}/>
                    <Text style={styles.subtitle}>CHI TIÊU THEO NHÓM</Text>
                    {
                        modifiedDataOutcome.length > 0 ?
                        modifiedDataOutcome.map((item, id) =>
                            <View style={styles.row} key={id}> 
                                <View style={{justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
                                    <Image style={styles.image} source={categories[item[0].category_id].image}/>
                                    <Text style={{fontSize: 14, color: 'black', marginLeft: 5}}>{categories[item[0].category_id].title}</Text>
                                </View>
                                <Text style={[styles.value, {color: 'red'}]}>{formatter.formatNumberIntoCurrency(Utils.totalValueInArray(item, 'value'))} đ</Text>
                            </View>) : <View/>
                    }
                </View>
                <View style={styles.group}>
                    <View style={styles.row}>
                        <Text style={[styles.detailTitle, {fontSize: 20}]}>Thu nhập</Text>
                    </View>
                    <View style={styles.mainSeparator}/>
                    <Text style={styles.subtitle}>KHOẢN THU LỚN NHẤT</Text>
                    {id_income !== -1 ?
                    <View style={styles.row}> 
                        <View style={{justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
                            <Image style={styles.image} source={categories[this.state.data[id_income].category_id].image}/>
                            <View style={{justifyContent:'center', flexDirection: 'column', marginLeft: 5}}>
                                <Text style={{fontSize: 14, color: 'black'}}>{this.state.data[id_income].title}</Text>
                                <Text>{this.state.data[id_income].date.getDate()} Tháng {this.state.data[id_income].date.getMonth() + 1} {this.state.data[id_income].date.getFullYear()}</Text>
                            </View>
                        </View>
                        <Text style={[styles.value, {color: '#039be5'}]}>{formatter.formatNumberIntoCurrency(this.state.data[id_income].value)} đ</Text>
                    </View> : <View/>}
                    <View style={styles.mainSeparator}/>
                    <Text style={styles.subtitle}>THU NHẬP THEO NHÓM</Text>
                    {
                        modifiedDataIncome.length > 0 ?
                        modifiedDataIncome.map((item, id) =>
                            <View style={styles.row} key={id}> 
                                <View style={{justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
                                    <Image style={styles.image} source={categories[item[0].category_id].image}/>
                                    <Text style={{fontSize: 14, color: 'black', marginLeft: 5}}>{categories[item[0].category_id].title}</Text>
                                </View>
                                <Text style={[styles.value, {color: '#039be5'}]}>{formatter.formatNumberIntoCurrency(Utils.totalValueInArray(item, 'value'))} đ</Text>
                            </View>) : <View/>
                    }
                </View>
            </ScrollView>) : (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.noDataTitle}>Không có dữ liệu</Text>
            </View>)}
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#d3d3d3',
        height: 'auto',
    },
    group: {
        flex: 1,
        marginBottom: 10,
        backgroundColor:'white',
    },
    row: {
        flexDirection: 'row',
        height: 'auto',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'space-between'
    },
    mainSeparator: {
        backgroundColor: 'lightgray',
        height: 1,
    },
    column: {
        flex: 1,
        backgroundColor:'white',
        flexDirection: 'column',
    },
    image: {
        padding: 5,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailTitle: {
        fontSize: 16,
        color: 'black'
    },
    value: {
        fontSize: 16,
        fontFamily: 'Roboto-Medium'
    },
    subtitle: {
        margin: 10,
        fontSize: 16,
        color: '#a9a9a9'
    },
    columnTitle: {
        fontSize: 20,
        color: 'black',
        height: 40,
    },
    noDataTitle: {
        fontSize: 26,
        fontFamily: 'Roboto-Light',
        color: 'black',
    },
});

export default MonthGeneralScreen;