import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


class CurrentMoney extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('./GetMoney.png')}/>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignSelf: 'center',
        justifyContent: 'flex-start',
    },
    image:{
        alignSelf: 'center',        
    },
    text:{
        alignSelf: 'center',
        color:'white',
        marginLeft:5,
        fontSize: 32,
    }
});

export default CurrentMoney;