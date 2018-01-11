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
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import formatter from './../utils/formatter'
let windowWidth = Dimensions.get('window').width;

class MonthStatus extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={() => {
                this.props.navigation.navigate('MonthGeneral', {month: this.props.month, year: this.props.year});
            }}>
                <View style={styles.headerRow}>
                    <View style={styles.headerTitle}>
                        <View style={{flex: 2, justifyContent: 'center'}}>
                            <Text style={styles.title}>Tổng quan</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={styles.subTitle}>Chạm để xem báo cáo đầy đủ</Text>
                        </View>
                    </View>
                    <View style={styles.headerArrow}><Icon name='chevron-right' size={28} color='gray' /></View>
                </View>
                <View style={{flex:5}}>
                    <View style={styles.mainSeparator}/>
                    <View style={styles.detailRowContainer}>
                        <Text style={styles.detailRowHeader}>Tiền vào</Text>
                        <Text style={[styles.detailRowValue, {color:'#039be5'}]}>{formatter.formatNumberIntoCurrency(this.props.income)} đ</Text>
                    </View>
                    <View style={styles.detailRowContainer}>
                        <Text style={styles.detailRowHeader}>Tiền ra</Text>
                        <Text style={[styles.detailRowValue, {color:'red'}]}>{formatter.formatNumberIntoCurrency(this.props.outcome)} đ</Text>
                    </View>
                    <View style={styles.calSeparator}/>
                    <Text style={styles.result}>{formatter.formatNumberIntoCurrency(this.props.income - this.props.outcome)} đ</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        flex:1,
        width: windowWidth,
        height: windowWidth * 8 / 13,
        margin: 0,
        borderColor:'white',
        backgroundColor:'white',
        flexDirection:'column',
        marginBottom: 10,
        justifyContent: 'flex-start'
    },
    mainSeparator: {
        backgroundColor:'lightgray',
        height:1,
        marginLeft:10,
        marginRight:10,
    },
    headerRow: {
        flex: 3,
        height: 'auto',
        flexDirection: 'row',
        alignItems:'center'
    },
    headerTitle: {
        flexDirection: 'column',
        flex: 12,
    },
    headerArrow: {
        flex: 1,
        paddingRight:10,
    },
    title: {
        flex: 2,
        fontSize: 28,
        color: 'black',
        fontFamily: 'Roboto-Regular',
        textAlignVertical: 'center',
        marginLeft: 10,
    },
    subTitle: {
        flex: 1,
        fontSize: 16,
        color: 'gray',
        fontFamily: 'Roboto-Regular',
        textAlignVertical: 'center',
        marginLeft: 10,
    },
    detailRowContainer: {
        flex: 4,
        marginTop: 10,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    detailRowHeader:{
        color:'black',
        fontSize:16,
        fontFamily: 'Roboto-Regular'
    },
    detailRowValue:{
        fontSize:16,
        fontFamily: 'Roboto-Medium'
    },
    calSeparator: {
        backgroundColor:'lightgray',
        alignSelf:'flex-end',
        height:1,
        width:windowWidth * 5 /13,
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom:10,
    },
    result:{
        flex: 5,
        alignSelf:'flex-end',
        padding:10,
        paddingTop:0,
        fontSize:16,
        color:'black',
        fontFamily: 'Roboto-Medium',
        textAlignVertical: 'center',
    }
});

export default MonthStatus;