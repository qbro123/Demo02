import {Text, View, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import HeaderTab from '../components/HeaderTab';
import styles from '../assets/styles/styleDetailsNotify';
import Constants from '../configs/Constants';
const Colors = Constants.colors;
function DetailsNotificationScreens({route, navigation}) {

    const data = route.params;
    return (
        <LinearGradient colors={[Colors.bg_start, Colors.bg_end]} style={styles.container}>
            <HeaderTab visible={true} title={'Chi tiết'} onPress={() => navigation.goBack()} icon="md-share"/>
            <ScrollView style={{flex: 1}}>
                <View style={{marginHorizontal: 10}}>
                    <Text style={styles.name_news}>{data.tentin}</Text>
                    <Text style={styles.written}>{data.nguoidang} || {data.ngaydang}</Text>
                    <Image style={styles.image} resizeMode={'contain'} source={{ uri: `https://drugbank-vn.herokuapp.com/uploads/${data.hinhanh}`}}/>
                    <Text style={styles.content}>{data.noidung}</Text>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

export default DetailsNotificationScreens;
