// Component CategoryContainer thể hiện một đối tượng category loại thu chi
// hình ảnh đại diện được truyền vào qua thuộc tính image
// tên loại category tương ứng truyền vào qua thuộc tính title
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import categories from './../model/Categories'

class CategoryContainer extends Component {
    render() {
        let selected = true;
        if (this.props.selected === undefined)
        {
            selected = false;
        }

        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <View style={styles.row}>
                    <View  style={{flex: 7, flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={styles.image} source={categories[this.props.id - 1].image}/>
                        <Text style={styles.text}>{categories[this.props.id - 1].title}</Text>
                    </View>
                {this.props.selected === true ? <View style={{flex: 1}}><Icon name='check' size={22} color='#2db84c'/></View> : <View style={{flex: 1}}/>}                    
                </View>
                <View style={styles.mainSeparator}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        flexDirection:'column',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: 'white',
    },
    row: {
        margin: 10,
        height: 'auto',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 'auto'
    },
    mainSeparator: {
        backgroundColor: 'lightgray',
        height: 1,
    },
    image:{
        height: 30,
        width: 30,
    },
    text:{
        fontFamily: "Roboto-Light",
        marginLeft:20,
        fontSize: 22,
        color: 'black',
        flex: 6,
    },
});

export default CategoryContainer;