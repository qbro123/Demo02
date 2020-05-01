import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../assets/styles/buttonStyle';
import Constants from '../configs/Constants';
import LinearGradient from "react-native-linear-gradient";
const String = Constants.string;
const Colors = Constants.colors;
export default function Button(props) {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <LinearGradient colors={[Colors.bg_button_start, Colors.bg_button_end]} style={styles.button_style}>
                <View><Text style={styles.style_text_button}>{props.title}</Text></View>
            </LinearGradient>
        </TouchableOpacity>
    )
}
