import {View, Text, ActivityIndicator} from 'react-native';
import React, { Component, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../configs/Constants';
import styles from '../../assets/styles/styleSplash';
import { StackActions } from '@react-navigation/native';

const String = Constants.string;
const Fonts = Constants.font;
const Colors = Constants.colors;
export default function SplashScreens ({navigation})  {
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(
                StackActions.replace('Login')
            );
        }, 3000);
    });
    return (

        <LinearGradient colors={['#676767', '#3d3e3e']} style={styles.container}>
            <View>
                <Text style={styles.text}>{String.value_text_title}</Text>
                <Text style={[styles.text, {fontSize: 20, fontFamily: Fonts.italic}]}>{String.value_text}</Text>
            </View>
            <ActivityIndicator style={{margin: 20}} size="small" color={Colors.color_text}/>
        </LinearGradient>
    );
};



