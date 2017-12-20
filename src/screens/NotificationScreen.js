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

class NotificationScreen extends React.Component {
    static navigationOptions = {
        headerTitle: (
            <Text>Thông báo</Text>
        ),
        headerStyle:{
            backgroundColor:'#2db84c',
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
    },
});

export default NotificationScreen;