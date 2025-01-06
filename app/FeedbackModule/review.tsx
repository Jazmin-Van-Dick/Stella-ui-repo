import { Button, Div, Image, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "../style";
import { Header, Chip, LoadingSection, BottomSheet, TextField } from "@/components/index";
import { CloudIcon, EditIcon, InfoIcon, PinIconChip } from "@/components/Icons";
import Logo from "@/components/Logo";
import { router } from "expo-router";
import { Images, Images2, NightOutInLondonImage } from "@/assets/resultImages/ResultImages";

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

    const [occasion, setOccasion] = useState<string>('');
    const [changeFitVisible, setChangeFitVisible] = useState(false);

return (
    <SafeAreaStyled $bg="#00000040">
        <BottomSheet
            isVisible={true}
            onClose={() => {
                router.back();
            }}
            title="Review photo"
            navBack
        >
            <Text
                fontSize={24}
                fontWeight="900"
                mb={4}
                style={{
                    fontFamily: 'Manrope'
                }}
            >
                Review photo
            </Text>

            <Text
                fontSize={14}
                mb={18}
                style={{
                    fontFamily: 'Roboto'
                }}
            >
                Now tell us a bit about the occasion for your fit
            </Text>

            <Image
                w={'100%'}
                h={330}
                rounded={8}
                bg="red"
                mb={16}
                source={NightOutInLondonImage}
            />

            <TextField 
                placeholder="What’s the occasion? "
                onChange={(value: string) => setOccasion(value)}
            />

            <Button
                bg={occasion ? "#AB5B0B" : '#ECEDF1'}
                alignSelf="stretch"
                rounded="circle"
                h={56}
                mt={'20%'}
                disabled={!occasion}
                onPress={() => {
                    router.push('/FeedbackModule/result')
                }}
            >
                <Text fontWeight="bold" color={occasion ? 'white' : '#898C9C'} fontSize={16}>
                    Get feedback
                </Text>
            </Button>
        </BottomSheet>
    </SafeAreaStyled>
    );
}