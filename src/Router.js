import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
// import { Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import mainMap from './components/Map';
// import EmployeeList from './components/EmployeeList';
// import EmployeeCreate from './components/EmployeeCreate';



const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Scene>
                <Scene key="main">
                    {/* <Scene rightTitle="Add" onRight={() => Actions.employeeCreate()} key="employeeList" component={EmployeeList} title="Employee List" initial /> */}
                    <Scene key="mainMap" component={mainMap} title="Map" />
                </Scene>
            </Stack>
        </Router>
    );
}


export default RouterComponent;


