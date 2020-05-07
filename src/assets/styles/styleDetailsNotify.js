import {StyleSheet} from 'react-native';
import Constants from '../../configs/Constants';
const Colors = Constants.colors;
const Fonts = Constants.font;
const Position = Constants.position;
const Size = Constants.size;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    name_news: {
        fontSize: 20,
        marginTop: 5,
        fontFamily: Fonts.bold,
        color: Colors.color_text,
        textAlign: Position.justify
    },
    written: {
        textAlign: Position.right,
        fontFamily: Fonts.regular,
        marginBottom: 10,
        color: Colors.color_text
    },
    image: {
        width: Size.match_parent,
        height: 200
    },
    content:{
        fontFamily: Fonts.medium,
        fontSize: 16,
        color: Colors.color_text,
        marginVertical: 10,
        textAlign: Position.justify
    }
});

export default styles;
