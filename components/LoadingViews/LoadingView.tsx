import { Div, Text } from "react-native-magnus";
import React, { useEffect, useRef } from "react";
import { SafeAreaStyled } from "@/app/style";
import LogoSquared from "../LogoSquared";
import Loader from "../Loader";
import { Animated, Easing } from "react-native";

const LoadingView: React.FC = () => {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const spinAnimation = Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 2000, 
                easing: Easing.linear,
                useNativeDriver: true,
            })
        );
        spinAnimation.start();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <SafeAreaStyled $bg="#F9F4EE">
            <Div row m={"xl"}>
                <LogoSquared w="32" h="32" />

                <Text fontSize={18} fontWeight="900" color="#AB5B0B" ml={5}>
                    Stella
                </Text>
            </Div>

            <Div
                mx={"xl"}
                mt={'55%'}
                alignItems="center"
                style={{
                    flex: 1,
                }}
            >
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                    <Loader />
                </Animated.View>

                <Text
                    fontSize={"6xl"}
                    textAlign="center"
                    fontWeight="900"
                    color="#AB5B0B"
                    mt={24}
                    mb={16}
                >
                    Hold thight
                </Text>

                <Text fontFamily={"Roboto"} fontSize={16} textAlign="center">
                    We’re preparing your Stella experience
                </Text>
            </Div>
        </SafeAreaStyled>
    );
};

export default LoadingView;