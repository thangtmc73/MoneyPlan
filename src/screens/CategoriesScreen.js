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
} from 'react-native';

import CategoriesList from './CategoriesList'
import {TabNavigator  } from 'react-navigation';
import categories from './../model/Categories'

const Navigator = ( category_id, navigation ) => {
    const navigatorConfigs = {
        tabBarOptions: {
            'lazy': true,
            scrollEnabled: true,        
            labelStyle: {
                fontSize: 16,
            },
            style: {
                backgroundColor: '#2db84c',
            },
        },
        initialRouteName: (categories.filter(item => item.id === category_id)[0].type_id) === 1 ? 'Outcome' : 'Income'
    };
    const CustomNavigator = TabNavigator({
        Outcome: {
            screen: props => <CategoriesList type={1} category_id={category_id} navigation={navigation}/>,
            navigationOptions: {
            title: "Chi tiêu",
            }
        },
        Income: {
            screen: props => <CategoriesList type={2} category_id={category_id} navigation={navigation}/>,
            navigationOptions: {
                title: "Thu nhập",
            }
        }}, navigatorConfigs);
    return <CustomNavigator screenProps={{}}/>;
};

class CategoriesScreen extends React.Component {
    static navigationOptions = ({
            title: "Chọn nhóm",
        });
    
    constructor(props) {
        super(props);
    }

    render() {
        const { params } = this.props.navigation.state;
        
        // 

        return (
            <View style={{flex: 1}}>
                {Navigator(params.category_id + 1, this.props.navigation)}
            </View>
        );
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

export default CategoriesScreen;