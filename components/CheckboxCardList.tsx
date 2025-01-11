import { Div, Text } from "react-native-magnus";
import React from "react";
import { StyleProp, ViewStyle, TouchableOpacity, Pressable } from "react-native";
import { Check } from "lucide-react-native";

interface RadioCardProps {
    icon: React.ReactNode;
    iconActive: React.ReactNode;
    text: string;
    isSelected?: boolean;
    onSelect?: () => void;
    style?: StyleProp<ViewStyle>;
}

const RadioCard: React.FC<RadioCardProps> = ({
    icon,
    iconActive,
    text,
    isSelected = false,
    onSelect,
    style,
}) => (
    <Pressable 
        onPress={onSelect}
    >
        <Div
            row
            justifyContent="space-between"
            alignItems="center"
            bg={'white'}
            p={10}
            w={'100%'}
            h={52}
            rounded={8}
            style={style}
            borderWidth={1.5}
            borderColor={isSelected ? '#AB5B0B' : '#ECEDF1'}
        >
            
            { isSelected ? iconActive : icon }

            <Text 
                color={isSelected ? "#AB5B0B" : "black"} 
                fontWeight="bold"
                flex={1}
                ml={8}
            >
                {text}
            </Text>

            <Div 
                w={16} 
                h={16}
                borderWidth={1.33}
                borderColor={isSelected ? '#AB5B0B' : 'black'}
                rounded={1.33}
                alignItems="center"
                justifyContent="center"
            >
                {isSelected && (
                    <Check color={'#AB5B0B'} size={12}/>
                )}
            </Div>
        </Div>
    </Pressable>
);

export default RadioCard;
