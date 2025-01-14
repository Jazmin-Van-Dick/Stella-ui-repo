import { Button, Div, Image, ScrollDiv, Text } from "react-native-magnus";
import React, { useRef, useState } from "react";
import { SafeAreaStyled } from "@/app/style";
import { BottomSheet, TextField } from "@/components/index";
import { router } from "expo-router";
import { Camera, Select } from "@/components/index";
import { Pressable } from "react-native";
import { ChevronLeft } from "lucide-react-native";

export default function Section() {
    const [step, setStep] = useState<number>(0);

    const renderOnboardingStep = () => {
        switch (step) {
        case 0:
            return <ReviewPhoto />;
        }
    };

    const ReviewPhoto = () => {
        const [itemName, setItemName] = useState('');
        const [itemDescription, setItemDescription] = useState('');
        const [itemType, setItemType] = useState('');
        const [itemBrand, setItemBrand] = useState('');
        
        const isComplete = itemName && itemDescription && itemBrand && itemType;
        
        return (
            <Div bg='#00000040' flex={1}>
                <Div
                    bg='#fff'
                    roundedTop={10}
                    mt={10}
                    pt={24}
                    pb={10}
                    px={16}
                    row
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Pressable
                        onPress={() => {
                            router.back()
                        }}
                    >
                        <ChevronLeft color={'black'}/>
                    </Pressable>

                    <Text
                        fontSize={16}
                        fontWeight='bold'
                        style={{
                            fontFamily: 'Inter'
                        }}
                    >
                        Review photo
                    </Text>

                    <Div></Div>
                </Div>
                
                <ScrollDiv
                    flex={1}
                    bg="#fff"
                    px={16}
                    py={20}
                >
                    <Text
                        fontSize={24}
                        fontWeight="900"
                        mb={4}
                        style={{
                            fontFamily: 'Manrope'
                        }}
                    >
                        Tell us about this item
                    </Text>

                    <Text
                        fontSize={14}
                        mb={26}
                        style={{
                            fontFamily: 'Roboto'
                        }}
                    >
                        The more the better
                    </Text>

                    <Image
                        w={'100%'}
                        h={330}
                        rounded={8}
                        bg="red"
                        mb={16}
                        source={require('@/assets/images/jacket.png')}
                    />

                    <TextField 
                        placeholder="Item Name"
                        hasFloatingPlaceholder
                        value={itemName}
                        onChange={(value: string) => setItemName(value)}
                    />

                    <TextField 
                        placeholder="Description"
                        hasFloatingPlaceholder
                        value={itemDescription}
                        onChange={(value: string) => setItemDescription(value)}
                    />

                    <Select
                        placeholder="Item type"
                        value={itemType}
                        options={[
                            { label: "Option 1", value: 1 },
                            { label: "Option 2", value: 2 },
                            { label: "Option 3", value: 3 },
                        ]}
                        hasFloatingPlaceholder
                        onChange={(value) => setItemType(value)}
                    />

                    <Select
                        placeholder="Brand"
                        value={itemBrand}
                        options={[
                            { label: "Option 1", value: 1 },
                            { label: "Option 2", value: 2 },
                            { label: "Option 3", value: 3 },
                        ]}
                        hasFloatingPlaceholder
                        onChange={(value) => setItemBrand(value)}
                    />
                
                    <Button
                        bg={isComplete ? "#AB5B0B" : '#ECEDF1'}
                        alignSelf="stretch"
                        rounded="circle"
                        h={56}
                        mb={16}
                        disabled={!isComplete}
                        onPress={() => {
                            router.push('/homeApp/(tabs)/wardrobe')
                        }}
                    >
                        <Text fontWeight="bold" color={isComplete ? 'white' : '#898C9C'} fontSize={16}>
                            Upload to wardrobe
                        </Text>
                    </Button>

                    <Button
                        bg={isComplete ? "#F9F4EE" : 'transparent'}
                        alignSelf="stretch"
                        rounded="circle"
                        h={56}
                        mb={40}
                        disabled={!isComplete}
                        onPress={() => {
                            router.push('/homeApp/camera')
                        }}
                        
                    >
                        <Text fontWeight="bold" color={isComplete ? '#AB5B0B' : '#898C9C'} fontSize={16}>
                            Upload & start another
                        </Text>
                    </Button>
                </ScrollDiv>
            </Div>
        );
    }

    return ( 
        <>
        {renderOnboardingStep()}
        </>
    )
}