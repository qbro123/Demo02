import React, {Component, useEffect, useState } from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Constants from '../../configs/Constants';

function HomeTab(navigation) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(Constants.string.value_api_notification)
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <View>
            <SliderBox
                images={itemSlide}
                autoplay={true}
                sliderBoxHeight={200}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
            />
            <View style={{position: 'absolute', bottom: 1,backgroundColor: 'rgba(91,91,91,0.53)', padding: 10}}>
                <Text style={{color: '#fff', fontFamily: 'bold', fontSize: 20,}}>Đà Lạt đông nghẹt du khách, chen chân đi chơi
                    như chưa từng có COVID-19</Text>
            </View>

        </View>
    );
}

export default HomeTab;
