import React, { Component } from 'react';
import PropsType from 'prop-types';
import {
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
    View,
    Text
}from 'react-native';
import { connect } from 'react-redux';
import StatusBar from '../Statusbar';
import { login } from '../../Redux/action/authentication';
import styles from '../../Styles';

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            password: ''
        }
    }
    title(){
        return(
            <Text style={styles.SplashText} >Continue to login</Text>
        )
    }
    async onPress(){
        await this.props.login(this.state.username, this.state.password);
        // this.props.navigation.navigate('Dashboard')
    }
    _renderContainer(){
        const { username, password } = this.state;
        const { isAuthenticated } = this.props;
        if(isAuthenticated){
            this.props.navigation.navigate('Dashboard')
        }
        return(
            <View style={styles.loginContent}>
                <View>
                    <TextInput
                        style={styles.userInput}
                        keyboardType={'email-address'}
                        placeholder={'username or email'}
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text)=>{this.setState({username: text})}}
                        value={username}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.userInput}
                        placeholder={'password'}
                        underlineColorAndroid={'transparent'}
                        onChangeText={(text)=>{this.setState({password: text})}}
                        value={password}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity  
                    activeOpacity={0.6}
                    style={styles.loginButtonView}
                    onPress={()=>{this.onPress()}}
                    >
                    <Text style={styles.loginButtonText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    render(){
        return(
            <KeyboardAvoidingView>
                <StatusBar/>
                <View style={styles.loginContainer}>
                    {this.title()}
                    {this._renderContainer()}
                </View>
            </KeyboardAvoidingView>
        )
    }
}

Login.propsType = {
    username: PropsType.string,
    password: PropsType.string,
    Auth: PropsType.object.isRequired
}
const mapStateToProps = (state) => {
    return{
        isAuthenticated: state.Auth.isAuthenticated,
        userDatails: state.Auth.userDatails
    }
}

export default connect(mapStateToProps, {
    login
})(Login);