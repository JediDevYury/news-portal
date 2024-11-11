import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export const KeyIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.color}
      d="M11.9 10.5H22v4a1 1 0 1 1-2 0v-2h-2v2a1 1 0 1 1-2 0v-2h-4.1c-.513 2.476-2.884 4.216-5.4 3.962-2.517-.254-4.493-2.433-4.5-4.962-.003-2.535 1.975-4.725 4.498-4.98 2.522-.255 4.897 1.495 5.402 3.98Zm-4.9 4c1.634 0 3-1.366 3-3s-1.366-3-3-3-3 1.366-3 3 1.366 3 3 3Z"
    />
  </Svg>
);
