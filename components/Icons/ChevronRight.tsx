import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function ChevronRight({ bg } : IconProps) {
    return (
        <Svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path 
                d="M9 18L15 12L9 6" 
                stroke={ bg || "white" } 
                strokeWidth="2" 
                stroke-linecap="round"
            />
        </Svg>

    );
}