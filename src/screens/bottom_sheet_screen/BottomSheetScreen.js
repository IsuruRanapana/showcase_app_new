// *** Created By Isuru B. Ranapana *** //
// ***     Eyepax IT Consulting     *** //
// ***   on 1/2/2023 => 12:13 PM  *** //


import React, { useCallback, useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import BottomSheet  from "../../components/bottomSheet/BottomSheet";


const BottomSheetScreen = () => {
    const ref = useRef(null);
    const handleOnPress = useCallback(() => {
        const isActive = ref?.current?.isActive();
        if (isActive) {
            ref?.current?.scrollTo(0);
        } else {
            ref?.current?.scrollTo(-200);
        }
    }, []);

    return (
        <React.Fragment>
            <View style={styles.container}>
                <Pressable style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.text}>{"Open Bottom Sheet"}</Text>
                </Pressable>
            </View>
            <BottomSheet ref={ref}>
                <View style={styles.bottomContainer}>
                    <Text>{"Hello 👋 from Bottom sheet!"}</Text>
                </View>
            </BottomSheet>
        </React.Fragment>
    );
};

export default BottomSheetScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#111",
    },
    button: {
        backgroundColor: "dodgerblue",
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: "white",
    },
    bottomContainer: {
        flex: 1,
        // backgroundColor: "aqua",
        alignItems: "center",
        paddingTop: 50,
    },
});
