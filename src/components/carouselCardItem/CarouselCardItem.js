// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/19/2022 => 3:46 PM  *** //

import React from 'react';
import {Dimensions, Image, View, StyleSheet} from 'react-native';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default function CarouselCardItem({item, index}) {
    return (
        <View style={styles.container}>
            <Image source={{uri: item}} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        width: ITEM_WIDTH,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginBottom: 10,
    },
    image: {
        width: ITEM_WIDTH,
        height: 240,
        borderRadius: 10,
    },
});
