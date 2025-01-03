import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function EventIcon({ bg } : IconProps) {
    return (
        <Svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path 
                d="M16 4.5C14.4087 6.0913 13.5147 8.24956 13.5147 10.5C13.5147 12.7504 14.4087 14.9087 16 16.5C17.5913 18.0913 19.7496 18.9853 22 18.9853C24.2504 18.9853 26.4087 18.0913 28 16.5C28 18.8734 27.2962 21.1935 25.9776 23.1668C24.6591 25.1402 22.7849 26.6783 20.5922 27.5866C18.3995 28.4948 15.9867 28.7324 13.6589 28.2694C11.3312 27.8064 9.19295 26.6635 7.51472 24.9853C5.83649 23.3071 4.6936 21.1689 4.23058 18.8411C3.76756 16.5133 4.0052 14.1005 4.91345 11.9078C5.8217 9.71509 7.35977 7.84094 9.33316 6.52236C11.3066 5.20379 13.6266 4.5 16 4.5Z" 
                stroke="#1A1A1A" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </Svg>
    );
}