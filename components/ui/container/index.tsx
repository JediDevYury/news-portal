import { containerStyles } from "@/styles";
import { twMerge } from "tailwind-merge";

import { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

type Variants = {
  padding: "small" | "medium" | "large" | "default";
  background: "primary" | "secondary" | "white";
};

export type ContainerProps = {
  [K in keyof Variants]?: Variants[K];
} & ViewProps;

export const Container = ({
  padding,
  background,
  children,
  className,
  ...props
}: PropsWithChildren<ContainerProps>) => {
  return (
    <View
      className={twMerge(containerStyles({ padding, background }), className)}
      {...props}
    >
      {children}
    </View>
  );
};
