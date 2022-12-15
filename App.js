import {StatusBar, View} from 'react-native';
import {InnerNavigationDrawer} from 'inner_drawer/src/screens';


export default function App() {
  return (
      <>
        <StatusBar hidden={true}/>
        <InnerNavigationDrawer initialTabName={'Home'} isProfileSection={true} profileSectionButtonText={'Edit Profile'} userNameText={'Isuru Ranapana'}/>
      </>
  );
}
