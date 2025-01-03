import { Div, Input, Text } from "react-native-magnus";
import React from "react";

interface CustomInputProps {
    label?: string;
    placeholder: string;
    value?: any;
    bg?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    hasFloatingPlaceholder?: boolean;
    onChange?: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ bg, label, placeholder, value, prefix, suffix, hasFloatingPlaceholder, onChange }) => (
    <Div mb="xl" position="relative">
        {label && (
            <Text fontSize={16} fontWeight="bold" mb="lg">
                {label}
            </Text>
        )}

        { value !== '' && hasFloatingPlaceholder && (
            <Div
                position="absolute"
                left={12}
                top={4}
                zIndex={1}
            >
                <Text
                    color="#64748B"
                >
                    {placeholder}
                </Text>
            </Div>
        )}

        <Input
            h={56}
            fontSize={16}
            borderColor="gray300"
            rounded="md"
            placeholder={placeholder}
            placeholderTextColor="#64748B"
            value={value}
            onChangeText={onChange}
            prefix={prefix}
            suffix={suffix}
            bg={bg || "white"}
        />
    </Div>
);

export default CustomInput;
