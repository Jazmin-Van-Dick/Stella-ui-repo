import { Div, Input, Text } from "react-native-magnus";
import React from "react";

interface CustomInputProps {
    label: string;
    placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, placeholder }) => (
    <Div mb="xl">
        <Text fontSize={16} fontWeight="bold" mb="lg">
            {label}
        </Text>

        <Input
            h={56}
            fontSize={16}
            borderColor="gray300"
            rounded="md"
            placeholder={placeholder}
            placeholderTextColor="#64748B"
        />
    </Div>
);

export default CustomInput;
