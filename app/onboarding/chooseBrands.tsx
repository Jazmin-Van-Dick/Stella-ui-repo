import { Button, Div, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "../style";
import { BrandCard, Header, LoadingView } from "@/components/index";
import { router } from "expo-router";
import brands from "./Brands";

export default function Index() {
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false); 

    const handleBrandSelect = (brandName: string) => {
        setSelectedBrands(prevState => 
            prevState.includes(brandName) 
                ? prevState.filter(name => name !== brandName) 
                : [...prevState, brandName]
        );
    };
    
    if (isLoading) {
        return <LoadingView />
    };

    return (
        <SafeAreaStyled $bg="white">
            <ScrollDiv>
                <Header title="Sign up" progress={95} navBack />            

                <Div mx="xl" mt="10%" flex={1}>
                    <Text fontSize="4xl" fontWeight="bold" mb="xl">
                        What brands do you typically shop from?
                    </Text>

                    <Text fontSize={16} mb="xl">
                        You can pick more than 1
                    </Text>

                    <Div 
                        row 
                        flexWrap='wrap' 
                        justifyContent="center"
                        style={{gap: 16}}
                        mx={-16}
                        pb={16}
                    >
                        {brands.map((item, index) => (
                            <BrandCard 
                                key={index} 
                                logo={item.logo} 
                                name={item.name}
                                selected={selectedBrands.includes(item.name)}
                                onSelect={() => handleBrandSelect(item.name)}
                            />
                        ))}
                    </Div>
                </Div>
            </ScrollDiv>

            <Button
                bg="#AB5B0B"
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
                onPress={() => {
                    setIsLoading(true);
                }}
            >
                <Text fontWeight="bold" color="#fff" fontSize={16}>
                    Next
                </Text>
            </Button>
        </SafeAreaStyled>
    );
}