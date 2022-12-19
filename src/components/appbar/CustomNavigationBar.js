// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/19/2022 => 11:09 AM  *** //
import {Appbar} from 'react-native-paper';
import {Text} from 'react-native';

export default function CustomNavigationBar({navigation, back, title}) {
    return (
        <Appbar.Header style={{backgroundColor: '#c06c84',}}>
            {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content titleStyle={{textAlign: 'center'}} title={<Text style={{color:'white'}}>{title}</Text>}></Appbar.Content>
        </Appbar.Header>
    );
}
