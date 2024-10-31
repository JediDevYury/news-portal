import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const MenuIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3 8V6h18v2H3Zm0 5h18v-2H3v2Zm0 5h18v-2H3v2Z"
      clipRule="evenodd"
    />
  </Svg>
);
