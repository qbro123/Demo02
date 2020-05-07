import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../assets/styles/titleStyle';
import Constants from '../configs/Constants';
import LinearGradient from "react-native-linear-gradient";
const String = Constants.string;
const Colors = Constants.colors;
export default function Button(props) {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10}}>
            <Text style={styles.text_title}>{props.title}</Text>
            <Text style={styles.text_title}>{props.details}</Text>
        </View>
    )
}
