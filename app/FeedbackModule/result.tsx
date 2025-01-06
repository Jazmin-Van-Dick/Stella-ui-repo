import { Button, Div, Image, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "../style";
import { Header, Chip, LoadingSection, BottomSheet, TextField, StellaSaysCard, SuggestionChip } from "@/components/index";
import { ChevronRight, CloudIcon, EditIcon, InfoIcon, PinIconChip } from "@/components/Icons";
import Logo from "@/components/Logo";
import { router } from "expo-router";
import { Images, Images2, NightOutInLondonImage } from "@/assets/resultImages/ResultImages";
import { Pressable } from "react-native";

export default function Index() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);
    
    const handleSelection = (text: string, isActive: boolean) => {
        setSelectedSuggestions((prev) =>
            isActive ? [...prev, text] : prev.filter((chip) => chip !== text)
        );
    };

    const suggestions = [
        "👚 Tops",
        "👖 Bottoms",
        "🥽 Eyewear",
        "👗 Dresses",
        "🧢 Hats",
        "👟Footwear",
        "👔 Blazers",
        "🧥 Outerwear",
    ]
return (
    <SafeAreaStyled $bg="white">
        <Div
            h={400}
            bgImg={NightOutInLondonImage}
            position="relative"
        >

            <Div 
                flex={1}
                bg="#00000050"
                justifyContent="center"
                alignItems="center"
            >
                <Text
                    textAlign="center"
                    color="#fff"
                    fontSize={16}
                >
                    A night out in London
                </Text>
            </Div>
            
            <Div 
                h={64}
                px={16}
                justifyContent="center"
                position="absolute"
                top={0}
                left={0}
            >
                <Pressable
                    onPress={() => {
                        router.back();
                    }}
                >
                    <ChevronRight bg="white" rotation={180} />
                </Pressable>
            </Div>
        </Div>

        <Div
            flex={1}
            p={16}
        >
            <StellaSaysCard
                style={{
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 16,
                    shadowColor: '#333333',
                    shadowOpacity: 0.09,
                    elevation: 8,
                }} 
                mt={-60}
                result="Gold jewelry like a delicate gold necklace and gold hoop earrings to add warmth to the outfit."
            />

            <Text
                fontSize={16}
                fontWeight="bold"
                mt={24}
                mb={16}
                style={{
                    fontFamily: 'Manrope'
                }}
            >
                We’ve got some suggestions
            </Text>

            <Div
                row
                flexWrap="wrap"
                style={{
                    gap: 8
                }}
            >
                {suggestions.map((chipText) => (
                    <SuggestionChip
                        key={chipText}
                        text={chipText}
                        onToggle={handleSelection}
                    />
                ))}
            </Div>
        </Div>

        <Button
            bg={selectedSuggestions.length ? "#AB5B0B" : '#ECEDF1'}
            alignSelf="stretch"
            rounded="circle"
            h={56}
            disabled={!selectedSuggestions.length}
            mx={16}
        >
            <Text fontWeight="bold" color={selectedSuggestions.length ? 'white' : '#898C9C'} fontSize={16}>
                🪄  10x my look
            </Text>
        </Button>
    </SafeAreaStyled>
    );
}