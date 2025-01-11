import { ChevronDown } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { Div, Text, Button } from "react-native-magnus";

interface CustomSelectProps {
    label?: string;
    placeholder: string;
    value?: any;
    options: { label: string; value: any }[];
    bg?: string;
    hasFloatingPlaceholder?: boolean;
    onChange?: (value: any) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    placeholder,
    value,
    options,
    bg = "white",
    onChange = () => {},
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionSelect = (selectedValue: any) => {
        onChange(selectedValue);
        setIsOpen(false);
    };

    return (
        <Div mb="xl" position="relative">
            <Pressable
                onPress={() => setIsOpen((prev) => !prev)}
            >
                <Div
                    h={56}
                    bg={bg}
                    borderColor="gray300"
                    borderWidth={1}
                    rounded="md"
                    px={16}
                    alignItems="center"
                    row
                >
                    {value && (
                        <Div
                            position="absolute"
                            left={12}
                            top={4}
                            zIndex={1}
                        >
                            <Text
                                color="#64748B80"
                            >
                                {placeholder}
                            </Text>
                        </Div>
                    )}
                    
                    <Text color={value ? "black" : "#64748B80"} fontSize={16} flex={1}>
                        {value
                            ? options.find((option) => option.value === value)?.label
                            : placeholder}
                    </Text>

                    <ChevronDown color={'black'} />
                </Div>
            </Pressable>

            {isOpen && (
                <Div
                    bg="white"
                    borderColor="gray300"
                    borderWidth={1}
                    rounded="md"
                    mt="xs"
                    shadow="md"
                    position="absolute"
                    zIndex={1000}
                    w="100%"
                >
                    {options.map((option, index) => (
                        <Button
                            key={index}
                            block
                            px="lg"
                            py="md"
                            bg="transparent"
                            justifyContent="flex-start"
                            onPress={() => handleOptionSelect(option.value)}
                        >
                            <Text>{option.label}</Text>
                        </Button>
                    ))}
                </Div>
            )}
        </Div>
    );
};

export default CustomSelect;
