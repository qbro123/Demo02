import {Text, View, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Constants from '../configs/Constants';
import HeaderTab from '../components/HeaderTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import Line from '../components/Line';
import ItemDetails from '../components/ItemDetails';

const Colors = Constants.colors;
const Api = Constants.api;
const Fonts = Constants.font;
const Position = Constants.position;
const String = Constants.string;
function DetailsPillScreens({route, navigation}) {
    const data = route.params;

    useEffect(() => {
        console.log(data);
    }, []);

    return (
        <LinearGradient colors={[Colors.bg_start, Colors.bg_end]} style={styles.container}>
            <HeaderTab visible={true} title={'Chi tiết'} onPress={() => navigation.goBack()} icon="md-share"/>
            <ScrollView style={styles.container_view}>
                <View style={styles.name_pill}>
                    <Image source={{uri: `${Api.url_upload}${data.image}`}} style={styles.image_style}/>
                    <View style={styles.view_name_pill}>
                        <Text style={styles.text_name_pill}>{data.tenthuoc}</Text>
                        <Text style={styles.text_category_pill}>{data.phanloai}</Text>
                    </View>
                    <View style={styles.view_heart}>
                        <TouchableOpacity>
                            <Icon color={Colors.color_white} size={24} name={'heart-o'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.content_pill}>
                    <Line name={'Thông tin thuốc'}/>
                    <View>
                        <ItemDetails name={'Sổ đăng ký:'} content={data.sodangky}/>
                        <ItemDetails name={'Tên thuốc:'} content={data.tenthuoc}/>
                        <ItemDetails name={'Phân loại:'} content={data.phanloai}/>
                        <ItemDetails name={'Hoạt chất - Nồng độ\nHàm lượng:'} content={data.hoatchat}/>
                    </View>
                    <Line name={'Tiêu chuẩn'}/>
                    <View>
                        <ItemDetails name={'Tuổi thọ:'} content={`${data.tuoitho} Tháng`} />
                        <ItemDetails name={'Dạng bào chế:'} content={data.dangbaoche}/>
                        <ItemDetails name={'Quy cách đóng gói:'} content={data.quycach}/>
                        <ItemDetails style={{width: 250, textAlign: 'right'}} name={'Công ty sản xuất:'} content={data.ctysx}/>
                        <ItemDetails style={{width: 250, textAlign: 'right'}} name={'Công ty đăng ký:'} content={data.ctydk}/>
                        <ItemDetails name={'Tiêu chuẩn:'} content={data.tieuchuan}/>
                    </View>
                    <Line style={{marginBottom: 0}} name={'Giá kê khai'}/>
                    <Text style={styles.text_details_pill}>{String.value_details_pill}</Text>
                    <View>
                        <ItemDetails name={'Đơn vị kê khai:'} content={data.donvi}/>
                        <ItemDetails name={'Ngày kê khai:'} content={`Ngày ${data.ngaykekhai}`}/>
                        <ItemDetails name={'Giá kê khai:'} content={`${data.giakekhai} VNĐ`}/>
                        <ItemDetails name={'ĐVT: '} content={data.dvt}/>
                    </View>
                </View>
                <View style={styles.comment_pill}>
                    <View style={{  flexDirection: 'row',
                        justifyContent: 'space-between',}}>
                        <Text style={[styles.text_name_pill, {fontSize: 14, color: '#7ed2c0'}]}>Bình luận về thuốc</Text>
                        <Text style={[styles.text_name_pill, {fontSize: 14, color: '#7ed2c0'}]}>0 Bình luận</Text>
                    </View>
                    <View style={{
                        height: 1.5,
                        marginVertical: 3,
                        width: '100%',
                        backgroundColor: Colors.color_text
                    }}/>
                    <View>
                        <TouchableOpacity>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(255,255,255,0.4)',
                                margin: 5,
                                paddingVertical: 5,
                                borderRadius: 5,
                            }}>
                                <Text style={{fontSize: 16,fontFamily: Fonts.bold, color: Colors.color_white}}>
                                    VIẾT BÌNH LUẬN
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

export default DetailsPillScreens;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container_view: {
        flex: 1,
        paddingHorizontal: 20,
        marginVertical: 10
    },
    view_name_pill: {
        flexDirection: 'column',
        justifyContent: Position.center,
        marginLeft: 10,
    },
    view_heart: {
        flex: 1,
        justifyContent: Position.center,
        alignItems: 'flex-end',
    },
    text_name_pill: {
        color: Colors.color_text,
        fontFamily: Fonts.bold,
        fontSize: 20,
    },
    text_category_pill: {
        fontSize: 12,
        fontFamily: Fonts.medium,
        color: Colors.color_black,
        width: 120,
        paddingVertical: 2,
        backgroundColor: Colors.color_text,
        textAlign: Position.center,
        borderRadius: 10,
    },
    name_pill: {
        flexDirection: 'row',
    },
    text_details_pill: {
        textAlign: Position.justify,
        fontFamily: Fonts.regular,
        fontSize: 10,
        marginBottom: 10,
        color: Colors.color_text
    },
    image_style: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
    },
    content_pill: {

    },
    comment_pill: {
        marginVertical: 15,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        backgroundColor: 'rgba(234,234,234,0.12)',
        borderColor: Colors.color_text
    },
});
