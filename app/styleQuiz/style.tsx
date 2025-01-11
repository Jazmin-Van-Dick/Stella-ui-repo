import { router } from "expo-router";
import { Button, Div, ScrollDiv, Text } from "react-native-magnus";
import { AnimatedLoadingDonut, CheckboxCardList, Header, ImageCard, RadioCard, SelectionCard, StellaSaysCard } from "@/components";
import React, { useEffect, useState } from "react";
import { SafeAreaStyled } from "../style";
import { Modal, Pressable } from 'react-native'; // Import Modal for display
import { X } from "lucide-react-native";

export default function Index() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [percentage, setPercentage] = useState(0);

    const handleNext = () => {
        setIsLoading(true);

        const interval = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsLoading(false);
                    setShowModal(true);
                    return 100;
                }
                return prev + 2;
            });
        }, 100);

        return () => clearInterval(interval);
    };

    if (showModal) {
        return (
            <FreeTrialModal />
        )
    } 

    return (
        <SafeAreaStyled $bg="#fff">
            <Header title="Style quiz" navBack progress={64} />

            {isLoading ? (
                <LoadingView percentage={percentage} />
            ) : (
                <PickStyle handleNext={handleNext} />
            )}
        </SafeAreaStyled>
    );
}

const LoadingView = ({ percentage }: { percentage: number }) => {
    return (
        <Div alignItems="center" justifyContent="center" flex={1} px={24}>
            <AnimatedLoadingDonut percentage={percentage} color={'#AB5B0B'} />

            <Text
                textAlign="center"
                fontSize={16}
                fontWeight="bold"
                mt={20}
                mb={16}
            >
                Consulting our AI stylists
            </Text>

            <StellaSaysCard
                title="Stella’s tip of the day"
                result={'White sneakers are the perfect match for any outfit, regardless of weather, just as long as it doesn’t rain!'}
            />
        </Div>
    );
};

const PickStyle = ({ handleNext }: { handleNext: () => void }) => {
    const [selectedStyle, setSelectedStyle] = useState<string[]>([]);

    const handleSelect = (occasion: string) => {
        setSelectedStyle((prevSelected) =>
            prevSelected.includes(occasion)
                ? prevSelected.filter((item) => item !== occasion)
                : [...prevSelected, occasion]
        );
    };

    const Options = [
        {
            image: require('@/assets/images/female/Old Money.png'),
            text: 'Old Money',
        },
        {
            image: require('@/assets/images/female/Street Style.png'),
            text: 'Street style',
        },
        {
            image: require('@/assets/images/female/Gym Girlie.png'),
            text: 'Gym Girlie',
        },
        {
            image: require('@/assets/images/female/Glam.png'),
            text: 'Glam',
        },
        {
            image: require('@/assets/images/female/Business Casual.png'),
            text: 'Business Casual',
        },
        {
            image: require('@/assets/images/female/Romantic.png'),
            text: 'Romantic',
        },
        {
            image: require('@/assets/images/female/Casual Chic.png'),
            text: 'Casual Chic',
        },
        {
            image: require('@/assets/images/female/Minimalist.png'),
            text: 'Minimalist',
        },
    ];

    return (
        <>
            <ScrollDiv
                showsVerticalScrollIndicator={false}
                mx={"xl"}
                mt={"sm"}
                style={{ flex: 1 }}
            >
                <Text
                    fontWeight="900"
                    fontSize={24}
                    mt={32}
                    style={{ fontFamily: 'Manrope' }}
                >
                    Change Your Style
                </Text>

                <Text
                    fontSize={16}
                    mt={10}
                    mb={32}
                    style={{ fontFamily: 'Manrope' }}
                >
                    You can pick more than 1
                </Text>

                <Div
                    row
                    flexWrap="wrap"
                    style={{ gap: 10 }}
                    pb={64}
                >
                    {Options.map((item, index) => (
                        <ImageCard
                            key={index}
                            text={item.text}
                            image={item.image}
                            isSelected={selectedStyle.includes(item.text)}
                            onSelect={() => handleSelect(item.text)}
                        />
                    ))}
                </Div>
            </ScrollDiv>
            <Button
                bg={selectedStyle.length ? "#AB5B0B" : '#ECEDF1'}
                mx={"xl"}
                my={"sm"}
                alignSelf="stretch"
                rounded={"circle"}
                disabled={!selectedStyle.length}
                onPress={handleNext}
            >
                <Text
                    fontWeight="bold"
                    color={selectedStyle.length ? 'white' : '#898C9C'}
                    fontSize={16}
                >
                    Next
                </Text>
            </Button>
        </>
    );
};

const FreeTrialModal = () => {
    const StyleProBenefits = [
        "🔥 Unlimited Fashion Advice 24/7",
        "✨ Premium Outfits Made For You",
        "🥇 Be the Most Confident Person"
    ]
    return (
        <SafeAreaStyled $bg="#F9F4EE">
            <Div p={16}>
                <Pressable
                    onPress={() => {
                        router.push('/homeApp/(tabs)')
                    }}
                >
                    <Div alignSelf="flex-end">
                        <X color={'#2E3348'} />
                    </Div>
                </Pressable>

                <Text
                    fontWeight="900"
                    textAlign="center"
                    fontSize={32}
                    style={{
                        fontFamily: 'Manrope'
                    }}
                >
                    Infinite Style.
                </Text>
            </Div>

            <Div
                flex={1}
                justifyContent="center"
            >
                {StyleProBenefits.map((benefit, index) => (
                    <Text
                        key={index} 
                        textAlign="center"
                        fontWeight="900"
                        fontSize={20}
                        style={{
                            fontFamily: 'Manrope'
                        }}
                    >
                        {benefit}
                    </Text>
                ))}
            </Div>
            
            <Div
                bg="#fff"
                borderWidth={4}
                borderColor="#0C0D12"
                rounded={25}
                px={20}
                pt={32}
                pb={20}
                mx={16}
                justifyContent="center"
                alignItems="center"
            >
                <Button
                    bg="#232636"
                    rounded={'circle'}
                    px={24}
                    position="absolute"
                    top={-22}
                    alignSelf="center"
                >
                    <Text
                        color="white"
                    >
                        Style Pro
                    </Text>
                </Button>

                <Text
                    color="#0C0D12"
                    fontWeight="900"
                    textAlign="center"
                    fontSize={20}
                    style={{
                        fontFamily: 'Manrope'
                    }}
                    mb={16}
                >
                    Pick the Right Outfit {"\n"} Every Time.
                </Text>

                <Button
                    bg={"#AB5B0B"}
                    mx={"xl"}
                    mt={"sm"}
                    alignSelf="stretch"
                    rounded={"circle"}
                >
                    <Text
                        fontWeight="bold"
                        color={'white'}
                        fontSize={14}
                    >
                        Unlock Free Trial
                    </Text>
                </Button>
                
                <Text
                    color="#0C0D12"
                    textAlign="center"
                    fontSize={14}
                    style={{
                        fontFamily: 'Manrope'
                    }}
                    mt={16}
                >
                    risk-free trial then $4.99/week
                </Text>
            </Div>

            <Text
                color="#3A405A"
                textAlign="center"
                fontSize={14}
                mt={20}
                mb={46}
            >
                Email  •  Earn •  Restore
            </Text>
        </SafeAreaStyled>
    )
}