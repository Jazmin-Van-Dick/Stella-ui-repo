import { Div } from "react-native-magnus";
import React from "react";
import { Image } from "react-native";

interface BrandCardProps {
    name: string;
    logo: any;
    selected: boolean;
    onSelect: () => void;
}

const BrandCard: React.FC<BrandCardProps> = ({ name, logo, selected, onSelect }) => (
    <Div 
        w={100} 
        h={100} 
        p={16}
        justifyContent="center"
        alignItems="center"
        shadow={'sm'}
        bg={"white"}
        rounded={16}
        overflow="hidden"
        onTouchEnd={onSelect}
        borderWidth={2}
        borderColor={selected ? 'gray900' : 'white'}
    >
        <Image 
            source={logo} 
            alt={name}
            style={{
                maxWidth: '100%', 
                objectFit: 'contain',
                opacity: selected ? 0.7 : 1,
            }}  
        />
    </Div>
);

export default BrandCard;