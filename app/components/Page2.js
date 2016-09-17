import React, { Component } from 'react'
import {  View, Text, Button, TouchableNativeFeedback, StyleSheet, Navigator  } from 'react-native'

import * as counterActions from '../actions/counterActions'

export default class Page2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { onIncrementClick, onDecrementClick, onValueIncrementClick } = this.props;

        return (
            <View>
                <Text style={{ fontSize: 50, paddingBottom: 50 }}>Page 2</Text>
                <TouchableNativeFeedback
                    onPress={this.gotoPage1.bind(this) }>
                    <View>
                        <Text>Go to page1</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={ onIncrementClick }>
                    <View>
                        <Text>Increment</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={ onDecrementClick }>
                    <View>
                        <Text>Decrement</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                    onPress={this.valueIncrement.bind(this) }>
                    <View>
                        <Text>Increment Value: 2</Text>
                    </View>
                </TouchableNativeFeedback>
                
            </View>
        )
    }

    valueIncrement(){
        this.props.onValueIncrementClick(2)        
    }

    gotoPage1() {
        this.props.navigator.push({
            id: 'page1',
            configureScene: Navigator.SceneConfigs.FloatFromBottom
        })
    }
}