// Component DayDetail thể hiện chi tiết một sự kiện thu chi trong ngày
// bao gồm tên sự kiện thu chi (thuộc tính title), ghi chu (thuộc tính
// subtitle), số tiền thu chi (thuộc tính value)
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
} from 'react-native';

import formatter from './../utils/formatter'
import categories from './../model/Categories'

class DayDetail extends Component {
    render() {
        let colorStyle = categories[this.props.category_id].type_id === 2 ? styles.blue : styles.red;
        let {params} = this.props;
        const navigation = this.props.onPress;
        return (
            
            <TouchableOpacity style={styles.container} onPress={() => {
                this.props.navigation.navigate('DayDetail', {id: this.props.id, updateUI: this.props.updateUI});
            }}>
                <View style={styles.headerRow}>
                    <View style={styles.detailRowContainer}>
                        <Image style={styles.icon} source={categories[this.props.category_id].image}/>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{this.props.title}</Text>
                            <Text style={styles.subtitle}>{this.props.subtitle}</Text>
                        </View>
                    </View>
                    <Text style={[styles.value, colorStyle]}>{formatter.formatNumberIntoCurrency(this.props.value > 0 ? this.props.value : -this.props.value)} đ</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 'auto',
    },
    mainSeparator: {
        backgroundColor: 'lightgray',
        height: 1,
        marginLeft: 10,
        marginRight: 10,
    },
    headerRow: {
        marginTop:10,
        marginBottom:10,
        flexDirection: 'row',
        flex: 1,
        height: 'auto',
        justifyContent: 'space-between'
    },
    titleContainer: {
        marginLeft:10,
        height: 40,
        flexDirection: 'column',
        justifyContent:'center',
    },
    detailRowContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems:'center'
    },
    icon: {
        height: 30,
        width: 30,
        borderRadius:15,
    },
    title: {
        fontSize: 16,
        color:'black'
    },
    subtitle: {
        fontSize: 16,
    },
    value: {
        alignSelf: 'flex-end',
        padding: 10,
        fontSize: 16,
        color: 'black',
        fontFamily: 'Roboto-Medium'
    },
    red: {
        color: 'red'
    },
    blue: {
        color: '#039be5'
    }
});

export default DayDetail;