// Component HeaderIconButton thể hiện bút bấm trên phần tiêu đề của các màn hình
// chỉ chứa icon không có text đi kèm, truyền vào tên Icon (liên quan react-native-
// vector-icon) qua thuộc tính name, kích thước icon (thuộc tính size), màu của
// icon (thuộc tính tintColor)
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class HeaderIconButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Icon name={this.props.name} size={this.props.size} color={this.props.tintColor}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default HeaderIconButton;