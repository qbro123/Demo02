import {StyleSheet} from 'react-native';
import Constants from '../../configs/Constants';
const Colors = Constants.colors;
const Fonts = Constants.font;
const Position = Constants.position;
const styles = StyleSheet.create({
    container: {flexDirection: 'row',alignItems: Position.center, marginVertical: 10},
    text_name: {fontFamily: Fonts.bold,color: Colors.color_text, fontSize: 18,},
    line: {width: '100%', height: 1.5, backgroundColor: Colors.color_text, marginLeft: 10}
});

export default styles;
