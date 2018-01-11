import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Button,
    ScrollView,
    Dimensions,

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import CurrentMoney from './../components/CurrentMoney'
import MonthStatus from './../components/MonthStatus'
import DayStatus from './../components/DayStatus'
import HeaderIconButton from './../components/HeaderIconButton'
import MonthContainer from './MonthContainer'
import {TabNavigator  } from 'react-navigation'
import DBService from './../service/DBService'
import Platform from './../utils/Platform'

const getCurrentRouteName = (navigationState) => {
    if (!navigationState) return null;
    const route = navigationState.routes[navigationState.index];
    if (route.routes) return getCurrentRouteName(route);
    return route.routeName;
};

class HomeScreen extends React.Component {
    static navigatorStyle = {
        orientation: 'portrait'

    };
    static navigationOptions = ({navigation}) => ({
            headerTitle: (
                <CurrentMoney value={navigation.state.params && navigation.state.params.money
                    ? navigation.state.params.money : 0} color='white'/>
            ),
            headerStyle:{
                backgroundColor:'#2db84c',
            },
            headerTitleStyle: {alignSelf: 'center'},
            headerTintColor:'white',
            headerLeft: (<HeaderIconButton icon='calendar-check-o' size={22} tintColor='white' onPress={() => {
                navigation.navigate("Plans", {updateUI: navigation.state.params.updateCurrentUI});
            }}/>),
            headerRight: <View/>,
        });
    
    constructor(props) {
        super(props);

        this.tabs = this.tabs.bind(this);
        this.tab = this.tab.bind(this);
        this.generateArrayMonths = this.generateArrayMonths.bind(this);
        this.formatRightMonths = this.formatRightMonths.bind(this);

        let today = new Date();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();
        this.state = {
            rerendered: true,
            month: mm,
            year: yyyy,
            routes: this.generateArrayMonths(mm, yyyy),
            reload: true,
        };
    }

    componentDidMount() {
        const {setParams} = this.props.navigation;
        setParams({
            money: DBService.getMoney(),
            updateCurrentUI: this.updateCurrentUI.bind(this)
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
                    money: DBService.getMoney(),
                });
            }
        }
    }

    generateArrayMonths(month, year)
    {
        return [this.formatRightMonths(month - 2, year), this.formatRightMonths(month - 1, year), this.formatRightMonths(month, year), this.formatRightMonths(month + 1, year), this.formatRightMonths(month + 2, year)];
    }

    shouldComponentUpdate()
    {
        return true;
    }

    updateUI()
    {
        this.setState({reload: !this.state.reload});
    }

    updateCurrentUI()
    {
        this.setState({reload: !this.state.reload});
        const {setParams} = this.props.navigation;
        const {params} = this.props.navigation.state;
        let money = DBService.getMoney();
        if (params && params.money)
        {
            if (params.money !== money)
            {
                setParams({
                    money: DBService.getMoney(),
                });
            }
        }
    }

    componentDidUpdate()
    {
        if (!this.state.rerendered)
        {
            this.Tabs = TabNavigator(this.tabs(this.state.routes), {
            tabBarOptions: {
                'lazy': true,
                scrollEnabled: true,        
                style: {
                    backgroundColor: '#2db84c',
                },
                labelStyle: {
                    fontSize: 16,
                },
            },
            initialRouteName: (this.state.year * 100 + this.state.month).toString()});
            initialRouteParams: { time: (this.state.year * 100 + this.state.month).toString()}
            this.setState({rerendered: true});
        }
    }

    componentWillMount()
    {
        this.Tabs = TabNavigator(this.tabs(this.state.routes), {
            tabBarOptions: {
                'lazy': true,
                scrollEnabled: true,        
                style: {
                    backgroundColor: '#2db84c',
                },
                labelStyle: {
                    fontSize: 16,
                },
            },
            initialRouteName: (this.state.year * 100 + this.state.month).toString(),
            initialRouteParams: { time: (this.state.year * 100 + this.state.month).toString()}
            
        });
    }

    render() {
        const Tabs = this.Tabs;
        let {params} = this.props.navigation.state;
        return (
            <View style={{flex: 1}}>
                <Tabs onNavigationStateChange={(prevState, currentState) => {
                    
                    const currentName = getCurrentRouteName(currentState);
                    const prevName = getCurrentRouteName(prevState);
                    if (prevName !== currentName)
                    {
                        const year = Number(currentName.substr(0, 4));
                        const month = Number(currentName.substr(4, 2));
                        this.setState({rerendered: false, month: month, year: year, routes: this.generateArrayMonths(month, year)});
                    }
                }} screenProps={{time: (this.state.year * 100 + this.state.month).toString(), navigation : this.props.navigation}}/>
                <TouchableOpacity style={styles.floatingActionButton} onPress={()=>{
                    this.props.navigation.navigate('AddDayDetail', { navigation: this.props.navigation, updateUI: this.updateUI.bind(this)});
                }}>
                        <Icon name='plus' size={22} color='white'/>                                                                                     
                </TouchableOpacity>
            </View>
        );
    }

    

    formatRightMonths(month, year)
    {
        if (month < 0)
        {
            return {m: 12 + month - 1, y: year - 1}
        }
        else if (month > 12)
        {
            return {m: month - 12, y: year + 1}
        }
        else if (month === 0)
        {
            return {m: 12, y: year - 1}
        }
        return {m: month, y: year};
    }

    tabs(times) {
        return times.reduce((routes, time) => {
            routes[(time.y * 100 + time.m).toString()] = this.tab(time);
    
            return routes;
        }, {});
    }

    tab(time) {
        const k = 10;
        const label = (time.m < 9 ? '0' + time.m+ "/" + time.y : time.m+ "/" + time.y);
        const time_id = (time.y * 100 + time.m).toString();
        return {
            screen: props => <MonthContainer time={time_id} navigation={this.props.navigation} updateUI={this.updateUI.bind(this)}/>,
            navigationOptions: {
                title: label,
            }
        }        
    }
}

const styles = StyleSheet.create({
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
        bottom: 20,
    },

});

export default HomeScreen;

