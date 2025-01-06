import { Button, Div, Image, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "../style";
import { Header, Chip, LoadingSection, BottomSheet, TextField, StellaSaysCard } from "@/components/index";
import { CloudIcon, EditIcon, InfoIcon, PinIconChip } from "@/components/Icons";
import Logo from "@/components/Logo";
import { router } from "expo-router";
import { Images, Images2 } from "@/assets/resultImages/ResultImages";

export default function Index() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showImages, setShowImages] = useState(Images);

    const handleMakeChanges = () => {
        setIsLoading(true);
        setShowImages(Images2);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    const [outfitName, setOutfitName] = useState<string>('');
    const [saveFitVisible, setSaveFitVisible] = useState(false);

    const [outfitChanges, setOutfitChanges] = useState<string>('');
    const [changeFitVisible, setChangeFitVisible] = useState(false);

    const toggleSaveOutfit = () => {
        setSaveFitVisible(!saveFitVisible);
    };

    const toggleChangeOutfit = () => {
        setChangeFitVisible(!changeFitVisible);

        handleMakeChanges();
    };

    const handleSaveOutfit = () => {
        if (outfitName) {
            router.push('/tellMeWhatToWear/success');
        }
    };

return (
    <SafeAreaStyled $bg="white">
            <BottomSheet
                isVisible={saveFitVisible}
                onClose={toggleSaveOutfit}
                title="How would you like to name this fit?"
            >
                
                <TextField 
                    placeholder="Outfit name"
                    hasFloatingPlaceholder
                    value={outfitName}
                    onChange={(value: string) => setOutfitName(value)}
                />

                <Button
                    bg="#AB5B0B"
                    alignSelf="stretch"
                    rounded="circle"
                    h={56}
                    onPress={() => {
                        handleSaveOutfit();
                    }}
                >
                    <Text fontWeight="bold" color="#fff" fontSize={16}>
                        Save outfit
                    </Text>
                </Button>
            </BottomSheet>

            <BottomSheet
                isVisible={changeFitVisible}
                onClose={toggleChangeOutfit}
                title="What would you like to change?"
            >
                
                <TextField 
                    placeholder="Something simple I can wear during the sum.."
                    value={outfitChanges}
                    bg="#EDEDED"
                    onChange={(value: string) => setOutfitChanges(value)}
                    suffix={<EditIcon />}
                />

                <Button
                    bg="#AB5B0B"
                    alignSelf="stretch"
                    rounded="circle"
                    h={56}
                    onPress={() => {
                        toggleChangeOutfit();
                    }}
                >
                    <Text fontWeight="bold" color="#fff" fontSize={16}>
                        See changes
                    </Text>
                </Button>
            </BottomSheet>

            <ScrollDiv
                scrollEnabled={true}
                showsVerticalScrollIndicator={true}
                keyboardShouldPersistTaps={'always'}
                keyboardDismissMode='on-drag'
            >
                <Header title="Here are your results" navBack />

                <Div mx="xl" mt="10%" flex={1}>
                    <Text fontSize="4xl" fontWeight="bold" mb="xl">
                        Thursday, Dec 14th, 2024
                    </Text>

                    <Div
                        row
                        style={{
                            gap: 4,
                        }}
                    >
                        <Chip icon={<PinIconChip />} text="Toronto" />
                        <Chip icon={<CloudIcon />} text="2 °C" />
                        <Chip text="Evening" />
                        <Chip text="Work" />
                    </Div>

                    {isLoading ? (
                        <LoadingSection />
                    ) : (
                        <StellaSaysCard 
                            result="Gold jewelry like a delicate gold necklace and gold hoop earrings to add warmth to the outfit."
                        />
                    )}
                </Div>

            </ScrollDiv>
            <Button
                bg="#AB5B0B"
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
                onPress={() => {
                    toggleSaveOutfit();
                }}
                mt={24}
            >
                <Text fontWeight="bold" color="#fff" fontSize={16}>
                    Save outfit
                </Text>
            </Button>

            <Button
                bg="#F9F4EE"
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
                onPress={() => {
                    setChangeFitVisible(true);
                }}
            >
                <Text fontWeight="bold" color="#AB5B0B" fontSize={16}>
                    Make changes
                </Text>
            </Button>
        </SafeAreaStyled>
    );
}