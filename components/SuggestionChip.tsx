import React, { useState } from "react";
import { Pressable } from "react-native";
import { Div, Text } from "react-native-magnus";

interface ChipProps {
  text: string;
  isActive?: boolean;
  onToggle?: (text: string, isActive: boolean) => void;
}

const Chip = ({
  text,
  isActive: initialActive = false,
  onToggle,
}: ChipProps) => {
  const [isActive, setIsActive] = useState(initialActive);

  const handlePress = () => {
    const newActiveState = !isActive;
    setIsActive(newActiveState);
    onToggle?.(text, newActiveState);
  };

  return (
    <Pressable
        onPress={handlePress}
    >
        <Div
            row
            rounded="circle"
            py={6}
            px={12}
            h={32}
            alignItems="center"
            borderWidth={1}
            borderColor="#D8D9DE"
            bg={isActive ? '#D8D9DE' : 'white'}
            style={{
                gap: 2,
            }}
            >
            <Text
                fontWeight="bold"
                fontSize={14}
                color={"#3A405A"}
            >
                {text}
            </Text>
        </Div>
    </Pressable>
  );
};

export default Chip;
