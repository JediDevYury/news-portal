import { containerStyles } from "@/styles";

import { View } from "react-native";

import LoaderIcon from "@/assets/icons/loader";

export const Loader = () => {
  return (
    <View className={containerStyles({ background: "white" })}>
      <LoaderIcon width={64} height={64} />
    </View>
  );
};
