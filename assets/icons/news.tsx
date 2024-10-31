import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export const NewsIcon = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill={props.color}
      d="M4 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 19V7h2v12h15v2H4Zm4-4c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 6 15V3h17v12c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 21 17H8Zm0-2h13V5H8v10Zm2-3h4V7h-4v5Zm5 0h4v-2h-4v2Zm0-3h4V7h-4v2Z"
    />
  </Svg>
);
