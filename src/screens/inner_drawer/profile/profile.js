// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/15/2022 => 2:59 PM  *** //



import {Image, ScrollView, Text, View} from 'react-native';
import images from '../../../../assets/images';

export default function Profile({navigation}){
    return (
        <ScrollView style={{flex:1}}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20,
            }}>{"Profile"}</Text>
            <Image source={images.photo} style={{
                width: '100%',
                height: 300,
                borderRadius: 15,
                marginTop: 25,
            }}></Image>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
                , paddingTop: 15,
                paddingBottom: 5,
            }}>{'abbbdhe fajnfa'}</Text>

            <Text style={{}}>{'hbfannd ba a dabjnn aheh ads'}</Text>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20,
            }}>{"Profile"}</Text>
            <Image source={images.photo} style={{
                width: '100%',
                height: 300,
                borderRadius: 15,
                marginTop: 25,
            }}></Image>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
                , paddingTop: 15,
                paddingBottom: 5,
            }}>{'abbbdhe fajnfa'}</Text>

            <Text style={{}}>{'hbfannd ba a dabjnn aheh ads'}</Text>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                paddingTop: 20,
            }}>{"Profile"}</Text>
            <Image source={images.photo} style={{
                width: '100%',
                height: 300,
                borderRadius: 15,
                marginTop: 25,
            }}></Image>

            <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
                , paddingTop: 15,
                paddingBottom: 5,
            }}>{'abbbdhe fajnfa'}</Text>

            <Text style={{}}>{'hbfannd ba a dabjnn aheh ads'}</Text>

        </ScrollView>
    )
}
