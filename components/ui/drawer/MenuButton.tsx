import { MenuIcon } from "@/components/ui/menu-icon";

import { DrawerActions } from "@react-navigation/native";
import { FunctionComponent } from "react";
import { Pressable, PressableProps } from "react-native";

import { useNavigation } from "expo-router";

export function MenuButton({
  icon,
  ...props
}: PressableProps & { icon: FunctionComponent }) {
  const navigation = useNavigation();

  const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());

  return (
    <Pressable {...props} className="mx-3 p-2" onPress={openDrawer}>
      {({ pressed }) => (
        <MenuIcon active={pressed} size={24} IconComponent={icon} />
      )}
    </Pressable>
  );
}
