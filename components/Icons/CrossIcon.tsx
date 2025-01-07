import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  bg?: string;
};


export default function CrossIcon({bg} : IconProps) {
  return (
    <Svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path 
        d="M18 6L6 18" 
        stroke={bg || "#CCD2E3" }
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M6 6L18 18" 
        stroke={bg || "#CCD2E3" }
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}