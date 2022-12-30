// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/30/2022 => 3:39 PM  *** //



import {Text, View, StyleSheet} from 'react-native';

export default function Chat() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chat</Text>
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
