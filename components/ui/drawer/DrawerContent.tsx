import { DrawerItems } from "@/components/ui/drawer/DrawerItems";
import { MenuIcon } from "@/components/ui/menu-icon";
import { Text } from "@/components/ui/text";
import { ICON_SIZE } from "@/constants";
import { useUserStore } from "@/store/userStore";
import { Roles } from "@/types";

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Image, Pressable, StyleSheet, View } from "react-native";

import { useRouter } from "expo-router";

import LogoutIcon from "@/assets/icons/logout";

export function DrawerContent(props: DrawerContentComponentProps) {
  const { setIsAuthenticatedUser } = useUserStore();
  const router = useRouter();

  const logOut = async () => {
    setIsAuthenticatedUser(false);
    router.replace("/(auth)/sign-in");
  };

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View className="border-secondary-100 border-b p-4 flex flex-row justify-between items-center">
        <View className="flex flex-row items-center gap-4">
          <Image
            source={require("@/assets/images/avatar.png")}
            className="w-12 h-12 border border-secondary-100 aspect-square"
            resizeMode={"contain"}
          />
          <View>
            <Text className="text-brand-600 gap-1" variant="h6">
              User Name
            </Text>
            <View className="border-t-[1px] border-secondary-100">
              <Text className="text-secondary-500" variant="textMediumSmall">
                {Roles.ADMIN.toLocaleUpperCase()}
              </Text>
            </View>
          </View>
        </View>
        <Pressable className="ml-3" onPress={logOut}>
          {({ pressed }) => (
            <MenuIcon
              active={pressed}
              size={ICON_SIZE}
              IconComponent={LogoutIcon}
            />
          )}
        </Pressable>
      </View>
      <DrawerItems state={props.state} descriptors={props.descriptors} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 26,
  },
});
