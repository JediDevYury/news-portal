import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const PlusIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.929 4.498v6.429H4.5v2.143h6.429v6.428h2.142v-6.429H19.5v-2.142h-6.429V4.498H10.93Z"
      clipRule="evenodd"
    />
  </Svg>
);
