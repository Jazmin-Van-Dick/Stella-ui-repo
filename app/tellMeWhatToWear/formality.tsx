import { Button, Div, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState, useEffect } from "react";
import { SafeAreaStyled } from "../style";
import { Header, LoadingAssets, CustomSlider } from "@/components/index";
import { router } from "expo-router";

export default function Index() {
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const titleValues = ["Super Casual", "Relaxed Casual", "Casual", "Business Casual", "Formal"];
    const progress = 2;
    const [formalityLevel, setformalityLevel] = useState<string>();

    const steps = [
        { label: "Recovering Weather Data" },
        { label: "Finding Outfit Recommendations" },
        { label: "Finalizing Your Experience" },
    ];

    useEffect(() => {
        setformalityLevel(titleValues[2]);
    }, []);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        router.push("/tellMeWhatToWear/results");
    };

    if (isLoading) {
        return (
            <LoadingAssets
                steps={steps}
                onComplete={handleLoadingComplete}
                title={"Stella’s finding the best outfits for you"}
                headerTitle={"Tell me what to wear"}
            />
        );
    }

    const handleChange = (value: number) => {
        setformalityLevel(titleValues[value]);
    };

    return (
        <SafeAreaStyled $bg="white">
            <ScrollDiv>
                <Header title="Tell me what to wear" navBack />

                <Div mx="xl" mt="10%" flex={1}>
                    <Text fontSize="4xl" fontWeight="bold" mb="xl">
                        What’s the formality for the occasion?
                    </Text>

                    <CustomSlider
                        min={1}
                        progress={progress}
                        title="Level of formality"
                        titleValues={titleValues}
                        onValueChange={(value) => handleChange(value)} // Update state on slider change
                    />
                </Div>
            </ScrollDiv>

            <Button
                bg={"#AB5B0B"}
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
                onPress={() => {
                    setIsLoading(true);
                }}
            >
                <Text fontWeight="bold" color={"white"} fontSize={16}>
                    Next
                </Text>
            </Button>
        </SafeAreaStyled>
    );
}
