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
import HeaderIconButton from './../components/HeaderIconButton'
import CurrentMoney from './../components/CurrentMoney'
import formatter from './../utils/formatter'

class PlansScreens extends React.Component {
    static navigationOptions = {
        headerTitle: (
            <CurrentMoney name={formatter.formatNumberIntoCurrency(1555000)} color='black'/>
        ),
        headerStyle:{
            backgroundColor:'white',
        },
        headerTitleStyle: {alignSelf: 'center'},
        headerTintColor:'white',
    };
    constructor(props) {
        super(props);
        this.states = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <PlanInfo title='Du lịch' subtitle='Nha Trang' passedValue='10000000000' target='120000' date='2017-11-14'/>
                    <PlanInfo title='Huỷ diệt Trái đất' subtitle='thích thì làm' passedValue='100000' target='150000' date='2017-11-17'/>
                    <PlanInfo title='Haiza' subtitle='haiza' passedValue='250000' target='200000' date='2017-11-14'/>
                    <PlanInfo title='Huỷ diệt Sao hoả' subtitle='thích thì làm' passedValue='100000' target='150000' date='2017-11-20'/>
                </ScrollView>
                <TouchableOpacity style={styles.floatingActionButton}>
                        <Icon name='plus' size={22} color='white'/>                                                                                     
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerNavigation: {
        flexDirection:'row',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        height: 'auto',
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
    floatingActionButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#2db84c',
        position: 'absolute',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',        
        bottom: 20,
        right: 20,
    },
});

export default PlansScreens;