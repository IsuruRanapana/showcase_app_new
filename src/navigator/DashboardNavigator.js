// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/19/2022 => 11:18 AM  *** //

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    BottomSheetScreen,
    BottomTabNavigator,
    Dashboard,
    DrawerScreen,
    ImageSlider,
    OnBoarding,
    StandardDrawer,
    VoiceCommand,
} from '../screens';
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
                        headerShown: false,
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
            <Stack.Screen
                name={'STANDARD_DRAWER'}
                component={StandardDrawer}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen
                name={'VOICE_COMMAND'}
                component={VoiceCommand}
                options={
                    {
                        header: (props) => <CustomNavigationBar
                            title={'Speech to Text'}
                            {...props}
                        />,
                    }
                }
            />
            <Stack.Screen
                name={'ON_BOARDING'}
                component={OnBoarding}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen
                name={'BOTTOM_TAB_NAVIGATOR'}
                component={BottomTabNavigator}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            <Stack.Screen
                name={'BOTTOM_SHEET_SCREEN'}
                component={BottomSheetScreen}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
        </Stack.Navigator>
    );
}
