import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function EditIcon({ bg } : IconProps) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path 
                fill-rule="evenodd" 
                clip-rule="evenodd" 
                d="M16.4142 3.99985C15.6332 3.2188 14.3668 3.2188 13.5858 3.99985L5.58579 11.9998C5.21071 12.3749 5 12.8836 5 13.4141V14.9998C5 16.1044 5.89543 16.9998 7 16.9998H8.58579C9.11622 16.9998 9.62493 16.7891 10 16.4141L18 8.41406C18.7811 7.63301 18.781 6.36668 18 5.58564L16.4142 3.99985ZM7 13.4141L15 5.41406L16.5858 6.99985L8.58579 14.9998H7L7 13.4141ZM4 18.9998C3.44772 18.9998 3 19.4476 3 19.9998C3 20.5521 3.44772 20.9998 4 20.9998H20C20.5523 20.9998 21 20.5521 21 19.9998C21 19.4476 20.5523 18.9998 20 18.9998H4Z" 
                fill={bg || "black"}
            />
        </Svg>
    );
}