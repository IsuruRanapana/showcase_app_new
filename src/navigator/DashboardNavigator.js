// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/19/2022 => 11:18 AM  *** //

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard, DrawerScreen, ImageSlider} from '../screens';
import {CustomNavigationBar} from '../components';

const Stack = createNativeStackNavigator();

export default function DashboardNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="DASHBOARD"
        >
            <Stack.Screen
                name={'DASHBOARD'}
                component={Dashboard}
                options={
                    {
                        header: (props) => <CustomNavigationBar
                            title={'Dashboard'}
                            {...props}
                        />,
                    }
                }
            />
            <Stack.Screen
                name={'DRAWER_SCREEN'}
                component={DrawerScreen}
                options={
                    {
                        headerShown: false
                    }
                }
            />
            <Stack.Screen
                name={'IMAGE_SLIDER'}
                component={ImageSlider}
                options={
                    {
                        header: (props) => <CustomNavigationBar
                            title={'Image Slider'}
                            {...props}
                        />,
                    }
                }
            />
        </Stack.Navigator>
    );
}
