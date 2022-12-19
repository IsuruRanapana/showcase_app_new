// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/15/2022 => 2:59 PM  *** //


import {Text, View} from 'react-native';

export default function Home({navigation}) {
    return (
        <View>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20,
            }}>{'Home'}</Text>
        </View>
    );
}
