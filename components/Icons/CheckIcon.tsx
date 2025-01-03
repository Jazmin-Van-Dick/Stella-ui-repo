import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  bg?: string;
};


export default function CheckIcon({bg} : IconProps) {
  return (
    <Svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M23.4934 1.40917L9.71243 14.6065L3.50644 8.70044C2.93318 8.15489 2.00393 8.15489 1.42994 8.70044C0.856686 9.246 0.856686 10.1303 1.42994 10.6759L8.69584 17.5914C9.26909 18.1362 10.1983 18.1362 10.7723 17.5914C10.8384 17.5285 10.895 17.46 10.9463 17.3888L25.5706 3.38527C26.1431 2.83972 26.1431 1.95537 25.5706 1.40917C24.9966 0.863612 24.0674 0.863612 23.4934 1.40917Z" fill={bg || '#5FAD76'} stroke={bg || '#5FAD76'}/>
    </Svg>
  );
}