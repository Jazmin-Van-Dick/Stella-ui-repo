import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
    bg?: string;
};

export default function Separator({ bg } : IconProps) {
    return (
        <Svg width="343" height="28" viewBox="0 0 343 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M0 13.8184H143" stroke="#E3E3E3"/>
            <Path d="M142 13.8185L201 13.8185C201 13.8185 171.5 18.1271 171.5 27.6367V13.8185" fill="#E3E3E3"/>
            <Path d="M142 13.8185L201 13.8185C201 13.8185 171.5 18.1271 171.5 27.6367V13.8185" stroke="#E3E3E3"/>
            <Path d="M201 13.8184L171.5 13.8184L142 13.8184C142 13.8184 171.5 9.5097 171.5 0.000109673V13.8184" fill="#E3E3E3"/>
            <Path d="M201 13.8184L171.5 13.8184M171.5 13.8184V0.000110077C171.5 9.5097 142 13.8184 142 13.8184L171.5 13.8184Z" stroke="#E3E3E3"/>
            <Path d="M200 13.8184H343" stroke="#E3E3E3"/>
        </Svg>
    );
}