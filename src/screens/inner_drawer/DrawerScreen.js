// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/19/2022 => 11:25 AM  *** //


import {StatusBar} from 'react-native';
import {InnerNavigationDrawer} from 'inner_drawer/src/screens';
import images from '../../../assets/images';
import {Home, Notifications, Profile, Search} from '../../screens';


export default function DrawerScreen({navigation}) {
    return (
        <>
            <StatusBar hidden={true}/>
            <InnerNavigationDrawer
                initialTab={0}
                isProfileSection={true}
                profileSectionButtonText={'Edit Profile'}
                userNameText={'Emma Michel'}
                profileSectionButtonOnPress={() => {
                    console.log('Profile');
                }}
                profileImage={images.profile}
                logoutButtonOnPress={() => {
                    navigation.goBack();
                }}
                isLogoutButton={true}
                drawerBackgroundStyles={{backgroundColor:'#c06c84'}}
                tabButtonEnabledTextColor={'#c06c84'}
                tabButtonDisabledTextColor={'white'}
                tabButtonEnabledBackgroundColor={'white'}
                offset = {280}
                // scale = {0.88}
                // offsetCloseButton = {-30}
                // rotateDegree = {'-10deg'}
                transformYVal = {-60}
                tabs={[
                    {
                        title: 'Home',
                        image: images.icHome,
                    },
                    {
                        title: 'Notifications',
                        image: images.icBell,
                    },
                    {
                        title: 'Profile',
                        image: images.icSettings,
                    },
                    {
                        title: 'search',
                        image: images.icSearch,
                    },
                ]}
            >
                <Home/>
                <Notifications/>
                <Profile/>
                <Search/>
            </InnerNavigationDrawer>
        </>
    );
}
