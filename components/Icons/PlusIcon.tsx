import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function PlusIcon({ bg } : IconProps) {
    return (
        <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M1 7H13M7 1L7 13" stroke={ bg || "#3A405A"} strokeWidth="2" stroke-linecap="round"/>
        </Svg>
    );
}