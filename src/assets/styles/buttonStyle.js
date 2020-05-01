import React from 'react';
import {StyleSheet} from 'react-native';
import Constants from '../../configs/Constants';
const Size = Constants.size;
const Position = Constants.position;
const Fonts = Constants.font;
const Colors = Constants.colors;
const styles = StyleSheet.create({
    button_style: {
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 20,
        height: Size.button_height,
        width: Size.button_width,
        justifyContent: Position.center,
        borderRadius: 10,
    },
    style_text_button: {
        fontFamily: Fonts.regular,
        fontSize: Size.button_text,
        color: Colors.color_text,
        textAlign: Position.center,
    },
});


export default styles;
