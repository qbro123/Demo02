import {StyleSheet} from 'react-native';
import Constants from '../../configs/Constants';
const Colors = Constants.colors;
const Position = Constants.position;
const Fonts = Constants.font;
const Size = Constants.size;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        margin: 5,
        width: 130,
        justifyContent: Position.center,
        alignItems: Position.center,
    },
    kind:{
        width: 100,
        backgroundColor: Colors.color_white,
        height: 20,
        alignItems: Position.center,
        justifyContent: Position.center,
        borderRadius: 100,
    },
    text_category:{
        color: Colors.color_black,
        fontFamily: Fonts.bold,
        fontSize: 10,
    },
    style_image:{
        margin: 10,
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
    },
    name_pill:{
        backgroundColor: 'rgba(165,165,165,0.65)',
        height: 20,
        justifyContent: Position.center,
        alignItems: Position.center,
        width: Size.match_parent,
    },
    text_name_pill:{
        color: Colors.color_white,
        fontSize: 12,
        paddingHorizontal: 10,
    }
});
export default styles;
