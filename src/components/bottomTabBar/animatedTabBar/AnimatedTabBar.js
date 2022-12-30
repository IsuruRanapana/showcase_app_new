// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 12/30/2022 => 1:58 PM  *** //


import Animated, {useAnimatedStyle, useDerivedValue, withTiming} from 'react-native-reanimated';
import Svg from 'react-native-svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useReducer} from 'react';
import {LayoutChangeEvent, View, StyleSheet} from 'react-native';
import Background from '../../assets/svgs/Background';
import TabBarComponent from '../tabBarComponent/TabBarComponent';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

export default function AnimatedTabBar({
                                           state: {index: activeIndex, routes},
                                           navigation,
                                           descriptors,
                                       }) {
    const {bottom} = useSafeAreaInsets();

    const reducer = (state: any, action: {x: number; index: number}) => {
        return [...state, {x: action.x, index: action.index}];
    };

    const [layout, dispatch] = useReducer(reducer, []);

    // console.log(layout);

    const handleLayout = (event: LayoutChangeEvent, index: number) => {
        dispatch({x: event.nativeEvent.layout.x, index});
    };

    const xOffset = useDerivedValue(() => {
        if (layout.length !== routes.length) return 0;

        const xOffsetInner =
            [...layout].find(({index}) => index === activeIndex).x - 25;

        // console.log(xOffsetInner);

        return xOffsetInner;
    }, [activeIndex, layout]);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{translateX: withTiming(xOffset.value, {duration: 250})}],
        };
    });

    return (
        <View style={[styles.container, {paddingBottom: bottom}]}>
            <AnimatedSvg
                width={110}
                height={60}
                viewBox="0 0 110 60"
                style={[styles.activeBackground, animatedStyles]}>
                <Background color="#82AAE3" />
            </AnimatedSvg>

            <View style={styles.tabBarContainer}>
                {routes.map((route, index) => {
                    const active = index === activeIndex;
                    const {options} = descriptors[route.key];

                    return (
                        <TabBarComponent
                            key={route.key}
                            active={active}
                            options={options}
                            onLayout={e => handleLayout(e, index)}
                            onPress={() => navigation.navigate(route.name)}
                        />
                    );
                })}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },
    activeBackground: {
        position: 'absolute',
    },
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});
