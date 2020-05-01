import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../configs/Constants';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import styles from '../../assets/styles/styleLogin';

const String = Constants.string;
const Colors = Constants.colors;
import { StackActions } from '@react-navigation/native';
function LoginScreens({navigation}) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePwd] = useState('');
    return (
        <LinearGradient colors={[Colors.bg_start, Colors.bg_end]} style={styles.container}>
            <View style={styles.header}><Logo/></View>
            <View style={styles.section}>
                <Text style={styles.text_section}>{String.value_text_title_login}</Text>
                <Text style={styles.text_section}>{String.value_text_login}</Text>
                <View style={styles.layout_text_input}>
                    <TextInput style={styles.text_input_style} placeholder={String.value_input_user}
                               placeholderTextColor={Colors.color_text} onChangeText={email => onChangeEmail(email)}
                               value={email}/>
                    <TextInput style={styles.text_input_style} placeholder={String.value_input_pwd}
                               placeholderTextColor={Colors.color_text} secureTextEntry={true}
                               onChangeText={password => onChangePwd(password)} value={password}/>
                </View>
                <Button title={String.value_text_title_login} onPress={
                    () =>navigation.dispatch(
                    StackActions.replace('Main')
                )}/>
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
