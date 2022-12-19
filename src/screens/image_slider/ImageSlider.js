// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/19/2022 => 1:03 PM  *** //


import {View} from 'react-native';
import carouselImagesMocks from '../../mocks/carouselImagesMocks';
import {CarouselCard} from '../../components';

export default function ImageSlider({navigation}){
    return (
        <View>
            <CarouselCard data={carouselImagesMocks}/>
        </View>
    )
}
