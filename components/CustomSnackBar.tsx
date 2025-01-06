import React from "react";
import { Pressable } from "react-native";
import { Div, Text } from "react-native-magnus";

interface ChipProps {
    icon?: React.ReactNode;
    onPress?: () => void;
    content?: React.ReactNode;
    text?: string;
}

const CustomSnackBar = ({icon, content, onPress, text} : ChipProps) => {
    return (
        <Pressable
            onPress={onPress}
        >
            <Div
                row
                rounded={10}
                py={8}
                px={16}
                h={40}
                w={'100%'}
                alignItems="center"
                bg="#F9F4EE"
                style={{
                    gap: 8,
                }}
                mb={16}
            >
                {icon && (
                    <>
                        {icon}
                    </>
                )}

                {content && (
                    <>
                        {content}
                    </>
                )}

                {text && (
                    <Text
                        fontSize={14}
                        color="#AB5B0B"
                    >
                        {text}
                    </Text>
                )}
            </Div>
        </Pressable>
    );
}

export default CustomSnackBar;