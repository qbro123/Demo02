import React from 'react';
import {StyleSheet} from 'react-native';
import Constants from '../../configs/Constants';

const Colors = Constants.colors;
const Fonts = Constants.font;
const Position = Constants.position;
const Size = Constants.size;
const style = StyleSheet.create({
    container_item: {
        flexDirection: 'row',
        alignItems: Position.center,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    text_item: {
        color: Colors.color_text,
        fontFamily: Fonts.medium,
        fontSize: 16,
    },
    image_account: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },
    line: {
        height: Size.height_line,
        width: Size.match_parent,
        backgroundColor: Colors.bg_start
    },
});
export default style;
