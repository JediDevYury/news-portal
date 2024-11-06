import colors from "tailwindcss/colors";

import { Pressable, View } from "react-native";

import { Href, Link } from "expo-router";

import { PlusIcon } from "@/assets/icons";

type FabProps = {
  href: Href;
};

export const Fab = (props: FabProps) => {
  return (
    <Link href={props.href} asChild>
      <Pressable hitSlop={20} className="absolute bottom-2 right-2 self-center">
        <View className="p-4 bg-brand-100 rounded-[40]">
          <PlusIcon width={24} height={24} color={colors.white} />
        </View>
      </Pressable>
    </Link>
  );
};
