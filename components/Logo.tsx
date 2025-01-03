import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface PropsIcon {
  w?: number,
  h?: number,
  bg?: string,
}

export default function Logo({h, w, bg} : PropsIcon) {
  return (
    <Svg width={w ||51} height={h || 108} viewBox="0 0 51 108" fill="none">
      <Path d="M25.3503 0V108.002C25.3503 108.002 17.4632 54.001 0.0554199 54.001H25.3503" fill={bg || "#1E1E20"}/>
      <Path d="M25.3503 108.002V0C25.3503 0 33.2375 54.001 50.6453 54.001H25.3503" fill={bg || "#1E1E20"}/>
    </Svg>
  );
}