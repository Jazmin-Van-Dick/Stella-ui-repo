import { Div, Image, Text } from "react-native-magnus";
import React from "react";
import { StyleProp, ViewStyle, TouchableOpacity, Pressable } from "react-native";
import { Check } from "lucide-react-native";

interface ImageCardProps {
    image: any;
    text: string;
    isSelected?: boolean;
    onSelect?: () => void;
    style?: StyleProp<ViewStyle>;
}

const ImageCard: React.FC<ImageCardProps> = ({
    image,
    text,
    isSelected = false,
    onSelect,
    style,
}) => (
    <Pressable 
        onPress={onSelect}
        style={{
            width: '48.3%'
        }}
    >
        <Div
            bg={'white'}
            h={216}
            rounded={16}
            style={style}
            borderWidth={1.5}
            shadow={'sm'}
            overflow="hidden"
            borderColor={isSelected ? '#AB5B0B' : '#ECEDF1'}
        >
            
            <Image 
                source={image}
                flex={1}
            />

            <Text 
                color={isSelected ? "#AB5B0B" : "black"} 
                py={12}
                textAlign="center"
            >
                {text}
            </Text>
        </Div>
    </Pressable>
);

export default ImageCard;
