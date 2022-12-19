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

        }
    };
    return (
        <TouchableOpacity onPress={handleOnPress}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image source={images.icGrid} style={styles.image}/>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
