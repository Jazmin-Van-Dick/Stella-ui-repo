import { Button, Div, Image, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "../style";
import { Header, Chip, LoadingSection, BottomSheet, TextField, SuggestionCard } from "@/components/index";
import { CloudIcon, EditIcon, InfoIcon, PinIconChip } from "@/components/Icons";
import Logo from "@/components/Logo";
import { router } from "expo-router";
import { Images, Images2, NightOutInLondonImage } from "@/assets/resultImages/ResultImages";

export default function Index() {
    const suggestions = [
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
    ]

return (
    <SafeAreaStyled $bg="#F9F4EE">

        <Div
            flex={1}
            px={16}
        >
            <Text
                fontWeight="bold"
                textAlign="center"
                fontSize={24}
                style={{
                    fontFamily: 'Manrope'
                }}
                mt={'70%'}
            >
                We’ve saved your look
            </Text>

            <Text
                fontWeight="bold"
                textAlign="center"
                fontSize={24}
                style={{
                    fontFamily: 'Manrope'
                }}
            >
                Here are your items
            </Text>
            
            <Div
                row
                style={{
                    gap: 8
                }}
            >
                {suggestions.map((product, index) => (
                    <SuggestionCard 
                        key={index}
                        image={product.image}
                        productName={product.name}
                        productPrice={product.price}
                        onSave={() => {}}
                    />
                ))}
            </Div>
        </Div>

        <Button
            bg={"#AB5B0B"}
            alignSelf="stretch"
            rounded="circle"
            h={56}
            mt={'20%'}
            mx={16}
            onPress={() => {
                router.push('/homeApp/(tabs)')
            }}
        >
            <Text fontWeight="bold" color={'#fff'} fontSize={16}>
                Continue
            </Text>
        </Button>
    </SafeAreaStyled>
    );
}