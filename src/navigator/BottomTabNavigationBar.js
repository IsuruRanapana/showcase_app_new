// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/30/2022 => 3:36 PM  *** //


import Lottie from 'lottie-react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '../components/bottomTabBar/animatedTabBar/AnimatedTabBar';
import homeIcon from '../components/assets/icons/home.icon.json';
import chatIcon from '../components/assets/icons/chat.icon.json';
import uploadIcon from '../components/assets/icons/upload.icon.json';
import settingsIcon from '../components/assets/icons/settings.icon.json';
import {Chat, Home, Settings, Upload} from '../screens';
import {StyleSheet} from 'react-native';

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigationBar = () => {
    return (
        <BottomTabs.Navigator tabBar={props => <AnimatedTabBar {...props} />}>
            <BottomTabs.Screen
                options={{
                    //@ts-ignore
                    tabBarIcon: ({ref}) => (
                        <Lottie
                            ref={ref}
                            loop={false}
                            style={styles.icon}
                            source={homeIcon}
                        />
                    ),
                }}
                name="Home"
                component={Home}
            />
            <BottomTabs.Screen
                options={{
                    tabBarIcon: ({ref}) => (
                        <Lottie
                            ref={ref}
                            loop={false}
                            style={styles.icon}
                            source={chatIcon}
                        />
                    ),
                }}
                name="Chat"
                component={Chat}
            />
            <BottomTabs.Screen
                options={{
                    //@ts-ignore
                    tabBarIcon: ({ref}) => (
                        <Lottie
                            ref={ref}
                            loop={false}
                            style={styles.icon}
                            source={uploadIcon}
                        />
                    ),
                }}
                name="Upload"
                component={Upload}
            />
            <BottomTabs.Screen
                options={{
                    //@ts-ignore
                    tabBarIcon: ({ref}) => (
                        <Lottie
                            ref={ref}
                            loop={false}
                            style={styles.icon}
                            source={settingsIcon}
                        />
                    ),
                }}
                name="Settings"
                component={Settings}
            />
        </BottomTabs.Navigator>
    );
};

const styles = StyleSheet.create({
    icon: {
        height: 32,
        width: 32,
    },
});

export default BottomTabNavigationBar;
