import React, { useState } from "react";
import { Button, Div, Text } from "react-native-magnus";
import { SafeAreaStyled } from "../style";
import { Header, LoadingView, LocationField } from "@/components/index";
import { router } from "expo-router";
import { FlatList } from "react-native";

export default function Index() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [location, setLocation] = useState<string | null>(null);

    if (isLoading) {
        return <LoadingView />;
    }

    const headerContent = (
        <>
            <Header title="Tell me what to wear" navBack />

            <Div mx="xl" mt="10%">
                <Text fontSize="4xl" fontWeight="bold" mb="xl">
                    Where are you gonna be?
                </Text>

                <Text fontSize={16} mb="xl">
                    We use your location to suggest the best outfit based on the weather. Your data stays private.
                </Text>

                <LocationField
                    placeholder="Enter location"
                    onSelect={(selectedLocation) => {
                        setLocation(selectedLocation.description);
                        console.log(location);
                    }}
                />
            </Div>
        </>
    );

    return (
        <SafeAreaStyled $bg="white">
            <FlatList
                data={[]}
                ListHeaderComponent={headerContent}
                keyExtractor={(item, index) => index.toString()}
                renderItem={null}
            />
            <Button
                bg={location ? "#AB5B0B" : "#ECEDF1"}
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
                disabled={!location}
                onPress={() => {
                    router.push("/tellMeWhatToWear/event");
                }}
            >
                <Text
                    fontWeight="bold"
                    color={location ? "white" : "#898C9C"}
                    fontSize={16}
                >
                    Next
                </Text>
            </Button>
        </SafeAreaStyled>
    );
}