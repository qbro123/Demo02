import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Constants from '../configs/Constants';
import styles from '../assets/styles/itemPillStyle';
const Api = Constants.api;

export default function ItemPill(props) {
    return(
        <TouchableOpacity
            onPress={props.onPress}>
            <View>
                <View style={styles.container}>
                    <View style={styles.kind}>
                        <Text numberOfLines={1} style={styles.text_category}>{props.category}</Text>
                    </View>
                    <Image style={styles.style_image} source={{uri: `${Api.url_upload}${props.image}`}}/>
                    <View style={styles.name_pill}>
                        <Text numberOfLines={1} style={styles.text_name_pill}>{props.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
