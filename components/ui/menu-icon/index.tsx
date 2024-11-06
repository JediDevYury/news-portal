import { colors } from "@/constants";

import { FunctionComponent } from "react";

type MenuIconProps = {
  active?: boolean;
  size: number;
  IconComponent: FunctionComponent<{
    color: string;
    width: number;
    height: number;
  }>;
};

export const MenuIcon = ({
  size,
  active = false,
  IconComponent,
}: MenuIconProps) => {
  const color = active ? colors.brand[100] : colors.brand[700];

  return <IconComponent color={color} width={size} height={size} />;
};
