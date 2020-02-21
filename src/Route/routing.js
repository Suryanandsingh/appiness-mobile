import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import EmployeeList from '../Component/Dashboard/employeeList';

const routing = createStackNavigator({
    EmployeeList:{
        screen: EmployeeList,
        navigationOptions:{
            headerTitle: 'Employee details',
        }
    }
}, {
    initialRouteName: 'EmployeeList'
})

export default createAppContainer(routing);