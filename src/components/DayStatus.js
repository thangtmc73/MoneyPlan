// Component DayStatus được dùng để thể hiện ngày tháng năm
// cùng với tổng số tiền thu chi trong ngày đi kèm áp dụng
// trong màn hình HomeScreen
// các thuộc tính liên quan sẽ sửa khi xác định được cách
// sử dụng ngày tháng năm trong csdl
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';

import DayDetail from './DayDetail'
import formatter from './../utils/formatter'
import { StackNavigator } from 'react-navigation';
import Utils from './../utils/Utils'

class DayStatus extends Component {
    render() {
        const data = [...this.props.data];
        let temp = 0;
        const total = data.reduce((temp, item, index) => {
            return (temp + item.value);
        }, 0);
        const navigation = this.props.navigation;
        return (
            <View style={styles.wrapper}>
                <View style={styles.left}>
                    <View style={styles.circleRow}>
                        <View style={styles.circle}>
                            <Text style={styles.day}>{data[0].date.getDate() > 9 ? data[0].date.getDate() : '0' + data[0].date.getDate()}</Text>
                        </View>
                        <View style={styles.horizontalLine}/>
                    </View>
                    {this.props.verticalLine === true ? 
                    <View style={styles.circleColumn}>
                        <View style={styles.verticalLine}/>
                    </View> : <View/>}      
                </View>
                <View style={styles.container}>
                    <View style={styles.headerRow}>
                        <View style={styles.weekdayMonthContainer}>
                            <Text style={styles.weekday}>{Utils.getWeekdayName(data[0].date.getDay())}</Text>
                            <Text style={styles.month}>Tháng {data[0].date.getMonth() + 1} {data[0].date.getFullYear()}</Text>
                        </View>
                        <Text style={styles.result}>{formatter.formatNumberIntoCurrency(total)} đ</Text>
                    </View>
                    <View style={styles.mainSeparator}/>
                    <View>
                        {data.map((item) =>
                            <DayDetail key={item.id} id={item.id} title={item.title} subtitle={item.subtitle} value={item.value} category_id={item.category_id} navigation={this.props.navigation} updateUI={this.props.updateUI}/>
                        )}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginLeft: 4,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    left : {
        width: 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    container: {
        marginBottom: 10,
        marginLeft: 0,
        height: 'auto',
        borderColor: 'white',
        backgroundColor: 'white',
        flexDirection: 'column',
        flex: 1,
    },
    circleRow : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleColumn: {
        height: 'auto',
        flex: 1,
        width: 40,
        alignSelf: 'flex-start',
        alignItems: 'center',
    },
    circle: {
        borderRadius:18,
        height: 40,
        width: 40,
        borderColor: '#2db84c',
        backgroundColor: '#2db84c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontalLine: {
        height: 2,
        width: 10,
        backgroundColor: '#2db84c',
    },
    verticalLine: {
        height: 'auto',
        width: 2,
        backgroundColor: '#2db84c',
        flex: 1,
    },
    mainSeparator: {
        backgroundColor: 'lightgray',
        height: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    headerRow: {
        flexDirection: 'row',
        flex: 1,
        height: 'auto',
        justifyContent: 'space-between'
    },
    weekdayMonthContainer: {
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    day: {
        fontSize: 20,
        color: 'white',
    },
    weekday: {
        fontSize: 12,
        color: 'black',
    },
    month: {
        fontSize: 12,
    },
    detailRowContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailRowHeader: {
        color: 'black',
        fontSize: 16
    },
    detailRowValue: {
        fontSize: 16,
    },
    result: {
        alignSelf: 'flex-end',
        padding: 10,
        paddingTop: 0,
        fontSize: 16,
        color: 'black',
        fontFamily: 'Roboto-Medium'

    }
});

export default DayStatus;