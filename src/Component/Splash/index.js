import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View, Platform} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Styles from '../../Styles';
import StatusBar from '../Statusbar';
// import { connect } from 'react-redux';

class Splash extends Component {
    constructor(){
        super()
        this.state = {
            welcomeView: 'Welcome to Appiness'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.navigate('Login')
        }, 2000)
    }
    render(){
        const { welcomeView } = this.state;
        return(
            <SafeAreaView>
                <StatusBar/>
                <View style={Styles.SplashTextView}>
                    <Text style={Styles.SplashText}>{`${welcomeView}`}</Text>
                </View>
            </SafeAreaView>
        )
    }
}

Splash.propTypes = {
    welcomeView: PropTypes.string
}

const mapStateToProps = ( state ) => {
    return{
        
    }
}

export default (Splash);