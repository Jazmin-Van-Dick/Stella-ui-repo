import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export default function CameraFrame() {
    return (
        <Svg width="315" height="459" viewBox="0 0 315 459" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="2.5" y="2.5" width="310" height="454" rx="5.5" stroke="white"/>
            <Path d="M21.4375 2H8C4.68629 2 2 4.68629 2 8V30.4375M2 428.563V451C2 454.314 4.68629 457 8 457H21.4375M293.562 457H307C310.314 457 313 454.314 313 451V428.563M313 30.4375V8C313 4.68629 310.314 2 307 2H293.562" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </Svg>
    );
}