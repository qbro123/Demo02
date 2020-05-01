import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Splash from './RootStack/SplashScreens';
import Login from './RootStack/LoginScreens';
import Register from './RootStack/RegisterScreens';
import BottomStackTab from './BottomStackTab';

const rootStack = createStackNavigator();

const RootStackScreens = ({navigation}) => (
    <rootStack.Navigator headerMode='none'>
        <rootStack.Screen name="Splash" component={Splash}/>
        <rootStack.Screen name="Login" component={Login}/>
        <rootStack.Screen name="Register" component={Register}/>
        <rootStack.Screen name="Main" component={BottomStackTab}/>
    </rootStack.Navigator>
);

export default RootStackScreens;
