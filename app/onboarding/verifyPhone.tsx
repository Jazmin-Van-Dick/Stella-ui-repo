import React, { useRef, useState } from "react";
import { Button, Div, Input, Text } from "react-native-magnus";
import { SafeAreaStyled } from "../style";
import { Header } from "@/components/index";
import { router } from "expo-router";

export default function Index() {
    const [code, setCode] = useState(["", "", "", "", "", ""]);
    const inputs = useRef<Array<any>>([]);

    const handleInputChange = (value: string, index: number) => {
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 5) {
        inputs.current[index + 1]?.focus(); // Move to the next input
        }

        if (!value && index > 0) {
        inputs.current[index - 1]?.focus(); // Move to the previous input on backspace
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
        inputs.current[index - 1]?.focus(); // Handle backspace navigation
        }
    };

    // Check if all inputs are filled
    const isComplete = code.every((digit) => digit !== "");

    return (
        <SafeAreaStyled $bg="white">
            <Header title="Sign up" progress={40} navBack />

            <Div
                mx={"xl"}
                mt={"30%"}
                style={{
                    flex: 1,
                }}
            >
                <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb="xl">
                    Verify Your Number
                </Text>

                <Text fontSize={16} textAlign="center" mb="xl">
                    We sent a code to (778) 772-3339, enter it below:
                </Text>

                <Div row justifyContent="space-between">
                    {code.map((digit, index) => (
                        <Input
                            key={index}
                            ref={(el) => (inputs.current[index] = el)}
                            value={digit}
                            onChangeText={(value) => handleInputChange(value, index)}
                            onKeyPress={(e) => handleKeyPress(e, index)}
                            keyboardType="numeric"
                            maxLength={1}
                            w={48}
                            h={56}
                            fontSize="4xl"
                            textAlign="center"
                            fontWeight="bold"
                            borderColor="gray300"
                            rounded="md"
                        />
                    ))}
                </Div>
            </Div>

            <Button
                bg={ isComplete ? "#AB5B0B" : '#ECEDF1'}
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
                disabled={!isComplete}
                onPress={ isComplete ? () => router.push('/onboarding/fullName') : () => {}}
            >
                <Text fontWeight="bold" color={isComplete ? 'white' : '#898C9C'} fontSize={16}>
                    Continue
                </Text>
            </Button>

            <Button
                bg='#F9F4EE'
                mx="xl"
                my="sm"
                alignSelf="stretch"
                rounded="circle"
            >
                <Text fontWeight="bold" color='#AB5B0B' fontSize={16}>
                    Resent Code
                </Text>
            </Button>
        </SafeAreaStyled>
    );
}