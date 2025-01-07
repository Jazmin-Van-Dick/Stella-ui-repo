import { Div, Text } from "react-native-magnus";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import Loader from "../Loader";

const LoadingView: React.FC = () => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const progressValue = useRef(new Animated.Value(0)).current;
    const [progressText, setProgressText] = useState("0%");

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();

        Animated.timing(progressValue, {
            toValue: 100,
            duration: 1500,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();

        const listener = progressValue.addListener(({ value }) => {
            setProgressText(`${Math.round(value)}%`);
        });

        return () => {
            progressValue.removeListener(listener);
        };
    }, [spinValue, progressValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <Div
            mx={"xl"}
            mt={"40%"}
            alignItems="center"
            style={{
                flex: 1,
            }}
        >
            <Div
                position="relative"
                alignItems="center"
                h={100}
                w={100}
            >
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                    <Loader />
                </Animated.View>

                <Div
                    position="absolute"
                    style={{
                        left: "50%",
                        top: "50%",
                        transform: [{ translateX: '-45%' }, { translateY: '-90%' }],
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "900",
                            color: "#061F4E",
                            textAlign: "center",
                        }}
                    >
                        {progressText}
                    </Text>
                </Div>
            </Div>

            <Text
                fontSize={"4xl"}
                textAlign="center"
                fontWeight="900"
                my={16}
            >
                Our AI stylist is gathering your information
            </Text>

            <Text
                fontSize={16}
                textAlign="center"
            >
                We’ll have your new fit very soon
            </Text>
        </Div>
    );
};

export default LoadingView;