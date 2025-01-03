import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function WardrobeIcon({ bg } : IconProps) {
    return (
        <Svg 
            width="25" 
            height="25" 
            viewBox="0 0 25 25" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path 
                d="M1.38734 21.5L12.4766 12.7718L23.6047 21.5L1.38734 21.5Z" 
                stroke={bg ||"#B0B3BD"} 
                strokeWidth="2"
            />
            <Path 
                d="M9 7.49999C9 8.05228 9.44772 8.49999 10 8.49999C10.5523 8.49999 11 8.05228 11 7.49999H9ZM11.5 10.6364V12.5H13.5V10.6364H11.5ZM14 6.77272V8.13635H16V6.77272H14ZM11 7.49999V7H9V7.49999H11ZM12.5 5.5H12.7273V3.5H12.5V5.5ZM11 7C11 6.17157 11.6716 5.5 12.5 5.5V3.5C10.567 3.5 9 5.067 9 7H11ZM16 6.77272C16 4.96525 14.5348 3.5 12.7273 3.5V5.5C13.4302 5.5 14 6.06982 14 6.77272H16ZM13.6364 8.49999C12.4565 8.49999 11.5 9.45647 11.5 10.6364H13.5C13.5 10.561 13.5611 10.5 13.6364 10.5V8.49999ZM13.6364 10.5C14.9418 10.5 16 9.44175 16 8.13635H14C14 8.33718 13.8372 8.49999 13.6364 8.49999V10.5Z" 
                fill={bg ||"#B0B3BD"}
            />
        </Svg>
    );
}