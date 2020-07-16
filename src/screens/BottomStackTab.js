import React, {Component, useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTab from './BottomNavigationTab/HomeTab';
import PillTab from './BottomNavigationTab/PillTab';
import AccountTab from './BottomNavigationTab/AccountTab';
import CategoryTab from './BottomNavigationTab/CategoryTab';

const Tab = createMaterialBottomTabNavigator();

export default function BottomStackTab({route}) {
    return (
        <Tab.Navigator initialRouteName="Home" activeColor="#fcb368" abelStyle={{fontSize: 14}}
                       screenOptions={{tabBarColor: 'rgb(36,36,36)'}} >
            <Tab.Screen name="Home" component={HomeTab}
                        options={{ tabBarLabel: 'Trang Chủ', tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons name="home" color={focused ? '#fcb368' : '#d8d8d8'} size={26}/>),}}
            />
            <Tab.Screen name="Pill" component={PillTab}
                        options={{ tabBarLabel: 'Thuốc', tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons name="pill" color={focused ? '#fcb368' : '#d8d8d8'} size={26}/>),}}
            />
            <Tab.Screen name="Category" component={CategoryTab}
                        options={{ tabBarLabel: 'Danh mục', tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons name="menu" color={focused ? '#fcb368' : '#d8d8d8'} size={26}/>),}}
            />
            <Tab.Screen name="Account" component={AccountTab}
                        initialParams={route.params}
                        options={{ tabBarLabel: 'Tài khoản', tabBarIcon: ({focused}) => (
                        <MaterialCommunityIcons name="account" color={focused ? '#fcb368' : '#d8d8d8'} size={26}/>),}}
            />
        </Tab.Navigator>
    );
}
