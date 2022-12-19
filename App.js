import {NavigationContainer} from '@react-navigation/native';
import DashboardNavigator from './src/navigator/DashboardNavigator';
import {StatusBar} from 'react-native';


export default function App() {
    return (
        <>
            <StatusBar hidden={true}/>
            <NavigationContainer>
                <DashboardNavigator/>
            </NavigationContainer>
        </>
    );
}
