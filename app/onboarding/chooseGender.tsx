import { Button, Div, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "../style";
import { Header, GenderCard } from "@/components/index";
import { router } from "expo-router";

export default function Index() {
    const [selectedGender, setSelectedGender] = useState<'female' | 'male' | null>(null);

    const handleGenderSelect = (gender: 'female' | 'male') => {
        setSelectedGender(gender);
    };

    return (
        <SafeAreaStyled $bg="white">
            <Header title="Sign up" progress={80} navBack />

            <Div mx="xl" mt="10%" flex={1}>
                <Text fontSize="4xl" fontWeight="bold" mb="xl">
                    Which gender do you identify with?
                </Text>

                <Div row w={'100%'} h={'fit-content'} alignItems='center' justifyContent="space-between">
                    <GenderCard 
                        gender="female" 
                        isSelected={selectedGender === 'female'} 
                        onSelect={handleGenderSelect} 
                    />
                    <GenderCard 
                        gender="male" 
                        isSelected={selectedGender === 'male'} 
                        onSelect={handleGenderSelect} 
                    />
                </Div>
            </Div>

            <Button
                bg="#AB5B0B"
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
                onPress={() => {
                    if (selectedGender) {
                        router.push("/onboarding/chooseBrands");
                    } else {
                      alert("Please select a gender.");
                    }
                }}
            >
                <Text fontWeight="bold" color="#fff" fontSize={16}>
                    Next
                </Text>
            </Button>

            <Button
                bg='#F9F4EE'
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
            >
                <Text fontWeight="bold" color='#AB5B0B' fontSize={16}>
                  I prefer not to say
                </Text>
            </Button>
        </SafeAreaStyled>
    );
}