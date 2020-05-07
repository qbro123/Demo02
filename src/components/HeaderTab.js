import React, {Component, useState,useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Constants from '../configs/Constants';
import Icon from 'react-native-vector-icons/Ionicons';

const String = Constants.string;
const Colors = Constants.colors;

export default function HeaderTab(props) {
    const [isVisible, setVisible] = useState(true);
    useEffect(() => {
        setVisible(props.visible);
    }, []);
    return (
        <View style={{
            flex: 0.08,
            flexDirection: 'row',
            borderBottomWidth: 1,
            backgroundColor: '#747474',
            borderBottomColor: '#747474',
        }}>
            {isVisible ?
                <View style={{ flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center'}}>
                    <TouchableOpacity onPress={props.onPress}>
                        <Icon name="ios-arrow-back" color={Constants.colors.color_text} size={20}
                              style={{marginHorizontal: 10}}/>
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'regular',
                        marginHorizontal: 15,
                        color: Constants.colors.color_text,
                    }}>{props.title}</Text>
                    <TouchableOpacity>
                        <Icon name={props.icon} color={Constants.colors.color_text} size={20}
                              style={{marginHorizontal: 10}}/>
                    </TouchableOpacity>
                </View>
                :
                <View style={{ flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center',}}>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'regular',
                        marginHorizontal: 15,
                        color: Constants.colors.color_text,
                    }}>{props.title}</Text>
                    <TouchableOpacity>
                        <Icon name={props.icon} color={Constants.colors.color_text} size={20}
                              style={{marginHorizontal: 10}}/>
                    </TouchableOpacity>
                </View>
            }
        </View>

    );
}
