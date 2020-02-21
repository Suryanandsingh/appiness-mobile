import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';

export default class Statusbar extends Component{
    render(){
        if(Platform.OS === 'ios'){
            return null
        }else{
            return(
                <View>
                    <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent={true}/>
                </View>
            )
        }
    }
}