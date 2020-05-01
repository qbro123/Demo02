import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../assets/styles/logoStyle';
import Constants from '../configs/Constants';
const String = Constants.string;

export default function Logo() {
    return(
        <View>
            <Image source={require('../assets/images/ic_logo.png')} style={styles.images_logo}/>
            <Text style={styles.text_logo}>{String.value_text_title}</Text>
        </View>
    )
}
