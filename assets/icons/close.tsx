import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CloseIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      d="m19 6.409-1.41-1.41-5.59 5.59-5.59-5.59L5 6.409l5.59 5.59L5 17.589l1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59L19 6.409Z"
    />
  </Svg>
);
export default CloseIcon;
