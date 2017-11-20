import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Picker
} from 'react-native';

export default class PriorityPicker{
    constructor(props) {
      super(props);
      this.state = {};
    }
    return(
        <Picker selectedValue={this.props.priority}
        onValueChange={this.props.update}>
            <Picker.Item label= "Low" value="low"/>
            <Picker.Item label= "Nomal" value="Nomal"/>
            <Picker.Item label= "Height" value="Height"/>
        </Picker>
    );
}