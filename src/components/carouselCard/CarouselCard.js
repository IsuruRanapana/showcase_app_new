// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/19/2022 => 3:46 PM  *** //


import {useRef, useState} from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, {ITEM_WIDTH, SLIDER_WIDTH} from '../carouselCardItem/CarouselCardItem';

export default function CarouselCard({data}) {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);

    return (
        <View
            style={{
                alignItems: 'center',
            }}>
            <Carousel
                layout="default"
                layoutCardOffset={9}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={index => setIndex(index)}
                useScrollView={true}
            />
        </View>
    );
}
