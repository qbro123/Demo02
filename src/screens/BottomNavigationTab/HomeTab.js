import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Constants from '../../configs/Constants';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Title from '../../components/Title';
import FastImage from 'react-native-fast-image';
import HeaderTab from '../../components/HeaderTab';
import ItemPill from '../../components/ItemPill';

const Fonts = Constants.font;
const Colors = Constants.colors;
const Position = Constants.position;
const String = Constants.string;
const Size = Constants.size;
const Api = Constants.api;

function HomeTab({navigation}) {

    const [itemsPill, setPill] = useState([]);
    const [itemNewPill, setNewPill] = useState();
    const [isLoading, setLoading] = useState(true);
    const [isLoading2, setLoading2] = useState(true);
    const [isLoading3, setLoading3] = useState(true);
    const [title, setTitle] = useState([]);
    const [notification, setNotification] = useState([]);
    const [images, setImage] = useState([]);

    const getNewPill = async () => {
        await axios.get(Api.api_new_product)
            .then((data) => {
                setNewPill(data.data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading2(false));
    };

    const getPill = async () => {
        await axios.get(Api.api_product)
            .then((data) => {
                setPill(data.data);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    };

    const getNotification = async () => {
        await axios.get(Api.api_notification)
            .then((notify) => {
                setNotification(notify.data);
                setImage(notify.data.splice(0, 5)
                    .map((picture) => `${Api.url_upload}${picture.hinhanh}`));
            }).catch((err) => console.log(err))
            .finally(() => {
                setLoading3(false);
            });
    };

    useEffect(() => {
        getNewPill().catch((error => console.log(error)));
        getPill().catch((error => console.log(error)));
        getNotification().catch((error => console.log(error)));
    }, []);

    return (
        <LinearGradient style={styles.container} colors={[Constants.colors.bg_start, Constants.colors.bg_end]}>
            <HeaderTab visible={false} icon={'md-search'} title={String.value_text_home}/>
            <View style={{flex: 1, flexDirection: 'column'}}>
                {isLoading3 ? <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size={'large'} color={'#878787'}/>
                </View> : (
                        <FlatList
                            data={notification.slice(5, notification.length).map((notify) => notify)}
                            keyExtractor={(item, index) => {
                                return item._id;
                            }}
                            ListHeaderComponent={
                                <View>
                                    <View style={{paddingVertical: 10}}>
                                        <View style={{flex: 0.3}}>
                                            <SliderBox
                                                ImageComponent={FastImage}
                                                images={images}
                                                sliderBoxHeight={230}
                                                onCurrentImagePressed={(index) => navigation.navigate('DetailsNotify', notification[index])}
                                                currentImageEmitter={index => setTitle(notification[index])}
                                                autoplay
                                                resizeMode={'cover'}
                                                ImageComponentStyle={styles.image_box}/>
                                        </View>
                                        <View style={[styles.title_slider]}>
                                            <Text style={[styles.text_style]}
                                                  onPress={() => navigation.navigate('DetailsNotify', title)}
                                                  numberOfLines={1}>{title.tentin}</Text>
                                            <Text style={[styles.text_style, {fontSize: 12}]}
                                                  onPress={() => navigation.navigate('DetailsNotify', title)}
                                                  numberOfLines={3}>{title.noidung}</Text>
                                        </View>
                                    </View>
                                    <Title title={String.value_title_pill_new} details={String.value_more}/>
                                    {isLoading2 ? <ActivityIndicator size={'large'} color={Colors.color_black}/> : (
                                        <FlatList
                                            data={itemNewPill}
                                            horizontal={true}
                                            keyExtractor={(item, index) => {
                                                return item._id;
                                            }}
                                            renderItem={({item, index}) => (
                                                <ItemPill
                                                    category={item.phanloai}
                                                    name={item.tenthuoc}
                                                    image={item.image}
                                                    onPress={() => navigation.navigate('DetailsPill', itemNewPill[index])}
                                                />
                                            )}
                                        />
                                    )}
                                    <Title title={String.value_title_pill_new} details={String.value_more}/>
                                    {isLoading ? <ActivityIndicator size={'large'} color={Colors.color_black}/> : (
                                        <FlatList
                                            data={itemsPill}
                                            horizontal={true}
                                            keyExtractor={(item, index) => {
                                                return item._id;
                                            }}
                                            renderItem={({item, index}) => (
                                                <ItemPill
                                                    category={item.phanloai}
                                                    name={item.tenthuoc}
                                                    image={item.image}
                                                    onPress={() => navigation.navigate('DetailsPill', itemsPill[index])}
                                                />
                                            )}
                                        />
                                    )}
                                    <Title title={String.value_title_pill_new} details={String.value_more}/>
                                    {isLoading ? <ActivityIndicator size={'large'} color={Colors.color_black}/> : (
                                        <FlatList
                                            data={itemsPill}
                                            horizontal={true}
                                            keyExtractor={(item, index) => {
                                                return item._id;
                                            }}
                                            renderItem={({item, index}) => (
                                                <ItemPill
                                                    category={item.phanloai}
                                                    name={item.tenthuoc}
                                                    image={item.image}
                                                    onPress={() => navigation.navigate('DetailsPill', itemsPill[index])}
                                                />
                                            )}
                                        />
                                    )}
                                    <Title title={String.value_news} details={String.value_more}/>
                                </View>
                            }
                            renderItem={({item, index}) => (
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('DetailsNotify',
                                        notification.slice(5, notification.length)
                                            .map((notify) => notify)[index])}>
                                    <View style={styles.notify_item}>
                                        <Image source={{uri: `${Api.url_upload}${item.hinhanh}`}}
                                               style={styles.notify_image}/>
                                        <View style={styles.notify_title}>
                                            <Text numberOfLines={1}
                                                  style={styles.notify_title_text}>{item.tentin}</Text>
                                            <Text numberOfLines={3}
                                                  style={styles.notify_text_content}>{item.noidung}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.line_custom}/>
                                </TouchableOpacity>
                            )}
                        />
                    )}
            </View>
        </LinearGradient>
    );
}

export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text_style: {
        marginRight: 6,
        marginLeft: 6,
        backgroundColor: 'rgba(0,0,0,0.72)',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '900',
        fontFamily: Fonts.semibold,
        padding: 10,
    },
    title_slider: {
        position: 'absolute',
        width: Size.match_parent,
        flexDirection: 'column',
        bottom: 10,
    },
    image_box: {
        width: '97%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    notify_item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 5,
        paddingLeft: 5,
    },
    notify_image: {
        width: 90,
        height: 70,
        borderRadius: 4,
    },
    notify_title: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 10,
        paddingStart: 5,
    },
    notify_title_text: {
        fontSize: 14,
        fontFamily: Fonts.bold,
        color: Colors.color_text,
    },
    notify_text_content: {
        fontSize: 10,
        textAlign: 'justify',
        fontFamily: Fonts.regular,
        color: Colors.color_text,
    },
    line_custom: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(51,51,51,0.28)'
    }
});
