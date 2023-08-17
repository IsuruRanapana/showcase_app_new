// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/22/2022 => 10:33 AM  *** //


import {Image, Text, View} from 'react-native';
import styles from './OnBoarding.styles';
import AppIntroSlider from 'react-native-app-intro-slider';
import onBoardingItems from '../../mocks/onBoardingSlidesMock';
import IcForward from '../../components/assets/svgs/IcForward';
import IcBack from '../../components/assets/svgs/IcBack';
import IcCheck from '../../components/assets/svgs/IcCheck';

export default function OnBoarding() {
    const renderItems = ({item}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} style={styles.image}/>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };

    const renderNextButton = ()=>{
        return (
            <View style={styles.buttonCircle}>
                <IcForward />
            </View>
        );
    }
    const renderDoneButton=()=>{
        return (
            <View style={styles.buttonCircle}>
                <IcCheck/>
            </View>
        );
    }
    const renderBackButton=()=>{
        return (
            <View style={styles.buttonCircle}>
                <IcBack/>
            </View>
        );
    }
    const renderSkipButton = ()=>{
        return (
            <View style={styles.skipButton}>
                <Text style={styles.skipText}>{'Skip'}</Text>
            </View>
        );
    }
    return (
        <AppIntroSlider
            data={onBoardingItems}
            renderDoneButton={renderDoneButton}
            renderNextButton={renderNextButton}
            renderPrevButton={renderBackButton}
            renderItem={renderItems}
            showPrevButton={true}
            skipLabel={'Skip'}
            activeDotStyle={{backgroundColor:'black'}}
            // showSkipButton={true}
            // renderSkipButton={renderSkipButton}
        />

    );
}
