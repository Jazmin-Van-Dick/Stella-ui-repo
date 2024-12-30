import { Button, Div, Radio, ScrollDiv, Text } from "react-native-magnus";
import React, { useState } from "react";
import { SafeAreaStyled } from "../style";
import { TextField, Header, LoadingView, RadioCard, DatePicker } from "@/components/index";
import { router } from "expo-router";
import { events } from "./icons";

export default function Index() {
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();

    const handleSelect = (occasion: string) => {
        setSelectedEvent(occasion);
    };

    if (isLoading) {
        return <LoadingView />
    };

    return (
        <SafeAreaStyled $bg="white">
            <ScrollDiv>
                <Header title="Tell me what to wear" navBack />            

                <Div mx="xl" mt="10%" flex={1}>
                    <Text fontSize="4xl" fontWeight="bold" mb="xl">
                        When is your event?
                    </Text>

                    <Text fontSize={16} mb="xl">
                        We use your event date to suggest the best outfit based on the weather. Your data stays private.
                    </Text>

                    <DatePicker
                        label="Select Date"
                        placeholder="Pick a date"
                        value={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                    />

                    <Div 
                        row 
                        flexWrap='wrap' 
                        justifyContent="center"
                        style={{gap: 16}}
                        mx={-16}
                        mb={'2xl'}
                    >
                        <Radio.Group 
                            row 
                            flexWrap="wrap" 
                            justifyContent="center"
                            style={{gap: 16}}
                        >
                            {events.map((item, index) => (
                                <RadioCard
                                    key={index}
                                    icon={item.icon}
                                    iconActive={item.iconActive}
                                    occasion={item.occasion}
                                    isSelected={selectedEvent === item.occasion}
                                    onSelect={() => handleSelect(item.occasion)}
                                />
                            ))}
                        </Radio.Group>
                    </Div>
                </Div>
            </ScrollDiv>

            <Button
                bg={selectedEvent && selectedDate  ? "#AB5B0B" : "#ECEDF1"}
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
                disabled={!selectedEvent || !selectedDate}
                onPress={() => {
                    router.push('/tellMeWhatToWear/location')
                }}
            >
                <Text fontWeight="bold" color={selectedEvent && selectedDate ? "white" : "#898C9C"} fontSize={16}>
                    Next
                </Text>
            </Button>
        </SafeAreaStyled>
    );
}