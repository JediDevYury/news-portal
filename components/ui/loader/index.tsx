import { containerStyles, ContainerVariants } from "@/styles";

import { View } from "react-native";
import { SvgProps } from "react-native-svg";

import LoaderIcon from "@/assets/icons/loader";

type LoaderProps = {
  background?: ContainerVariants["background"];
  color?: SvgProps["color"];
};

export const Loader = ({ background, color }: LoaderProps) => {
  return (
    <View className={containerStyles({ background: background ?? "white" })}>
      <LoaderIcon width={64} height={64} color={color} />
    </View>
  );
};
