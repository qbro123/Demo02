import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Constants from '../configs/Constants';
const Colors = Constants.colors;
const Fonts = Constants.font;
export default function ItemDetails(props) {
    return(
        <View style={styles.container}>
            <Text numberOfLines={2} style={styles.styles_text}>{props.name}</Text>
            <Text numberOfLines={3} style={[styles.styles_text, props.style]}>{props.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    styles_text:{
        color: Colors.color_text,
        fontSize: 14,
        fontFamily: Fonts.regular
    }
})
