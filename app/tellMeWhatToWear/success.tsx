import React, { useState } from "react";
import { Button, Div, Text } from "react-native-magnus";
import { SafeAreaStyled } from "../style";
import { LoadingView, SavedItemCard } from "@/components/index";
import { router } from "expo-router";
import { Images2 } from "@/assets/resultImages/ResultImages";

export default function Index() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    if (isLoading) {
        return <LoadingView />;
    }

    return (
        <SafeAreaStyled $bg="#F7F4EF">
            <Div
                flex={1}
                p={16}
            >
                <Text
                    mt={'30%'}
                    color="#232636"
                    fontWeight="900"
                    fontSize={24}
                    textAlign="center"
                    mb={49}
                >
                    We’ve saved your look
                </Text>

                <SavedItemCard
                    images={Images2}
                    section="TELL ME WHAT TO WEAR"
                    title="Vintage"
                    onPress={() => {
                        router.push('/tellMeWhatToWear/results')
                    }}
                />
            </Div>

            <Button
                bg={"#AB5B0B"}
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
                onPress={() => {
                    router.push("/homeApp");  
                }}
            >
                <Text
                    fontWeight="bold"
                    color={"white"}
                    fontSize={16}
                >
                    Continue
                </Text>
            </Button>
        </SafeAreaStyled>
    );
}