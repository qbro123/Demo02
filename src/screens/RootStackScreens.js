import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Splash from './AuthorizationStack/SplashScreens';
import Login from './AuthorizationStack/LoginScreens';
import Register from './AuthorizationStack/RegisterScreens';
import BottomStackTab from './BottomStackTab';
import DetailsNotificationScreens from './DetailsNotificationScreens';
import DetailsPillScreens from './DetailsPillScreens';

const rootStack = createStackNavigator();

const RootStackScreens = ({navigation}) => (
    <rootStack.Navigator headerMode='none'>
            {/*Authorization*/}
        <rootStack.Screen name="Splash" component={Splash}/>
        <rootStack.Screen name="Login" component={Login}/>
        <rootStack.Screen name="Register" component={Register}/>
            {/*MainStack*/}
        <rootStack.Screen name="Main" component={BottomStackTab}/>
        <rootStack.Screen name="DetailsNotify" component={DetailsNotificationScreens}/>
        <rootStack.Screen name="DetailsPill" component={DetailsPillScreens}/>
    </rootStack.Navigator>
);

export default RootStackScreens;
