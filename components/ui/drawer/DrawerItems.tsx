import { MenuIcon } from "@/components/ui/menu-icon";
import { Text } from "@/components/ui/text";
import { clsx } from "clsx";

import { DrawerDescriptorMap } from "@react-navigation/drawer/src/types";
import { DrawerNavigationState, ParamListBase } from "@react-navigation/native";
import { Pressable, View } from "react-native";

import { Href, useRouter } from "expo-router";

import { LocationIcon, NewsIcon, TeamIcon } from "@/assets/icons";

type DrawerItemProps = {
  state: DrawerNavigationState<ParamListBase>;
  descriptors: DrawerDescriptorMap;
};

const ICONS = [NewsIcon, TeamIcon, LocationIcon];

export function DrawerItems({ state, descriptors }: DrawerItemProps) {
  const router = useRouter();

  return (
    <View>
      {state.routes.map((route, index) => {
        const isActive = state.routes[state.index].name === route.name;

        return (
          <Pressable
            key={route.key}
            onPress={() => router.navigate(route.name as Href<string>)}
          >
            {({ pressed }) => {
              const active = pressed || isActive;

              return (
                <View
                  className={clsx("p-4 flex-row items-center gap-4", {
                    "bg-secondary-50": active,
                  })}
                >
                  <MenuIcon
                    active={active}
                    size={24}
                    IconComponent={ICONS[index]}
                  />
                  <Text active={active} variant="body2">
                    {descriptors[route.key].options.title}
                  </Text>
                </View>
              );
            }}
          </Pressable>
        );
      })}
    </View>
  );
}
