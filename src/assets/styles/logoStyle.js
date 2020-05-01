import {StyleSheet} from 'react-native';
import Constants from '../../configs/Constants';
const Colors = Constants.colors;
const Fonts = Constants.font;
const Position = Constants.position;
const styles = StyleSheet.create({
    images_logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    text_logo: {
        color: Colors.color_text,
        fontFamily: Fonts.bold,
        fontSize: 20,
        textAlign: Position.center
    },
});

export default styles;
