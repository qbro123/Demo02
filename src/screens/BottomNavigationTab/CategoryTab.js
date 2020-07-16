import React, {useEffect, useState} from 'react';
import {
    Alert,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderTab from '../../components/HeaderTab';
import Icon from 'react-native-vector-icons/Feather';
import Constants from '../../configs/Constants';

const Colors = Constants.colors;
const Position = Constants.position;
const String = Constants.string;
const Fonts = Constants.font;
const CategoryObject = Constants.category_object;
const Size = Constants.size;
function CategoryTab({navigation}) {
    const [item] = useState(CategoryObject);
    return (
        <LinearGradient style={{flex: 1}} colors={[Colors.bg_start, Colors.bg_end]}>
            <HeaderTab visible={false} icon={'md-search'} title={String.value_text_category}/>
            <View style={{flex: 1}}>
                <FlatList
                    data={item}
                    ListHeaderComponent={
                        <View>
                            <Text style={style.text_category_hot}>{String.value_category_hot}</Text>
                            <FlatList
                                data={item.filter((itemName) => {
                                    return itemName.status === true;
                                })}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => {
                                    return item.name.toString();
                                }}
                                renderItem={({item, index}) => (
                                    <TouchableOpacity>
                                        <View
                                            style={style.item_container_h}>
                                            <View style={style.item_image_h}>
                                                <Icon name={item.icon} size={30} color={Colors.color_forget}/>
                                            </View>
                                            <Text style={style.item_text_h}>{item.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                            <Text style={style.text_category_all}>{String.value_category_all}</Text>
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => {
                        return item.name.toString();
                    }}
                    renderItem={({item, index}) => (
                        <View>
                            <TouchableOpacity>
                                <View style={style.item_container_v}>
                                    <View style={style.item_image_v}>
                                        <Icon name={item.icon} size={20} color={Colors.color_forget}/>
                                    </View>
                                    <Text style={style.item_text_v}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={style.line}/>
                        </View>


                    )}
                />
            </View>
        </LinearGradient>
    );
}

const style = StyleSheet.create({
    text_category_hot: {
        margin: 20,
        fontFamily: Fonts.medium,
        color: Colors.color_text,
        fontSize: 20,
    },
    text_category_all: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontFamily: Fonts.medium,
        color: Colors.color_text,
        fontSize: 20,
    },
    item_container_h: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item_container_v: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: Position.center,
    },
    item_image_h: {
        backgroundColor: Colors.bg_start,
        width: 60,
        height: 60,
        justifyContent: Position.center,
        alignItems: Position.center,
        borderRadius: 60 / 2,
    },
    item_image_v: {
        backgroundColor: Colors.bg_start,
        width: 35,
        height: 35,
        marginRight: 10,
        justifyContent: Position.center,
        alignItems: Position.center,
        borderRadius: 35 / 2,
    },
    item_text_h: {
        fontSize: 12,
        fontFamily: Fonts.regular,
        padding: 5,
        color: Colors.color_text,
    },
    item_text_v: {
        fontSize: 16,
        fontFamily: Fonts.regular,
        padding: 5,
        color: Colors.color_text,
    },
    line: {
        height: Size.height_line,
        width: Size.match_parent,
        backgroundColor: 'rgba(255,255,255,0.03)'
    },

});
export default CategoryTab;
