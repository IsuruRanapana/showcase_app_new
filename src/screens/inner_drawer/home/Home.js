// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/15/2022 => 2:59 PM  *** //


import {Text, TouchableOpacity, View} from 'react-native';

export default function Home({navigation}) {
    const handleGoBack = ()=> {
        navigation.goBack();
    }
    return (
        <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20,
            }}>{'Home'}</Text>

            <TouchableOpacity onPress={handleGoBack}><Text>{'Go Back'}</Text></TouchableOpacity>
        </View>
    );
}
