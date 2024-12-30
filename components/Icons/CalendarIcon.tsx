import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function CalendarIcon({ bg } : IconProps) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path 
                d="M9 2C9 1.44772 8.55228 1 8 1C7.44772 1 7 1.44772 7 2H9ZM17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2H17ZM5 6H19V4H5V6ZM20 7V19H22V7H20ZM19 20H5V22H19V20ZM4 19V7H2V19H4ZM5 20C4.44772 20 4 19.5523 4 19H2C2 20.6569 3.34315 22 5 22V20ZM20 19C20 19.5523 19.5523 20 19 20V22C20.6569 22 22 20.6569 22 19H20ZM19 6C19.5523 6 20 6.44772 20 7H22C22 5.34315 20.6569 4 19 4V6ZM5 4C3.34315 4 2 5.34315 2 7H4C4 6.44772 4.44772 6 5 6V4ZM9 5V2H7V5H9ZM17 5V2H15V5H17ZM4 12H20V10H4V12Z" 
                fill={bg ? bg : "#757575"}
            />
        </Svg>
    );
}