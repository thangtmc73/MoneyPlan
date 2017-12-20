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
import MonthContainer from './MonthContainer'
import {TabNavigator  } from 'react-navigation';

const getCurrentRouteName = (navigationState) => {
    if (!navigationState) return null;
    const route = navigationState.routes[navigationState.index];
    if (route.routes) return getCurrentRouteName(route);
    return route.routeName;
};

class HomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
            headerTitle: (
                <CurrentMoney value={-1505500} color='white'/>
            ),
            headerStyle:{
                backgroundColor:'#2db84c',
            },
            headerTitleStyle: {alignSelf: 'center'},
            headerTintColor:'white',
            headerLeft: (<HeaderIconButton icon='paper-plane-o' size={22} tintColor='white' onPress={() => {
                navigation.navigate("Plans");
            }}/>),
            headerRight: <HeaderIconButton icon='bell-o' size={22} tintColor='white' onPress={() => {
                navigation.navigate("Notifications");
            }}/>,
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
        };
    }

    generateArrayMonths(month, year)
    {
        return [this.formatRightMonths(month - 2, year), this.formatRightMonths(month - 1, year), this.formatRightMonths(month, year), this.formatRightMonths(month + 1, year), this.formatRightMonths(month + 2, year)];
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
        const {navigate} = this.props.navigation;
        console.log({navigate});
        const Tabs = this.Tabs;

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
                }} screenProps={{time: (this.state.year * 100 + this.state.month).toString()}}/>
                <TouchableOpacity style={styles.floatingActionButton} onPress={()=>{
                    this.props.navigation.navigate('AddDayDetail');
                }}>
                        <Icon name='plus' size={22} color='white'/>                                                                                     
                </TouchableOpacity>
                <Text>{this.state.rerendered ? "true" : "false"}</Text>
            </View>
        );
    }

    

    formatRightMonths(month, year)
    {
        if (month <= 0)
        {
            return {m: 12 + month - 1, y: year - 1}
        }
        else if (month > 12)
        {
            return {m: month - 12, y: year + 1}
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
        const label = time.m+ "/" + time.y;
        return {
            screen: MonthContainer,
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
        bottom: 30,
    },

});

export default HomeScreen;

