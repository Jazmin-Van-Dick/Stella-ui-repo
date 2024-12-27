import { StyleSheet, Text, View, ViewProps } from "react-native";
import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { useThemeColor } from "@/hooks/useThemeColor";

export type IconProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  size?: number;
};
export default function Icon({
  lightColor,
  darkColor,
  size,
  ...props
}: IconProps) {
  const fill = useThemeColor({ light: lightColor, dark: darkColor }, "icon");

  let width: number;
  let height: number;

  if (size == undefined) {
    width = 63;
    height = 135;
  } else {
    width = size;
    height = size;
  }

  return (
    <Svg width={width} height={height} fill="none" {...props}>
      <G fill={fill}>
        <Path d="M31.498 0v135S21.678 67.502 0 67.502h31.498M31.498 135V0s9.82 67.502 31.499 67.502H31.499" />
      </G>
    </Svg>
  );
}

const styles = StyleSheet.create({});
