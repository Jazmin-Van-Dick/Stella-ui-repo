import { router } from "expo-router";
import { Button, Div, Image, ScrollDiv, Text } from "react-native-magnus";
import { Header } from "@/components";
import { SafeAreaStyled } from "../style";
import { CircleFadingArrowUp, LockKeyhole, Palette } from 'lucide-react-native';
import React from "react";
import { Separator } from "@/components/Icons";

export default function Index() {  
    const palette = [
        {
            season: 'Warm Autumn',
            type: 'Earthy Tones',
            colors: [
                { color: '#808000', name: 'Olive' },
                { color: '#C19A6B', name: 'Camel' },
                { color: '#483C32', name: 'Taupe' },
                { color: '#FFDB58', name: 'Mustard' },
            ]
        },
        {
            season: 'Deep winter',
            type: 'Jewel Tones',
            colors: [
                { color: '#50C878', name: 'Esmerald' },
                { color: '#0F52BA', name: 'Sapphire' },
                { color: '#673147', name: 'Deep Purple' },
                { color: '#9B111E', name: 'Ruby Red' },
            ]
        },
        {
            season: 'Neutral colors',
            type: '',
            colors: [
                { color: '#FFFFF0', name: 'Ivory' },
                { color: '#F5F5DC', name: 'Warm Beige' },
                { color: '#8B4513', name: 'Soft Brown' },
                { color: '#A89A8E', name: 'Warm Gray' },
            ]
        },
    ];

    return (
        <SafeAreaStyled $bg="#fff">
            <Header 
                title="Style quiz" 
                bg="#F9F4EE"
                onSkip={() => router.push('/styleQuiz/style')}
                navBack 
            />
            
            <Div 
                bg="#F9F4EE"
                px={16}
                pb={32}
                pt={16}
            >
                <Text fontSize={24} fontWeight="900" style={{ fontFamily: 'Manrope' }}>
                    Here are your results!
                </Text>
                <Text fontSize={16} style={{ fontFamily: 'Roboto' }}>
                    Based on our analysis with AI you have:
                </Text>
            </Div>

            <ScrollDiv
                showsVerticalScrollIndicator={false}
                mx={"xl"}
                style={{ flex: 1 }}
            >
                <Div flexDir="column" mt={24} style={{ gap: 16 }}>
                    {palette.map((item, index) => (
                        <Div key={index}>
                            <Div row mb={16}>
                                <Text fontSize={16} fontWeight="bold" style={{ fontFamily: 'Manrope' }}>
                                    {item.season}: {' '}
                                </Text>
                                <Text fontSize={16} style={{ fontFamily: 'Manrope' }}>
                                    {item.type}
                                </Text>
                            </Div>
                            
                            <Div row>
                                {item.colors.map((color, idx) => (
                                    <Div 
                                        flexDir="column"
                                        alignItems="center"
                                        flex={1}
                                        key={idx}
                                    >
                                        <Div
                                            w={50}
                                            h={50}
                                            bg={color.color}
                                            rounded={'circle'}
                                            my={16}
                                            shadow={'xs'}
                                        />

                                        <Text>{color.name}</Text>
                                    </Div>  
                                ))}
                            </Div>

                            {index !== palette.length - 1 && (
                                <Div alignSelf="center" my={32}>
                                    <Separator />
                                </Div>
                            )}
                        </Div>
                    ))}
                </Div>

                <Button
                    bg={"#AB5B0B"}
                    mt={63}
                    mb={"sm"}
                    alignSelf="stretch"
                    rounded={"circle"}
                    onPress={() => router.push('/styleQuiz/style')}
                >
                    <Text fontWeight="bold" color={'white'} fontSize={16}>
                        Next
                    </Text>
                </Button>
            </ScrollDiv>
        </SafeAreaStyled>
    );
}