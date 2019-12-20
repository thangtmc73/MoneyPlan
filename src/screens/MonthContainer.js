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

import CurrentMoney from './../components/CurrentMoney'
import MonthStatus from './../components/MonthStatus'
import DayStatus from './../components/DayStatus'
import HeaderIconButton from './../components/HeaderIconButton'
import DBService from './../service/DBService'

class MonthContainer extends React.Component {
  constructor(props) {
    super(props);
    let year = Number(this.props.time.substr(0, 4));
    let month = Number(this.props.time.substr(4, 2));
    this.state = { data: [] }; //DBService.getAllUsedMoneyDetailSpecifiedMonth(month - 1, year)};
  }

    render() {
        const navigation = this.props.navigation;
        const time = this.props.time;
        var groups = {};
        let total_income = 0;
        let total_outcome = 0;
        const modifiedData = [];
        let itemArr = [];
        let temptDate = '';
        this.state.data.map((item) => {
            if (item.value >= 0) {
                total_income += item.value;
            }
            else {
                total_outcome -= item.value;
            }
            if (item.date.toString() !== temptDate)
            {
                temptDate = item.date.toString();
                if (itemArr.length > 0)
                {
                    modifiedData.push(itemArr.slice(0));
                }
                while (itemArr.length) { itemArr.pop()};
                itemArr.push(item);
            }
            else {
                itemArr.push(item);
            }
        });
        modifiedData.push(itemArr);
        let lengthItem = modifiedData.length;
        if (this.state.data.length > 0)    
        {
            return (
                <ScrollView style={styles.list}>
                    <MonthStatus month={Number(this.props.time.substr(4, 2))} year={Number(this.props.time.substr(0, 4))} income={total_income} outcome={total_outcome} navigation={navigation}/>
                    {                         
                        modifiedData.map((item, i) =>
                    <DayStatus key={i} data={item} navigation={navigation} updateUI={this.props.updateUI} verticalLine={i + 1 === lengthItem ? false : true}/>)
                    }
                </ScrollView>    
            );
        }
        else{
            return (
                <View style={styles.container}>
                    <Text style={styles.noDataTitle}>Không có dữ liệu</Text>
                    <Text style={styles.noDataSubTitle}>Chạm <Text style={{fontSize: 22}}>+</Text> để thêm</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        padding: 0,
        backgroundColor:'#dcdcdc'
    },
    row: {
        flexDirection: 'row',
        height: 100
    },
    headerButton: {
        padding: 4,
    },
    image: {
        height: 100
    },
    title: {
        fontSize: 20
    },
    floatingActionButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2db84c',
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',        
        bottom: 30,
    },
    noDataTitle: {
        fontSize: 26,
        fontFamily: 'Roboto-Light',
        color: 'black',
    },
    noDataSubTitle: {
        marginTop: 5,
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        color: 'gray',
    }
});

export default MonthContainer;