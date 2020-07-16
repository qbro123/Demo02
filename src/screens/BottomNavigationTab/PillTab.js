import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import HeaderTab from '../../components/HeaderTab';
import Constants from '../../configs/Constants';
const Colors = Constants.colors;
const Fonts = Constants.font;
const Position = Constants.position;
const String = Constants.string;
const Size = Constants.size;
const Api = Constants.api;


function PillTab({navigation}) {
    const [itemsPill, setPill] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [date, setDate] = useState([]);
    const [itemFilter, setItemFilter] = useState([]);

    const getPill = async () => {
        await axios.get(Api.api_product)
            .then((data) => {
                setPill(data.data);
                setItemFilter(data.data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };

    const Filtered = (text) => {
        const newData = itemFilter.filter(item => {
            const itemData = `${item.tenthuoc.toUpperCase()} ${item.ctydk.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });
        setPill(newData);
    };

    const getDateTime = async () => {
        const dateNow = await new Date();
        const loadDate = dateNow.getHours() + ':' + dateNow.getMinutes() + ' - ' + dateNow.getDate() + '/' + dateNow.getMonth() + '/' + dateNow.getFullYear();
        setDate(loadDate);
    };

    useEffect(() => {
        getDateTime().catch((error => console.log(error)));
        getPill().catch((error => console.log(error)));
    }, []);
    return (
        <LinearGradient style={{flex: 1}} colors={[Colors.bg_start, Colors.bg_end]}>
            <HeaderTab visible={false} icon={'ios-refresh'} title={String.value_text_pill}/>
            <View style={{flex: 1}}>
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
                    <TextInput onChangeText={(text) => Filtered(text)} placeholder={'Nhập nội dung....'}
                               placeholderTextColor={'rgba(255,255,255,0.38)'}
                               style={{paddingBottom: 0, color: Colors.color_text}}/>
                </View>
                <View style={{marginVertical: 10, marginHorizontal: 20}}>
                    <Text style={{color: Colors.color_text, fontSize: 20, fontFamily: Fonts.bold}}>Tổng số
                        thuốc: {itemsPill.length}</Text>
                    <Text style={{color: Colors.color_text, fontSize: 16, fontFamily: Fonts.medium}}>Cập nhật
                        lúc: {date.toString()}</Text>
                </View>

                    {isLoading ? <ActivityIndicator size={'large'} color={Colors.color_black}/> : (
                        <FlatList
                            data={itemsPill}
                            keyExtractor={(item, index) => {
                                return item._id;
                            }}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, index}) => (
                                <TouchableOpacity onPress={() => navigation.navigate('DetailsPill', itemsPill[index])}>
                                    <View style={{
                                        flex: 1,
                                        alignItems: Position.center,
                                        flexDirection: 'row',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                    }}>
                                        <Image source={{uri: `${Api.url_upload}${item.image}`}} style={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: 50 / 2,
                                            marginRight: 20,
                                        }}/>
                                        <View style={{ flex: 1,flexDirection: 'column'}}>
                                            <Text style={{
                                                fontSize: 16,
                                                fontFamily: Fonts.bold,
                                                color: Colors.color_text,
                                            }}>{item.tenthuoc}</Text>
                                            <Text numberOfLines={1} style={{
                                                fontFamily: Fonts.medium,
                                                fontSize: 14,
                                                color: Colors.color_forget,
                                            }}>{item.ctydk}</Text>
                                        </View>
                                        <View>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    )}
            </View>
        </LinearGradient>
    );
}

export default PillTab;
