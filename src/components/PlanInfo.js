// Component CurrentMoney thể hiện số tiền hiện tại đang có cùng với biểu tượng
// tờ tiền đi kèm, được hiện lên trên phần tiêu đề của màn hình HomeScreen
// giá trị số tiền hiện tại truyền vào thuộc tính name
import React, {Component} from 'react';

import {
    Alert,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ProgressBar from './ProgressBar'
import formatter from './../utils/formatter'
import DBService from './../service/DBService'
import UsedMoneyDetailModel from './../model/UsedMoneyDetailModel'

let windowWidth = Dimensions.get('window').width;

class PlanInfo extends Component {
    render() {
        let passedValue = this.props.passedValue;
        let totalValue = this.props.target;
        let today = new Date(this.props.today);
        let planDate = new Date(this.props.date);
        let colorStyle ='black';
        if (today > planDate){ 
            colorStyle = '#e51c23';
        }
        let colorDone = 'gray'
        if (passedValue >= totalValue)
        {
            colorDone = '#2db84c'
        }

        let remain = (totalValue - passedValue) >= 0 ? totalValue - passedValue : 0;
        return (
            <View style={styles.container}>
                <View style={[styles.detailRowContainer]}>
                    <View style={{flexWrap: 'wrap', flex: 6}}>
                        <Text style={styles.title}>{this.props.subtitle}</Text>
                    </View>
                    <View style={{width: 120, flex: 4, alignItems: 'flex-end'}}>
                        <Text style={[styles.title, {color: colorStyle}]}>{this.props.date.getDate()}/{this.props.date.getMonth() + 1}/{this.props.date.getFullYear()}</Text>
                    </View>
                </View>
                <View style={styles.mainSeparator}/>
                <View style={[styles.detailRowContainer]}>
                    <View style={[styles.detailRowContainer, {justifyContent: 'flex-start', paddingLeft:0, paddingRight:0}]}>
                        <Text style={[styles.detailRowValue, {color:'black'}]}>Còn thiếu: </Text>
                        <Text style={[styles.detailRowValue, {fontFamily: 'Roboto-Medium'}]}>{formatter.formatNumberIntoCurrency(remain)}đ</Text>
                        <Text style={[styles.detailRowValue, {color:'black', fontFamily: 'Roboto-Medium'}]}>/{formatter.formatNumberIntoCurrency(totalValue)}đ</Text>
                    </View>
                </View>
                <View style={[styles.detailRowContainer, {justifyContent: 'flex-end', margin: 10}]}>
                    <TouchableOpacity style={{padding: 10}}  onPress={() => {
                        if (remain === 0)
                        {
                            Alert.alert(null,
                                'Đánh dấu hoàn thành kế hoạch sẽ cập nhật lại số tiền hiện tại của bạn và xoá kế hoạch ra khỏi danh sách. Bạn có muốn đánh dấu hoàn thành không?',
                                [{text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Có', onPress: () => {DBService.addNewUsedMoneyDetail(new UsedMoneyDetailModel('Kế hoạch', this.props.subtitle, 22, this.props.date, -this.props.target)); DBService.deletePlan(this.props.id); this.props.updateUI();}} ] )
                        }
                        else {
                            Alert.alert(null,
                                'Số tiền hiện tại của bạn không đủ để đánh dấu hoàn thành kế hoạch.',
                                [{text: 'Huỷ', onPress: () => console.log('Cancel Pressed'), style: 'ok'}])
                        }
                        }}>
                        <Icon name='check-circle-o' size={24} color={colorDone}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding: 10}}  onPress={() => {
                        Alert.alert(null,
                                'Kế hoạch sẽ bị xoá khỏi danh sách kế hoạch. Bạn có muốn xoá kế hoạch không?',
                                [{text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Có', onPress: () => {DBService.deletePlan(this.props.id); this.props.updateUI();}} ] )
                        }}>
                        <Icon name='trash-o' size={24} color='gray'/>
                    </TouchableOpacity>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius:5,        
        backgroundColor: 'white',
        flexDirection:'column',
        justifyContent: 'flex-start',
        margin: 4,
        flex: 1
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
        marginBottom: 5,
        height: 'auto',
    },
    detailRowHeader:{
        color:'black',
        fontSize:14,
        alignSelf: 'center',        
    },
    detailRowValue:{
        fontSize:20,
        alignSelf: 'center',
    },
    title:{
        color:'black',
        fontSize: 24,
        flexWrap:  'nowrap'
    },
    subtitle:{
        color:'gray',
        fontSize: 18,
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