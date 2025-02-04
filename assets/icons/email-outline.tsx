import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const EmailOutlineIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#8C8C8C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 3.998h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-12c0-1.1.9-2 2-2Z"
    />
    <Path
      stroke="#8C8C8C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m22 5.998-10 7-10-7"
    />
  </Svg>
);
