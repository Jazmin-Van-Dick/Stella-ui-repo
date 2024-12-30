import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
     bg?: string;
};

export default function PinIcon({ bg } : IconProps) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M20 5H17V9.58579L18.4142 11C18.7893 11.3751 19 11.8838 19 12.4142V14C19 15.1046 18.1046 16 17 16H13V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V16H7C5.89543 16 5 15.1046 5 14V12.4142C5 11.8838 5.21071 11.3751 5.58579 11L7 9.58579V5H4V3H9H15H20V5ZM12 14H17V12.4142L15.5858 11C15.2107 10.6249 15 10.1162 15 9.58579V5H9V9.58579C9 10.1162 8.78929 10.6249 8.41421 11L7 12.4142L7 14H12Z" fill="#64748B"/>
        </Svg>
    );
}