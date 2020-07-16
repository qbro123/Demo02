import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Constants from '../configs/Constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Api = Constants.api;
const Colors = Constants.colors;
const Position = Constants.position;
const Fonts = Constants.font;

export default function ItemAccount(props) {
    return(
        <TouchableOpacity
            onPress={props.onPress}>
            <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingVertical: 10}}>
                <View style={{flexDirection: 'row', alignItems: Position.center}}>
                    <Text style={{color: Colors.color_text, fontFamily: Fonts.medium, fontSize: 16}}>{props.title}</Text>
                </View>
                <View style={{backgroundColor: Colors.bg_start,
                    width: 24,
                    height: 24,
                    marginRight: 10,
                    justifyContent: Position.center,
                    alignItems: Position.center,
                    borderRadius: 24 / 2,}}>
                    <Icon color={Colors.color_forget} size={24} name={'chevron-right'}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}
