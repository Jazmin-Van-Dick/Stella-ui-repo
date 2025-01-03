import { Button, Div, Image, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "../style";
import { Header, Chip, LoadingSection, BottomSheet, TextField } from "@/components/index";
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
                keyboardShouldPersistTaps={true}
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
                        <>
                            <Div
                                flexDir="column"
                                bg="#F9F4EE"
                                px={8}
                                pt={8}
                                pb={12}
                                rounded={10}
                                mt={24}
                                mb={16}
                            >
                                <Div row>
                                    <Logo w={9} h={20} bg="#AB5B0B" />
                                    <Text
                                        color="#AB5B0B"
                                        fontSize={12}
                                        fontWeight="bold"
                                        ml={8}
                                    >
                                        Stella says ...
                                    </Text>
                                </Div>

                                <Text
                                    color="#AB5B0B"
                                    fontSize={12}
                                    fontWeight="bold"
                                    mt={8}
                                >
                                    Gold jewelry like a delicate gold necklace
                                    and gold hoop earrings to add warmth to the
                                    outfit.
                                </Text>
                            </Div>

                            <Div
                                row
                                flexWrap="wrap"
                                style={{
                                    gap: 16,
                                }}
                            >
                                {showImages.map((item, index) => (
                                    <Image
                                        key={index}
                                        h={200}
                                        rounded={16}
                                        w={"47%"}
                                        source={item}
                                    />
                                ))}
                            </Div>
                        </>
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