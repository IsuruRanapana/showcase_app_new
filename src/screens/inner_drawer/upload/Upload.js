// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/30/2022 => 3:41 PM  *** //


import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Upload() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Upload</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#82AAE3',
    },
    text: {
        color: '#FFF',
        fontSize: 24,
    },
});
