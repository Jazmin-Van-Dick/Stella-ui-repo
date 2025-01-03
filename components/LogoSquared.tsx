import React from 'react';
import Svg, { Path, Rect, G, Defs, ClipPath } from 'react-native-svg';

interface Variables {
  w?: string;
  h?: string;
  inverted?: boolean;
}
 
export default function LogoSquared({w, h, inverted} : Variables) {
  return (
    <Svg width={w ? w : '64'} height={h ? h : '64'} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clip-path="url(#clip0_1888_39513)">
            <Rect width="64" height="64" rx="16" fill={inverted ? "#F9F4EE" : "#AB5B0B"}/>
            <Path d="M31.6472 5V59C31.6472 59 27.7037 32 19 32H31.6472" fill={inverted ? "#AB5B0B" :"white"}/>
            <Path d="M31.6465 59V5C31.6465 5 35.59 32 44.2937 32H31.6465" fill={inverted ? "#AB5B0B" :"white"}/>
        </G>

        <Defs>
            <ClipPath id="clip0_1888_39513">
              <Rect width="64" height="64" fill={inverted ? "#AB5B0B" :"white"}/>
            </ClipPath>
        </Defs>
    </Svg>
  );
}