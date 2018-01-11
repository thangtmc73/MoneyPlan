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
import DBService from './../service/DBService'

class PlansScreens extends React.Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: (
            <CurrentMoney value={navigation.state.params && navigation.state.params.money
                ? navigation.state.params.money : 0} color='black'/>),
        headerStyle:{
            backgroundColor:'white',
        },
        headerTitleStyle: {alignSelf: 'center'},
        headerTintColor:'black',
    });
    constructor(props) {
        super(props);
        this.state = {data: DBService.getAllPlans(), reload: false}
    }

    componentDidMount() {
        const {setParams} = this.props.navigation;
        setParams({
            money: DBService.getMoney()
        });
    }

    componentWillUpdate() {
        const {setParams} = this.props.navigation;
        const {params} = this.props.navigation.state;
        let money = DBService.getMoney();
        if (params && params.money)
        {
            if (params.money !== money)
            {
                setParams({
                    money: DBService.getMoney()
                });
            }
        }
    }

    updateUI()
    {
        this.setState({reload: true, data: DBService.getAllPlans()});
    }

    componentDidUpdate()
    {
        if (this.state.reload === true)
        {
            this.setState({reload: false});
            this.props.navigation.state.params.updateUI();
        }
    }

    render() {
        let today = new Date();
        return (
        <View style={styles.container}>
            <View style={styles.todayView}>
                <Text style={styles.todayText}>Hôm nay là ngày {today.getDate()}/{today.getMonth() + 1}/{today.getFullYear()}</Text>
            </View>
            {this.state.data.length > 0 ? (
            <ScrollView>
            { 
                this.state.data.map((item) =>
                    <PlanInfo id={item.id} key={item.id} subtitle={item.subtitle} passedValue={this.props.navigation.state.params.money} target={item.target} date={item.date} updateUI={this.updateUI.bind(this)} today={today}/>)
            }
            <View style={{height: 90}}/>
            </ScrollView>) : (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.noDataTitle}>Không có dữ liệu</Text>
                <Text style={styles.noDataSubTitle}>Chạm <Text style={{fontSize: 22}}>+</Text> để thêm</Text>
            </View>)}

            <TouchableOpacity style={styles.floatingActionButton} onPress={() => {
                this.props.navigation.navigate('AddPlanDetail', { navigation: this.props.navigation, updateUI: this.updateUI.bind(this)});
            }}>
                <Icon name='plus' size={22} color='white'/>                                                                                     
            </TouchableOpacity>
        </View>);
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
        justifyContent: 'center',
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
        alignItems: 'center',
        bottom: 30,
        right: 90,
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
    },
    todayView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    todayText: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        color: 'black',
        margin: 4,
    },
});

export default PlansScreens;