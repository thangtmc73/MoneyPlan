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
    TextInput,
    Picker,Item
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderIconButton from './../components/HeaderIconButton'
import AndPanel from './../components/AndPanel'

class ThemKeHoach extends Component{
    static navigationOptions = {
        headerStyle:{
            backgroundColor:'#2db84c',
        },
        headerTitleStyle: {alignSelf: 'center'},
        headerTintColor:'white',
        headerLeft: <HeaderIconButton name='bars' size={22} tintColor='white' onPress={() => {

        }}/>,
        headerRight: <HeaderIconButton name='bell-o' size={22} tintColor='white' onPress={() => {

        }}/>,
    };

	constructor(props) {
        super(props);
    }
	render(){
		
		return (
			<View style={styles.container}>
				<Text style={ styles.text }>
                    Thêm dự định
                </Text>
				<View style={marginLeft= 10,marginRight= 10} >				
					<Text style={styles.textdetail }>
                    Name Plan
                	</Text>
                	<TextInput style={styles.input} Placeholder='Name Plan'/>
                	<Text style={styles.textdetail }>
                    	Cost
                	</Text>
                    <TextInput style={styles.input} Placeholder='VND'/>
                    <Picker textAlign=  'right'  >
                    	<Picker.Item value="Cao" label="Cao"/>
                    	<Item value="Tb" label="Trung bình"/>
                    	<Item value="thap" label="Thấp"/>
                    </Picker>

                </View>
                <View style={marginLeft= 10,marginRight= 10}>
                	<Button style={styles.button} color="green"	title="Thêm"/>
				</View>
			</View>
			);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 'auto',
    },
    list: {
        padding: 0,
        backgroundColor:'#dcdcdc'
    },
	input:{
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
        margin: 4,

	},    
	text:{
        alignSelf: 'center',
        color:'orange',
        fontSize: 32,
    },
    textdetail:{
    	color:'#800080cc',
    	fontSize: 20,
    	marginLeft: 10
    },
    button:{
    	fontSize: 25
    }

});
export default ThemKeHoach;