import React from "react";
import { Div, Text } from "react-native-magnus";

interface ChipProps {
    icon?: React.ReactNode;
    text: string;
}

const Chip = ({icon, text} : ChipProps) => {
    return (
        <Div
            row
            rounded={'circle'}
            py={4}
            px={6}
            h={28}
            alignItems="center"
            bg="#ECEDF1"
            style={{
                gap:2
            }}
        >
            {icon && (
                <>
                    {icon}
                </>
            )}

            <Text
                fontWeight="bold"
                fontSize={14}
                color="#1E1E20"
            >
                {text}
            </Text>
        </Div>
    );
}

export default Chip;