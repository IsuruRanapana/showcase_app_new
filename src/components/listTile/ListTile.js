// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/19/2022 => 12:42 PM  *** //


import {Image, Text, TouchableOpacity, View} from 'react-native';
import images from '../../../assets/images';
import StringUtils from '../../utils/stringUtils';
import styles from './ListTile.styles';

export default function ListTile({item, navigation}) {
    const handleOnPress = () => {
        switch (item.title) {
            case StringUtils.IMAGE_SLIDER:
                navigation.navigate('IMAGE_SLIDER');
                break;
            case StringUtils.ANIMATED_DRAWER:
                navigation.navigate('DRAWER_SCREEN');
                break;
            case StringUtils.STANDARD_DRAWER_NAVIGATION:
                navigation.navigate('STANDARD_DRAWER');
                break;
            case StringUtils.VOICE_COMMAND:
                navigation.navigate('VOICE_COMMAND');
                break;
            case StringUtils.ON_BOARDING:
                navigation.navigate('ON_BOARDING');
                break;
            case StringUtils.BOTTOM_TAB_NAVIGATOR:
                navigation.navigate('BOTTOM_TAB_NAVIGATOR');
                break;
            case StringUtils.BOTTOM_SHEET:
                navigation.navigate('BOTTOM_SHEET_SCREEN');
                break;
        }
    };
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <View style={item.done?styles.container:{...styles.container,opacity:0.4}}>
                <View style={styles.content}>
                    <Image source={images.icGrid} style={styles.image}/>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
