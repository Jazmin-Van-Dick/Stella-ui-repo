import { Button, Div, ScrollDiv, Text } from "react-native-magnus";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaStyled } from "../style";
import { StellaSaysCard, SuggestionChip, SuggestionCard, BottomSheet } from "@/components/index";
import { ChevronRight } from "@/components/Icons";
import { router } from "expo-router";
import { NightOutInLondonImage } from "@/assets/resultImages/ResultImages";
import { Easing, Pressable } from "react-native";
import Loader from "@/components/Loader";
import { Animated } from "react-native";

export default function Index() {
    interface suggestionProps {
        name: string;
        price: string;
        image: any;
    }

    const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);
    
    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
    
    const [suggestions, setSuggestions] = useState<suggestionProps[]>([]);
    
    const handleSelection = (text: string, isActive: boolean) => {
        setSelectedSuggestions((prev) =>
            isActive ? [...prev, text] : prev.filter((chip) => chip !== text)
        );
    };
    
    const [textResult, setTextResult] = useState<string | null>(null);

    const [savedSuggestions, setSavedSuggestions] = useState<suggestionProps[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const getTextResult = () => {
        setTimeout(() => {
            setTextResult('Gold jewelry like a delicate gold necklace and gold hoop earrings to add warmth to the outfit.');
        }, 2000);
    }

    const getSuggestions = () => {
        setIsLoading(true);

        setTimeout(() => {
            setSuggestions([
                {
                    name: 'Pants',
                    price: '$79.95',
                    image: require('@/assets/images/suggestionPants.png')
                },
                {
                    name: 'Shoes',
                    price: '$79.95',
                    image: require('@/assets/images/suggestionShoes.png')
                }
            ]);

            setIsLoading(false);
        }, 2000);

    }

    useEffect(() => {
        getTextResult();
    }, [getTextResult])


    const suggestionsOptions = [
        "👚 Tops",
        "👖 Bottoms",
        "🥽 Eyewear",
        "👗 Dresses",
        "🧢 Hats",
        "👟Footwear",
        "👔 Blazers",
        "🧥 Outerwear",
    ];

   const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 1500,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, []);

  const rotate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

return (
    <SafeAreaStyled $bg="white">
        <BottomSheet 
            title="Update suggestions"
            isVisible={showUpdateModal}
            onClose={() => setShowUpdateModal(false)}
            closeButton
        >
            <Div
                row
                flexWrap="wrap"
                style={{
                    gap: 8
                }}
            >
                {suggestionsOptions.map((chipText) => (
                    <SuggestionChip
                        key={chipText}
                        text={chipText}
                        onToggle={handleSelection}
                    />
                ))}
            </Div>

            <Button
                bg="#F9F4EE"
                mt={24}
                h={56}
                alignSelf="stretch"
                rounded="circle"
                onPress={() => {
                    setShowUpdateModal(false);
                }}
            >
                <Text fontWeight="bold" color="#AB5B0B" fontSize={16}>
                    Update
                </Text>
            </Button>
        </BottomSheet>

        <Div
            h={325}
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
        
        {isLoading ? (
            <Div justifyContent="center" alignItems="center" flex={1}>
                <Animated.View style={{ transform: [{ rotate }] }}>
                    <Loader />
                </Animated.View>
            </Div>
        ) : (
            <>
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
                        result={textResult}
                    />

                    {!suggestions.length ? (
                        <>
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
                                {suggestionsOptions.map((chipText) => (
                                    <SuggestionChip
                                        key={chipText}
                                        text={chipText}
                                        onToggle={handleSelection}
                                    />
                                ))}
                            </Div>
                        </>
                    ) : (
                        <ScrollDiv flex={1}>
                            <Div
                                row
                                justifyContent="space-between"
                                mb={20}
                            >
                                <Text
                                    fontSize={16}
                                    fontWeight="bold"
                                >
                                    Our suggestions   
                                </Text>

                                <Button
                                    px={12}
                                    py={6}
                                    borderWidth={1}
                                    borderColor="#D8D9DE"
                                    bg="#FFFFFF"
                                    rounded={'circle'}
                                    onPress={() => setShowUpdateModal(true)}
                                >
                                    <Text
                                        fontSize={14}
                                        fontWeight="bold"
                                        style={{
                                            fontFamily: 'Inter  '
                                        }}
                                    >
                                        Items
                                    </Text>
                                </Button>
                            </Div>
                            <Div 
                                row
                                flexWrap="wrap"
                                style={{
                                    gap: 8,
                                }}
                            >
                                {suggestions.map((product, index) => (
                                    <SuggestionCard 
                                        key={index}
                                        image={product.image}
                                        productName={product.name}
                                        productPrice={product.price}
                                        onSave={() => {
                                            setSavedSuggestions([
                                                {
                                                    image: product.image,
                                                    name: product.name,
                                                    price: product.price
                                                }
                                            ]);
                                        }}
                                    />
                                ))}
                            </Div>
                        </ScrollDiv>
                    )}
                </Div>

                {!suggestions.length ? (
                    <Button
                        bg={selectedSuggestions.length ? "#AB5B0B" : '#ECEDF1'}
                        alignSelf="stretch"
                        rounded="circle"
                        h={56}
                        disabled={!selectedSuggestions.length}
                        mx={16}
                        onPress={() => {
                            getSuggestions();
                        }}
                    >
                        <Text fontWeight="bold" color={selectedSuggestions.length ? 'white' : '#898C9C'} fontSize={16}>
                            🪄  10x my look
                        </Text>
                    </Button>
                ) : (
                    <Button
                        bg={selectedSuggestions.length ? "#AB5B0B" : '#ECEDF1'}
                        alignSelf="stretch"
                        rounded="circle"
                        h={56}
                        disabled={!selectedSuggestions.length}
                        mx={16}
                        onPress={() => {
                            router.push('/FeedbackModule/saved');
                        }}
                    >
                        <Text fontWeight="bold" color={selectedSuggestions.length ? 'white' : '#898C9C'} fontSize={16}>
                            Save my look
                        </Text>
                    </Button>
                )}
            </>
        )}
    </SafeAreaStyled>
    );
}