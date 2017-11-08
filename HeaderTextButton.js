import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';

class HeaderTextButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        fontSize: 14,
        color: 'black'
    }
});

export default HeaderTextButton;