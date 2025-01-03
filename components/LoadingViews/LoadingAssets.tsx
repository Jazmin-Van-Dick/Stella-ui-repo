import { Div, Text } from "react-native-magnus";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaStyled } from "@/app/style";
import { Animated, Easing } from "react-native";
import HeaderComponent from "../Header/Header";
import { CheckIcon } from "../Icons";
import Loader2 from "../Loader2";

interface Step {
    label: string; // Description of the step
}

interface LoadingViewProps {
    steps: Step[];
    onComplete: () => void; // Callback for handling completion
    headerTitle?: string;
    title?: string;
}

const LoadingView: React.FC<LoadingViewProps> = ({
    steps,
    onComplete,
    headerTitle = "Loading...",
    title = "Loading process in progress",
}) => {
    const spinValues = useRef(steps.map(() => new Animated.Value(0))).current;
    const progressValue = useRef(new Animated.Value(0)).current; // Animated value for progress
    const [progress, setProgress] = useState(0); // State for progress display
    const [step, setStep] = useState(1);

    useEffect(() => {
        // Sync progressValue to progress state
        const progressListener = progressValue.addListener(({ value }) => {
            setProgress(Math.round(value));
        });

        const spinAnimations = spinValues.map(spinValue =>
            Animated.loop(
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration: 1500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            )
        );

        spinAnimations[0].start();

        const timeouts = steps.map((_, index) =>
            setTimeout(() => {
                setStep(index + 2);
                const progress = ((index + 1) / steps.length) * 100;

                // Animate progress bar
                Animated.timing(progressValue, {
                    toValue: progress,
                    duration: 1500,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }).start();

                if (spinAnimations[index + 1]) spinAnimations[index + 1].start();
            }, (index + 1) * 2000)
        );

        const finalTimeout = setTimeout(() => {
            // Ensure progress reaches 100% on completion
            Animated.timing(progressValue, {
                toValue: 100,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start(() => onComplete());
        }, steps.length * 2000 + 1000);

        return () => {
            progressValue.removeListener(progressListener);
            spinAnimations.forEach(animation => animation.stop());
            [...timeouts, finalTimeout].forEach(clearTimeout);
        };
    }, [steps, onComplete]);

    const createSpin = (spinValue: Animated.Value) =>
        spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "360deg"],
        });

    const progressWidth = progressValue.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
    });

    return (
        <SafeAreaStyled $bg="white">
            <HeaderComponent title={headerTitle} navBack />
            <Div
                mx="xl"
                mt="10%"
                alignItems="center"
                style={{
                    flex: 1,
                }}
            >
                <Text fontSize={24} textAlign="center" fontWeight="900" mt={24} mb={40}>
                    {title}
                </Text>

                {steps.map((stepData, index) => (
                    <Div row w="100%" alignItems="center" mb={20} key={index}>
                        <Div
                            h={36}
                            w={36}
                            justifyContent="center"
                            alignItems="center"
                        >
                            {step > index + 1 ? (
                                <CheckIcon />
                            ) : step === index + 1 ? (
                                <Animated.View
                                    style={{ transform: [{ rotate: createSpin(spinValues[index]) }] }}
                                >
                                    <Loader2 />
                                </Animated.View>
                            ) : null}
                        </Div>
                        <Text fontFamily="Roboto" fontSize={16} ml={16}>
                            {stepData.label}
                        </Text>
                    </Div>
                ))}
            </Div>

            {/* Progress Bar Section */}
            <Div mx="xl" mt={20}>
                <Text
                    textAlign="center"
                    mb={4}
                    fontFamily="Roboto"
                    color="#898C9C"
                >
                    Almost there...{progress}%
                </Text>
                <Div h={5} rounded={30} w="100%" bg="#B0B3BD">
                    <Animated.View
                        style={{
                            height: "100%",
                            backgroundColor: "#5FAD76",
                            borderRadius: 30,
                            width: progressWidth
                        }}
                    />
                </Div>
            </Div>
        </SafeAreaStyled>
    );
};

export default LoadingView;