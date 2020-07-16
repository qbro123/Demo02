import React, {useEffect} from 'react';
import {Alert, Image, ScrollView, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderTab from '../../components/HeaderTab';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ItemAccount from '../../components/ItemAccount';
import style from '../../assets/styles/accountStyle';
import Constants from '../../configs/Constants';
const Colors = Constants.colors;
const Position = Constants.position;
const String = Constants.string;
const Api = Constants.api;
import { StackActions } from '@react-navigation/native';

function AccountTab({route, navigation}) {
    const data = route.params;

    const getLoginOut = () => {
        navigation.dispatch(
            StackActions.replace('Login')
        )
    }

    return (
        <LinearGradient style={{flex: 1}} colors={[Colors.bg_start, Colors.bg_end]}>
            <HeaderTab visible={false} icon={'md-search'} title={String.value_text_account}/>
            <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
                <View style={style.container_item}>
                    <View style={{flexDirection: 'column', justifyContent: Position.center}}>
                        <Text style={[style.text_item, {fontSize: 20}]}>{data.fullname}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{backgroundColor: Colors.bg_start,
                                width: 30,
                                height: 30,
                                justifyContent: Position.center,
                                alignItems: Position.center,
                                borderRadius: 30 / 2,}}>
                                <Icon color={Colors.color_forget} size={24} name={'email-outline'}/>
                            </View>
                            <Text style={[style.text_item, {marginHorizontal: 10}]}>{data.email}</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={{uri: `${Api.url_upload}${data.image}`}} style={style.image_account}/>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={style.container_item}>
                        <View style={{flexDirection: 'row', alignItems: Position.center}}>
                            <View style={{backgroundColor: Colors.bg_start,
                                width: 30,
                                height: 30,
                                justifyContent: Position.center,
                                alignItems: Position.center,
                                borderRadius: 30 / 2,}}>
                                <Icon color={Colors.color_forget} size={24} name={'phone'}/>
                            </View>
                            <Text style={[style.text_item, {marginHorizontal: 10}]}>{String.value_phone}</Text>
                        </View>
                        <View>
                            <Text style={style.text_item}>{data.phone}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={style.container_item}>
                        <View style={{flexDirection: 'row', alignItems: Position.center}}>
                            <View style={{backgroundColor: Colors.bg_start,
                                width: 30,
                                height: 30,
                                justifyContent: Position.center,
                                alignItems: Position.center,
                                borderRadius: 30 / 2,}}>
                                <Icon color={Colors.color_forget} size={24} name={'account-circle'}/>
                            </View>
                            <Text style={[style.text_item, {marginHorizontal: 10}]}>{String.value_name_account}</Text>
                        </View>
                        <View>
                            <Text style={style.text_item}>{data.username}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={style.line}/>
                <ItemAccount title={String.value_change_information}
                             onPress={() => Alert.alert(String.value_change_information)}/>
                <View style={style.line}/>
                <ItemAccount title={String.value_change_pass} onPress={() => Alert.alert(String.value_change_pass)}/>
                <View style={style.line}/>
                <ItemAccount title={String.value_history_favorite}
                             onPress={() => Alert.alert(String.value_history_favorite)}/>
                <View style={style.line}/>
                <ItemAccount title={String.value_support} onPress={() => Alert.alert(String.value_support)}/>
                <View style={style.line}/>
                <ItemAccount title={String.value_introduce} onPress={() => Alert.alert(String.value_introduce)}/>
                <View style={style.line}/>
                <ItemAccount title={String.value_login_out} onPress={() => getLoginOut()}/>
                <View style={style.container_item}>
                    <View style={{flexDirection: 'row', alignItems: Position.center}}>
                        <Text style={style.text_item}>{String.value_information_app}</Text>
                    </View>
                    <View>
                        <Text style={style.text_item}>{String.value_text_title}</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'space-between', alignItems: Position.center, flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', alignItems: Position.center}}>
                        <Text style={style.text_item}>{String.value_version_app}</Text>
                    </View>
                    <View>
                        <Text style={style.text_item}>{String.value_version_app_demo}</Text>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}


export default AccountTab;
