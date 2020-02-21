import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text
}from 'react-native';
import PropsType from 'prop-types';
import { connect } from 'react-redux';
import { autoLogout } from '../../Redux/action/authentication';
import { getEmployeeDeatils } from '../../Redux/action/dashboard';
import StatusBar from '../Statusbar';
import Styles from '../../Styles';

class EmployeeList extends Component{
    async componentDidMount(){
        await this.props.getEmployeeDeatils();
    }
    componentWillUnmount(){
        this.props.autoLogout();
    }
    _dataContent(key, value){
        return(
            <View style={Styles.employeeDetailsView}>
                <Text style={Styles.employeeDetailsText}>{key}</Text>
                <Text style={Styles.employeeDetailsText}>{value}</Text>
            </View>
        )
    }
    _renderContent(details){
        return details.map((data, index)=>{
            return(
                <View key={index} style={Styles.employeeDetailsContainer} >
                    {this._dataContent('Id', data.id)}
                    {this._dataContent('Name', data.name)}
                    {this._dataContent('Age', data.age)}
                    {this._dataContent('Gender', data.gender)}
                    {this._dataContent('Email', data.email)}
                    {this._dataContent('Phone No', data.phoneNo)}
                </View>
            )
        })
    }
    render(){
        const { employeeDetails } = this.props;
        return(
            <SafeAreaView>
                <StatusBar/>
                <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
                    {
                    employeeDetails?this._renderContent(employeeDetails):null
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

EmployeeList.propsType = {
    employeeDetails: PropsType.object.isRequired
}

const mapStateToProps = (state) =>{
    return{
        employeeDetails: state.Dashboard.employeeDetails,
    }
}

export default connect(mapStateToProps, {
    getEmployeeDeatils,
    autoLogout
})(EmployeeList);