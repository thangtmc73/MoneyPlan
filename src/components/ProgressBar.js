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

class ProgressBar extends Component {
    render() {
        let value = this.props.value / 100;
        let color = this.props.color;
        return (
            <View style={styles.container}>
                <View style={[styles.progressBar]}>
                    <View style={[styles.passedValue, {backgroundColor:color}, {flex: value}]}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 'auto',
        width: 'auto',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    progressBar: {
        flex: 1,
        borderWidth:1,
        borderColor: 'black',
        height: 35,
        flexDirection: 'row',        
        width: 'auto',
        justifyContent: 'flex-start',
    },
    passedValue: {

    },
    value: {
        color:'black',
        fontSize:16
    },
});

export default ProgressBar;