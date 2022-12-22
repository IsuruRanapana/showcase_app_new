// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/22/2022 => 10:38 AM  *** //

import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    image: {
        width: 180,
        height: 180,
        marginVertical: 32,
    },
    text: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        marginTop: 30
    },
    title: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -80,
        marginBottom: 50,
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
