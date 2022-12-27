import {NavigationContainer} from '@react-navigation/native';
import DashboardNavigator from './src/navigator/DashboardNavigator';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/app/store';



export default function App() {
    return (
        <Provider store={store}>
            <StatusBar hidden={true}/>
            <NavigationContainer>
                <DashboardNavigator/>
            </NavigationContainer>
        </Provider>
    );
}
