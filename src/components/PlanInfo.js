// Component CurrentMoney thể hiện số tiền hiện tại đang có cùng với biểu tượng
// tờ tiền đi kèm, được hiện lên trên phần tiêu đề của màn hình HomeScreen
// giá trị số tiền hiện tại truyền vào thuộc tính name
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from './ProgressBar'
import formatter from './../utils/formatter'
class PlanInfo extends Component {
    render() {
        let today = new Date();
        today.setHours(0,0,0,0);
        let passedValue = this.props.passedValue;
        let totalValue = this.props.target;
        let planDate = new Date(this.props.date);
        let percentPassed = (passedValue / totalValue) * 100;
        percentPassed = Math.round(percentPassed * 10) / 10;
        let colorStyle ='black';
        let button = null;
        if (today >= planDate){ 
            colorStyle = 'red';
        }
        let colorDone = 'gray'
        if (passedValue >= totalValue)
        {
            colorDone = '#2db84c'
            percentPassed = 100;
        }
        else{
            button = <View/>
        }
        let remain = (totalValue - passedValue) >= 0 ? totalValue - passedValue : 0;
        return (
            <View style={styles.container}>
                <View style={styles.detailRowContainer}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={[styles.detailRowValue, {color:colorStyle}]}>{planDate.getDate()}/{planDate.getMonth()}/{planDate.getFullYear()}</Text>
                </View>
                <View style={styles.mainSeparator}/>
                <View style={styles.detailRowContainer}>
                    <Text style={styles.subtitle}>{this.props.subtitle}</Text>
                </View>
                <View style={[styles.detailRowContainer]}>
                    <View style={[styles.detailRowContainer, {justifyContent: 'flex-start', paddingLeft:0, paddingRight:0}]}>
                        <Text style={[styles.detailRowValue, {color:'black'}]}>Còn thiếu: </Text>
                        <Text style={[styles.detailRowValue]}>{formatter.formatNumberIntoCurrency(remain)}đ</Text>
                        <Text style={[styles.detailRowValue, {color:'black'}]}>/{formatter.formatNumberIntoCurrency(totalValue)}đ</Text>
                    </View>
                </View>
                <View style={styles.mainSeparator}/>
                <View style={[styles.detailRowContainer, {justifyContent: 'flex-end', marginBottom: 0}]}>
                    <TouchableOpacity style={{padding: 10}}><Icon name='check-circle-o' size={24} color={colorDone}/></TouchableOpacity>
                    <TouchableOpacity style={{padding: 10}}><Icon name='trash-o' size={24} color='gray'/></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius:5,        
        backgroundColor: 'white',
        flexDirection:'column',
        justifyContent: 'flex-start',
        margin: 4,
    },
    mainSeparator: {
        backgroundColor:'lightgray',
        height:1,
        marginLeft:10,
        marginRight:10,
    },
    detailRowContainer: {
        paddingLeft:10,        
        paddingRight:10,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginBottom: 5,        
    },
    detailRowHeader:{
        color:'black',
        fontSize:16,
        alignSelf: 'center',        
    },
    detailRowValue:{
        fontSize:18,
        alignSelf: 'center',
    },
    title:{
        color:'black',
        fontSize: 24,
    },
    subtitle:{
        color:'gray',
        fontSize: 22,
    },
    red: {
        backgroundColor: 'red',
    },
    blue: {
        backgroundColor: '#20b2aa',
    },
    green: {

    }
});

export default PlanInfo;