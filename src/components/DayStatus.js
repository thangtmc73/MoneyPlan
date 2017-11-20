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

class DayStatus extends Component {
    render() {
        const data = [...this.props.data];
        let temp = 0;
        const total = data.reduce((temp, item, index) => {
            return (temp + item.value);
        }, 0);
        console.log(total);
        return (
            <View style={styles.borderLeft}>
                <View style={styles.container}>
                    <View style={styles.headerRow}>
                        <View style={styles.date}>
                            <Text style={styles.day}>19</Text>
                            <View style={styles.weekdayMonthContainer}>
                                <Text style={styles.weekday}>Thứ bảy</Text>
                                <Text style={styles.month}>Tháng 11 2016</Text>
                            </View>
                        </View>
                        <Text style={styles.result}>{formatter.formatNumberIntoCurrency(total)} đ</Text>
                    </View>
                    <View style={styles.mainSeparator}/>
                    <View>
                        {data.map((item, i) =>
                            <DayDetail key={i} title={item.title} subtitle={item.subtitle} value={item.value}/>
                        )}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    borderLeft: {
        backgroundColor: 'green',
        borderRadius: 5,
        paddingLeft: 5,
        margin: 4,
    },
    container: {
        height: 'auto',
        borderColor: 'white',
        backgroundColor: 'white',
        flexDirection: 'column',
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
        marginLeft: 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    date: {
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center'
    },
    day: {
        fontSize: 30,
        color: 'black',
    },
    weekday: {
        fontSize: 10,
        color: 'black',
    },
    month: {
        fontSize: 10,
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
        fontSize: 16
    },
    result: {
        alignSelf: 'flex-end',
        padding: 10,
        paddingTop: 0,
        fontSize: 18,
        color: 'black',
    }
});

export default DayStatus;