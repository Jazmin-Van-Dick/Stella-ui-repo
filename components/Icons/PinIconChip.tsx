import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

interface IconProps {
     bg?: string;
};

export default function PinIconChip({ bg } : IconProps) {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M4.91935 8.72067C3.03092 4.94381 5.77734 0.5 10 0.5C14.2227 0.5 16.9691 4.9438 15.0807 8.72066L10 18.882L4.91935 8.72067Z" fill="#0C0D12" stroke="black"/>
            <Circle cx="10" cy="6" r="2" fill="white"/>
        </Svg>

    );
}