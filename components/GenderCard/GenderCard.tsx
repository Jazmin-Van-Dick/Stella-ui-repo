import { Div, Text } from "react-native-magnus";
import React from "react";
import { Pressable } from "react-native";
import FemaleIllustration from "../FemaleIllustration";
import MaleIllustration from "../MaleIllustration";
import ActiveIllustration from "./ActiveIllustration";

interface GenderCardProps {
    gender: 'female' | 'male';
    isSelected: boolean;
    onSelect: (gender: 'female' | 'male') => void;
}

const GenderCard: React.FC<GenderCardProps> = ({ 
    gender, 
    isSelected, 
    onSelect 
}) => {
    return (
        <Pressable onPress={() => onSelect(gender)}>
            <Div
                position="relative"
                p={16}
                bg="white"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
                rounded={16}
                borderColor={isSelected ? "#4E4E4E" : 'white'}
                borderWidth={1}
                shadow={isSelected ? 'sm' : 0}
            >
                <Div
                    bg="#F9EFE5"
                    w={125}
                    h={125}
                    rounded={'circle'}
                    overflow="hidden"
                    justifyContent="flex-start"
                    alignItems="center"
                    pt={gender === 'female' ? 0 : 10}
                >
                    { gender === 'female' ? (
                        <FemaleIllustration />
                    ) : (
                        <MaleIllustration />
                    )}
                </Div>

                { isSelected && (
                    <Div
                        position="absolute"
                        left={5}
                        top={8}
                    >
                        <ActiveIllustration />
                    </Div>
                )}

                <Text
                    mt={16}
                    fontSize={16}
                    fontFamily="Inter"
                    textAlign="center"
                >
                    { gender === 'female' ? 'Feminine' : 'Masculine'}
                </Text>
            </Div>
        </Pressable>
    );
};

export default GenderCard;