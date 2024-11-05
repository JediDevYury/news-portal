import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const ArrowBack = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z"
    />
  </Svg>
);
export default ArrowBack;
