import {StatusBar, View} from 'react-native';
import {InnerNavigationDrawer} from 'inner_drawer/src/screens';
import images from './assets/images';
import {Home, Notifications, Profile, Search} from './src/screens';


export default function App() {
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
                    console.log('Logout');
                }}
                isLogoutButton={true}
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
                // drawerBackgroundStyles={{backgroundColor:'#c06c84'}}
                // tabButtonEnabledTextColor={'#c06c84'}
                // tabButtonDisabledTextColor={'white'}
                // tabButtonEnabledBackgroundColor={'white'}


            >
                <Home/>
                <Notifications/>
                <Profile/>
                <Search/>
            </InnerNavigationDrawer>
        </>
    );
}
