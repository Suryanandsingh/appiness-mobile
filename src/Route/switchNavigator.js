import { 
    createAppContainer, 
    createSwitchNavigator 
} from 'react-navigation';
import Splash from '../Component/Splash';
import Login from '../Component/Authentication/login';
import Dashboard from './routing';
  
const appSwitchNavigator = createSwitchNavigator({
    Splash:Splash,
    Login: Login,
    Dashboard: Dashboard
}, {
    initialRouteName:'Splash'
})

export default createAppContainer(appSwitchNavigator);
  