import {StyleSheet} from 'react-native';
import Constants from '../../configs/Constants';
const Colors = Constants.colors;
const Fonts = Constants.font;
const Size = Constants.size;
const Position = Constants.position;

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
        flex: 2.5,
        alignItems: Position.center,
    },
    footer: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: Position.center,
        alignItems: Position.center,
    },
    text_section: {
        color: Colors.color_text,
        fontFamily: Fonts.regular,
        fontSize: 23,
    },
    layout_text_input: {
        width: Size.match_parent,
        paddingHorizontal: 30,
        paddingTop: 20,
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
    text_forget: {
        fontFamily: Fonts.regular,
        color: Colors.color_text,
        fontSize: Size.button_text,
    },

});
export default styles;
