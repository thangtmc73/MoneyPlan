// Component MonthStatus thể hiện trạng thái tổng quan chi tiêu trong tháng
// của người sử dụng, số tiền thu vào (thuộc tính income), số tiền chi ra (
// thuộc tính outcome)
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';

import formatter from './../utils/formatter'

class MonthStatus extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.headerRow}>
                    <View style={styles.headerTitle}>
                        <Text style={styles.title}>Tổng quan</Text>
                        <Text style={styles.subTitle}>Chạm để xem báo cáo đầy đủ</Text>
                    </View>
                    <Text style={styles.headerArrow}>></Text>
                </View>
                <View style={styles.mainSeparator}/>
                <View style={styles.detailRowContainer}>
                    <Text style={styles.detailRowHeader}>Tiền vào</Text>
                    <Text style={[styles.detailRowValue, {color:'#20b2aa'}]}>{formatter.formatNumberIntoCurrency(this.props.income)} đ</Text>
                </View>
                <View style={styles.detailRowContainer}>
                    <Text style={styles.detailRowHeader}>Tiền ra</Text>
                    <Text style={[styles.detailRowValue, {color:'red'}]}>{formatter.formatNumberIntoCurrency(this.props.outcome)} đ</Text>
                </View>
                <View style={styles.calSeparator}/>
                <Text style={styles.result}>{formatter.formatNumberIntoCurrency(this.props.income - this.props.outcome)} đ</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin:4,
        borderWidth:1,
        borderRadius:5,
        height:'auto',
        borderColor:'white',
        backgroundColor:'white',
        flexDirection:'column',
    },
    mainSeparator: {
        backgroundColor:'lightgray',
        height:1,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:10,
    },
    headerRow: {
        height:70,
        flexDirection: 'row',
        flex: 1,
        alignItems:'center'
    },
    headerTitle: {
        flexDirection: 'column',
        flex: 13,
        padding:10
    },
    headerArrow: {
        flex: 1,
        fontSize: 32,
        paddingRight:10,
        color:'black',
    },
    title: {
        fontSize: 30,
        color: 'black',
    },
    subTitle: {
        fontSize: 11,
        color: 'gray',
    },
    detailRowContainer: {
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    detailRowHeader:{
        color:'black',
        fontSize:16
    },
    detailRowValue:{
        fontSize:16
    },
    calSeparator: {
        backgroundColor:'lightgray',
        alignSelf:'flex-end',
        height:1,
        width:150,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:10,
    },
    result:{
        alignSelf:'flex-end',
        padding:10,
        paddingTop:0,
        fontSize:20,
        color:'black',
    }
});

export default MonthStatus;