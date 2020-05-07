import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../assets/styles/lineStyle';
import Constants from '../configs/Constants';

export default function Line(props) {
    return(
        <View style={[styles.container, props.style]}>
            <Text style={styles.text_name}>{props.name}</Text>
            <View style={styles.line}/>
        </View>
    )
}
