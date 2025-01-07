import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function SaveIcon({ bg } : IconProps) {
    return (
        <Svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path 
                d="M1 0.75H11C11.1381 0.75 11.25 0.861929 11.25 1V14.3396C11.25 14.5279 11.0496 14.6486 10.8831 14.5605L6.54275 12.2641C6.00743 11.9808 5.36371 11.9945 4.8409 12.3002L1.1262 14.4726C0.959541 14.57 0.75 14.4498 0.75 14.2568V1C0.75 0.861929 0.861929 0.75 1 0.75Z" 
                stroke={bg || "#7C4D1E"} 
                stroke-width="1.5"
            />
        </Svg>
    );
}