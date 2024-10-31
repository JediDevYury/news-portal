import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const SearchIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      d="M10 18.001a7.951 7.951 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10.001c0-4.41-3.589-8-8-8s-8 3.59-8 8c0 4.411 3.589 8 8 8Zm0-14c3.309 0 6 2.691 6 6 0 3.31-2.691 6-6 6s-6-2.69-6-6c0-3.309 2.691-6 6-6Z"
    />
  </Svg>
);
