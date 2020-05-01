import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../configs/Constants';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
// import styles from '../../assets/styles/styleLogin';
const Position = Constants.position;
const String = Constants.string;
const Colors = Constants.colors;
const Fonts = Constants.font;
const Size = Constants.size;
function RegisterScreens({navigation}) {
    const [fullName, onChangeFullName] = useState('');
    const [username, onChangeUsername] = useState('');
    const [password, onChangePwd] = useState('');
    const [rePwd, onChangRePwd] = useState('');
    return (
        <LinearGradient style={styles.container} colors={[Colors.bg_start, Colors.bg_end]}>
            <View style={styles.header}>
                <Logo/>
            </View>
            <View style={styles.section}>
                <Text style={styles.text_section}>Tạo tài khoản mới</Text>
                <View style={styles.layout_text_input}>
                    <TextInput style={styles.text_input_style} placeholder={String.value_text_fullname}
                               placeholderTextColor={Colors.color_text} onChangeText={fullName => onChangeFullName(fullName)}
                               value={fullName}/>
                    <TextInput style={styles.text_input_style} placeholder={String.value_input_user}
                               placeholderTextColor={Colors.color_text} onChangeText={username => onChangeUsername(username)}
                               value={username}/>
                    <TextInput style={styles.text_input_style} placeholder={String.value_input_pwd}
                               placeholderTextColor={Colors.color_text} onChangeText={password => onChangePwd(password)}
                               value={password}/>
                    <TextInput style={styles.text_input_style} placeholder={String.value_text_repass}
                               placeholderTextColor={Colors.color_text} onChangeText={rePwd => onChangRePwd(rePwd)}
                               value={rePwd}/>
                </View>
                <Button title={String.value_text_title_register} onPress={() => Alert.alert('sssss', 'ssssss')}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_forget}>
                    {String.value_string_login}
                </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View>
                        <Text style={[styles.text_forget, {color: Colors.color_forget}]}>
                            {String.value_text_title_login}
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>
        </LinearGradient>
    );
}
export default RegisterScreens;

const styles = StyleSheet.create({
    container: {
       flex: 1,
    },
    header: {
        flex: 1.5,
        justifyContent: Position.center,
        alignItems: Position.center,
    },
    section: {
        flex: 3,
        alignItems: Position.center
    },
    footer: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: Position.center,
        alignItems: Position.center,
    },
    text_forget: {
        fontFamily: Fonts.regular,
        color: Colors.color_text,
        fontSize: Size.button_text,
    },
    text_input_style: {
        height: 40,
        color: Colors.color_text,
        borderColor: Colors.line_input_text,
        fontSize: 18,
        paddingBottom: 1,
        borderBottomWidth: 1,
        fontFamily: Fonts.medium,
    },
    layout_text_input: {
        width: Size.match_parent,
        paddingHorizontal: 30,
        paddingTop: 20,
    },
    text_section: {
        color: Colors.color_text,
        fontFamily: Fonts.regular,
        fontSize: 23,
    },
});
