// Component CurrentMoney thể hiện số tiền hiện tại đang có cùng với biểu tượng
// tờ tiền đi kèm, được hiện lên trên phần tiêu đề của màn hình HomeScreen
// giá trị số tiền hiện tại truyền vào thuộc tính name
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import formatter from './../utils/formatter'

class CurrentMoney extends Component {
    render() {
        let defaultColor = (this.props.color === undefined);
        let textColor = 'white';
        if (!defaultColor)
        {
            textColor = this.props.color;
        }
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('./../../images/GetMoney.png')}/>
                <Text style={[styles.text, {color:textColor}]}>{formatter.formatNumberIntoCurrency(this.props.value)} đ</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignSelf: 'center',
    },
    image:{
        alignSelf: 'center',        
    },
    text:{
        fontFamily: "Roboto-Regular",
        textAlign:'center',
        alignSelf: 'center',
        marginLeft:5,
        fontSize: 22,
    },
    white: {
        color:'white'
    }
});

export default CurrentMoney;