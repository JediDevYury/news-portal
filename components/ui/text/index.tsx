import { typography } from "@/constants/typography";
import { clsx } from "clsx";

import type { TextProps } from "react-native";
import { Text as RNText } from "react-native";

type Variant = keyof typeof typography;

interface CustomTextProps extends TextProps {
  variant: Variant;
  active?: boolean;
}

export const Text = ({
  variant,
  style,
  active = false,
  ...props
}: CustomTextProps) => {
  const textStyle = typography[variant];

  return (
    <RNText
      className={clsx({
        "text-brand-100": active,
      })}
      style={[textStyle, style]}
      {...props}
    />
  );
};
