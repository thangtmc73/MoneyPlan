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

import CategoryContainer from './../components/CategoryContainer'
import {TabNavigator  } from 'react-navigation';
import categories from './../model/Categories'

class CategoriesList extends React.Component {
    constructor(props){
        super(props);
        let typeCategory = this.props.type;

        this.state = {
            categoryList: categories.filter(item => item.type_id === typeCategory),
        };
        // 
        //                    

    }
    render() {
        let selectedId = this.props.category_id;
        let {navigation} = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                {this.state.categoryList.map((item) =>
                    <CategoryContainer key={item.id} id={item.id} selected={item.id === selectedId ? true : false} onPress={() => {
                        this.props.navigation.state.params.getReturnedData(item.id - 1);
                        this.props.navigation.goBack();
                    }}/>
                )}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
        backgroundColor: 'white',
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
});

export default CategoriesList;