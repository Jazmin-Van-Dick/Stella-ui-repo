import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

import { useThemeColor } from "@/hooks/useThemeColor";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

export type EllipseProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function Ellipse({
  lightColor,
  darkColor,
  ...otherProps
}: EllipseProps) {
  const fill: string = useThemeColor(
    { light: lightColor, dark: darkColor },
    "ellipseColor"
  ).toString();

  const opacity = useThemeColor({}, "ellipseOpacity");
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={357}
      height={318}
      {...otherProps}
    >
      <Path
        fill={fill}
        opacity={opacity}
        d="M155.93 10.137c77.144-16.53 181.91-21.115 199.387 60.456 9 42.007-20.72 67.213-39.572 110.501-17.756 40.77-16.273 107.24-53.69 128.514-39.083 22.222-98.387-9.174-133.844-29.681-7.094-4.103-13.623-9.264-19.082-15.376-49.563-55.494-27.623-62.414-83.753-121.199C11.367 128.68.89 110.231.147 89.959-3.993-23.009 84.653 25.41 155.93 10.137Z"
      />
    </Svg>
  );
}
