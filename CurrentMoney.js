import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';

class CurrentMoney extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('./get-money.png')}/>
                <Text style={styles.text}> {this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignSelf: 'center',
    },
    image:{
        width:'60',
        height:'60',
    },
    text:{
        alignSelf: 'center',
        marginLeft:5,
        color:'white',
        fontSize: 32,
    }
});

export default CurrentMoney;