import {Text, View, TextInput, TouchableOpacity, ToastAndroid, AsyncStorage } from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../configs/Constants';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import styles from '../../assets/styles/styleLogin';
import axios  from 'axios';
const String = Constants.string;
const Colors = Constants.colors;
import { StackActions } from '@react-navigation/native';
function LoginScreens({navigation}) {

    const [username, onChangeUsername] = useState('');
    const [password, onChangePwd] = useState('');

    const checkLogin = async () => {
        if(username.length === 0 || password === 0) {
            ToastAndroid.show("Vui lòng nhập tài khoản/mật khẩu", ToastAndroid.SHORT);
        } else {
            await axios.post('https://drugbank-vn.herokuapp.com/api/account/login', {
                username: username,
                password: password
            })
                .then(function (response) {
                    if(response.data.status === true) {
                        ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
                        navigation.dispatch(
                            StackActions.replace('Main', response.data)
                        )
                    } else {
                        ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
                    }

                })
                .catch(function (error) {
                    ToastAndroid.show("Lỗi đăng nhập"+error.toString(), ToastAndroid.SHORT);
                });
        }
    }

    return (
        <LinearGradient colors={[Colors.bg_start, Colors.bg_end]} style={styles.container}>
            <View style={styles.header}><Logo/></View>
            <View style={styles.section}>
                <Text style={styles.text_section}>{String.value_text_title_login}</Text>
                <Text style={styles.text_section}>{String.value_text_login}</Text>
                <View style={styles.layout_text_input}>
                    <TextInput style={styles.text_input_style} placeholder={String.value_input_user}
                               placeholderTextColor={Colors.color_text} onChangeText={username => onChangeUsername(username)}
                               value={username}/>
                    <TextInput style={styles.text_input_style} placeholder={String.value_input_pwd}
                               placeholderTextColor={Colors.color_text} secureTextEntry={true}
                               onChangeText={password => onChangePwd(password)} value={password}/>
                </View>
                <Button title={String.value_text_title_login} onPress={()=> checkLogin()}/>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.text_forget}>{String.value_forget_pwd}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <View>
                        <Text style={[styles.text_forget, {color: Colors.color_forget}]}>
                            {String.value_text_title_register}
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text_forget}>
                    {String.value_string_register}
                </Text>
            </View>
        </LinearGradient>
    );
}

export default LoginScreens;
