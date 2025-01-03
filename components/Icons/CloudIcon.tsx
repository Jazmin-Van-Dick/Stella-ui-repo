import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function CloudIcon({ bg } : IconProps) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Path d="M20.2699 18.6797C19.2799 19.5897 17.9799 20.0897 16.6299 20.0797H5.53994C0.869942 19.7397 0.859942 12.9397 5.53994 12.5997H5.58994C2.88994 5.05966 12.1199 1.33966 15.9999 6.02966V6.03966C16.6999 6.89966 17.2299 8.03966 17.4699 9.48966C18.7999 9.65966 19.8799 10.3097 20.6499 11.2297C22.3999 13.2997 22.5499 16.6797 20.2699 18.6797Z" stroke="#171717" strokeWidth="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M7.25984 13.0096C6.73984 12.7496 6.16984 12.6096 5.58984 12.5996" stroke="#171717" strokeWidth="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M15.8501 9.91977C16.3701 9.65977 16.9401 9.51977 17.5201 9.50977" stroke="#171717" strokeWidth="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M21.97 8.5C21.97 9.6 21.46 10.59 20.65 11.23C19.88 10.31 18.8 9.66 17.47 9.49C17.23 8.04 16.7 6.9 16 6.04V6.03C16.63 5.39 17.51 5 18.47 5C20.4 5 21.97 6.57 21.97 8.5Z" stroke="#171717" strokeWidth="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    );
}