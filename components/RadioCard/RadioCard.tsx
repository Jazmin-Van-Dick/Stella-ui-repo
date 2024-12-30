import { Div, Text } from "react-native-magnus";
import React from "react";
import { StyleProp, ViewStyle, TouchableOpacity } from "react-native";

interface RadioCardProps {
    icon: React.ReactNode;
    iconActive: React.ReactNode;
    occasion: string;
    isSelected?: boolean;
    onSelect?: () => void;
    style?: StyleProp<ViewStyle>;
}

const RadioCard: React.FC<RadioCardProps> = ({
    icon,
    iconActive,
    occasion,
    isSelected = false,
    onSelect,
    style,
}) => (
    <TouchableOpacity 
        onPress={onSelect}
        style={{width: '100%', maxWidth: '45%'}}
        activeOpacity={.8}
    >
        <Div
            bg={'white'}
            px="md"
            py="md"
            mr="md"
            w={'100%'}
            rounded="lg"
            style={style}
            borderWidth={1.5}
            borderColor={isSelected ? '#AB5B0B' : '#ECEDF1'}
            position="relative"
        >
            <Div 
                w={13} 
                h={13}
                borderWidth={isSelected ? 4 : 1.33}
                borderColor={isSelected ? '#AB5B0B' : 'black'}
                rounded={'circle'}
                position="absolute"
                top={12}
                right={12}
            ></Div>
            
            { isSelected ? iconActive : icon }

            <Text 
                color={isSelected ? "#AB5B0B" : "black"} 
                mt="md"
                fontWeight="bold"
            >
                {occasion}
            </Text>
        </Div>
    </TouchableOpacity>
);

export default RadioCard;
