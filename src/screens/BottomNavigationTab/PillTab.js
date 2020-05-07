import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Constants from '../../configs/Constants';
import HeaderTab from '../../components/HeaderTab';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';

const Colors = Constants.colors;
const Fonts = Constants.font;
const Position = Constants.position;
const String = Constants.string;
const Size = Constants.size;
const Api = Constants.api;

function PillTab(navigation) {
    const [itemsPill, setPill] = useState([]);
    const [date, getDate] = useState([]);

    const getPill = async () => {
        await axios.get(Api.api_product)
            .then((data) => {
                setPill(data.data);
            })
            .catch((err) => console.log(err))
            // .finally(() => setLoading(false));
    };

    const getDateTime = async () => {
        const dateNow = await new Date();
        const loadDate = dateNow.getHours()+":"+dateNow.getMinutes()+" - "+dateNow.getDate() +"/"+dateNow.getMonth()+"/"+dateNow.getFullYear()
        getDate(loadDate);
    }

    useEffect(()=> {
        getDateTime().catch((error => console.log(error)))
        getPill().catch((error => console.log(error)));
    },[])
    return (
        <LinearGradient style={{flex: 1}} colors={[Colors.bg_start, Colors.bg_end]}>
            <HeaderTab visible={false} icon={'ios-refresh'} title={String.value_text_pill}/>
            <TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                    marginHorizontal: 20,
                    marginVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: Colors.color_text,
                    marginBottom: 0,
                }}>
                    <Icon name={'search1'} size={20} color={Colors.color_text} style={{paddingBottom: 3}}/>
                    <TextInput placeholder={'Tìm kiếm'} placeholderTextColor={Colors.color_text}
                               style={{paddingBottom: 0, color: Colors.color_text}}/>
                </View>
            </TouchableOpacity>
            <Text>Tổng số thuốc: {itemsPill.length}</Text>
            <Text>Cập nhật lúc: {date.toString()}</Text>
        </LinearGradient>
    );
}

export default PillTab;
