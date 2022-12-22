// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/20/2022 => 12:45 PM  *** //


import {createDrawerNavigator} from '@react-navigation/drawer';
import {Home, Notifications, Profile, Search} from '../screens';
import {CustomNavigationBar} from '../components';

const Drawer = createDrawerNavigator();

export default function StandardDrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName={'HOME'} >
            <Drawer.Screen name="HOME" component={Home} options={
                {
                    header: (props) => <CustomNavigationBar
                        title={'Standard Navigator'}
                        isDrawer={true}
                        {...props}
                    />,
                }
            }/>
            <Drawer.Screen name="PROFILE" component={Profile} options={
                {
                    header: (props) => <CustomNavigationBar
                        title={'Standard Navigator'}
                        isDrawer={true}
                        {...props}
                    />,
                }
            }/>
            <Drawer.Screen name="NOTIFICATIONS" component={Notifications} options={
                {
                    header: (props) => <CustomNavigationBar
                        title={'Standard Navigator'}
                        isDrawer={true}
                        {...props}
                    />,
                }
            }/>
            <Drawer.Screen name="SEARCH" component={Search} options={
                {
                    header: (props) => <CustomNavigationBar
                        title={'Standard Navigator'}
                        isDrawer={true}
                        {...props}
                    />,
                }
            }/>
        </Drawer.Navigator>
    );
}
