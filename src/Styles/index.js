import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { BASE_COLOR } from '../Constant';
const {
    width,
    height
} = Dimensions.get('window')

export default StyleSheet.create({
    center: {
        flex: 1, 
        alignItems:'center',
        justifyContent:'center'
    },
    SplashTextView:{
        alignItems:'center',
        marginTop: height/2
    },
    SplashText:{
        textAlign:'center',
        fontSize:  width/13,
        color: BASE_COLOR,
        fontWeight:'700',
        letterSpacing: 1
    },
    loginContainer:{
        alignItems:'center',
        marginTop: height/3.3
    },
    loginContent:{
        backgroundColor:'#e6e6e6',
        alignItems:'center',
        width:'80%',
        margin: '10%',
        padding: '10%'
    },
    userInput:{
        backgroundColor:'#fff',
        width: width/1.5,
        marginVertical: '2%',
        padding: '3.5%',
        fontSize: 16
    },
    loginButtonView:{
        backgroundColor: BASE_COLOR,
        marginTop: '10%',
        padding: '5%',
        paddingHorizontal: '10%'
    },
    loginButtonText:{
        color: 'white',
        fontSize: 17,
        letterSpacing: 1
    },
    employeeDetailsContainer:{
        backgroundColor:'#e6e6e6',
        margin: '2%',
        padding: '2%'
    },
    employeeDetailsView:{
        flexDirection:'row',
    },
    employeeDetailsText:{
        width: '49%',
        fontSize: 16,
        letterSpacing: 1
    }
})