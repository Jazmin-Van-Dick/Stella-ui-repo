import { Div, Text } from "react-native-magnus";
import React from "react";
import { StyleProp, ViewStyle, TouchableOpacity } from "react-native";

interface SelectionCardProps {
    icon: React.ReactNode;
    iconActive?: React.ReactNode;
    text: string;
    isSelected?: boolean;
    onSelect?: () => void;
    style?: StyleProp<ViewStyle>;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
    icon,
    iconActive,
    text,
    isSelected = false,
    onSelect,
    style,
}) => (
    <TouchableOpacity 
        onPress={onSelect}
        style={{width: '100%', maxWidth: '50%'}}
        activeOpacity={.8}
    >
        <Div
            px={16}
            py={16}
            mr="md"
            w={'100%'}
            rounded="lg"
            style={style}
            borderWidth={1.5}
            borderColor={isSelected ? '#AB5B0B' : 'transparent'}
            bg={isSelected ? '#F9F4EE' : 'transparent'}
            position="relative"
            alignItems="center"
        >
            <Div
                h={139}
                justifyContent="center"
            >
                { isSelected && iconActive 
                    ? iconActive 
                    : icon 
                }
            </Div>

            <Text 
                color={"black"} 
                mt={16}
                textAlign="center"
                fontSize={16}
            >
                {text}
            </Text>
        </Div>
    </TouchableOpacity>
);

export default SelectionCard;
