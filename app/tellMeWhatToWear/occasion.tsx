import { Button, Div, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "../style";
import { TextField, Header, LoadingView, RadioCard } from "@/components/index";
import { router } from "expo-router";
import { occasions } from "./icons";

export default function Index() {
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);

    const handleSelect = (occasion: string) => {
        setSelectedOccasion(occasion);
    };

    if (isLoading) {
        return <LoadingView />
    };

    return (
        <SafeAreaStyled $bg="white">
            <ScrollDiv>
                <Header title="Tell me what to wear" navBack />            

                <Div mx="xl" mt="10%" flex={1}>
                    <Text fontSize="4xl" fontWeight="bold" mb="xl">
                        What’s the occasion?
                    </Text>

                    <Text fontSize={16} mb="xl">
                        Try to be as descriptive as possible.
                    </Text>

                    <Div 
                        row 
                        flexWrap='wrap' 
                        justifyContent="center"
                        style={{gap: 16}}
                        mx={-16}
                        mb={'2xl'}
                    >
                        <Radio.Group 
                            row 
                            flexWrap="wrap" 
                            justifyContent="center"
                            style={{gap: 16}}
                        >
                            {occasions.map((item, index) => (
                                <RadioCard
                                    key={index}
                                    icon={item.icon}
                                    iconActive={item.iconActive}
                                    occasion={item.occasion}
                                    isSelected={selectedOccasion === item.occasion}
                                    onSelect={() => handleSelect(item.occasion)}
                                />
                            ))}
                        </Radio.Group>
                    </Div>

                    <TextField placeholder="Other..." />
                </Div>
            </ScrollDiv>

            <Button
                bg={selectedOccasion  ? "#AB5B0B" : "#ECEDF1"}
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
                disabled={!selectedOccasion}
                onPress={() => {
                    router.push('/tellMeWhatToWear/event')
                }}
            >
                <Text fontWeight="bold" color={selectedOccasion ? "white" : "#898C9C"} fontSize={16}>
                    Next
                </Text>
            </Button>
        </SafeAreaStyled>
    );
}