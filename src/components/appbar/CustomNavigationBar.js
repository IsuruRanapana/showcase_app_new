// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/19/2022 => 11:09 AM  *** //
import {Appbar} from 'react-native-paper';
import {Image, Text, TouchableOpacity} from 'react-native';
import images from '../../../assets/images';

export default function CustomNavigationBar({navigation, back, title, isDrawer=false,showMenu=false}) {
    const handleOnPress = ()=>{
        navigation.openDrawer();
    };
    const handleClosePress = ()=>{
        navigation.closeDrawer();
    };
    return (
        <Appbar.Header style={{backgroundColor: '#c06c84',}}>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            {isDrawer?<TouchableOpacity style={{
                position:'absolute',
                top: 20,
                left: 10,zIndex:2}
            } onPress={!showMenu?handleOnPress:handleClosePress}><Image source={showMenu ? images.icClose : images.icMenu} style={{
                width: 20,
                height: 20,
                tintColor: 'white',


            }}></Image></TouchableOpacity>:<></>}
            <Appbar.Content titleStyle={{textAlign: 'center'}} title={<Text style={{color:'white'}}>{title}</Text>}></Appbar.Content>
        </Appbar.Header>
    );
}
