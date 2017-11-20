//component plandetail thể hiện thông tin chi tiết của plan:
//1 label hiển thị tên của mục tiêu
//thanh progressbar thể hiện tiến độ của mục tiêu
//1 label thể hiện số tiền cần phải có để hoàn thành mục tiêu
//1 label thể hiện số tiền hiện tại
//% tiến độ của thanh progressbar được tính bằng tỉ sô phần trăm của số tiền hiện có hiện tại và số tiền cần để đạt được mục tiêu
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput
} from 'react-native';



import Icon from 'react-native-vector-icons/FontAwesome';
class AndPanel extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
        NamePlan:'',
        MoneyPlan:'',
      };
    }
    updateNamePlan=(text)=>{
        this.setState({NamePlan:text})
    }
    updateMoneyPlan=(text)=>{
        this.setState({MoneyPlan:text})
    }
	render(){
		return(
			<View style={styles.container}>
                <Text>
                    Name Plan
                    <TextInput style={styles.input} 
                    playholder='Name Plan'
                    />
                </Text>
			</View>
		)
	}

}
	const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    image:{
        alignSelf: 'center',        
    },
    text:{
        alignSelf: 'center',
        color:'white',
        marginLeft:5,
        fontSize: 32,
    }, 
    textsup:{
        alignSelf: 'center',
        color:'white',
        marginLeft:5,
        fontSize: 20,
    },
    input:{
        margin: 15,
        height:40,
        borderColor: 'gray',
        borderWidth: 1
    }

});
export default AndPanel;