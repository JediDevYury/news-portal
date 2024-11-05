import { Text } from "@/components/ui/text";
import { colors, ICON_SIZE, typography } from "@/constants";
import { checkPlatform } from "@/utils";

import { DrawerHeaderProps } from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ViewProps,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { MenuIcon, SearchIcon } from "@/assets/icons";
import ArrowBack from "@/assets/icons/arrow-back";
import CloseIcon from "@/assets/icons/close";

import { useSearchFilter } from "./useSearchFilter";

type Props = ViewProps & Pick<DrawerHeaderProps, "options" | "navigation">;

const HeaderBar = (props: Props) => {
  const {
    query,
    setQuery,
    searchInputHasFocus,
    handleSearchInputFocus,
    handleSearchInputBlur,
    refSearchInput,
    handleLeftButtonPress,
    handleClearButtonPress,
  } = useSearchFilter();

  const insets = useSafeAreaInsets();

  const inputBoxStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(searchInputHasFocus ? 1 : 0, {
        duration: 400,
      }),
      zIndex: withTiming(searchInputHasFocus ? 30 : 0, {
        duration: 100,
      }),
    };
  });

  const titleBoxStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(searchInputHasFocus ? 0 : 1, {
        duration: 400,
      }),
      zIndex: withTiming(searchInputHasFocus ? 0 : 30, {
        duration: 100,
      }),
    };
  });

  return (
    <>
      <View
        style={[
          styles.container,
          {
            marginTop: insets.top,
          },
        ]}
      >
        <Animated.View
          className="absolute top-0 py-[20] px-[58] w-full h-full"
          style={[styles.animatedContainer, inputBoxStyle]}
        >
          <Pressable
            style={styles.iconLeftStyle}
            onPress={handleLeftButtonPress}
          >
            <ArrowBack
              color={colors.black}
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </Pressable>
          <TextInput
            ref={refSearchInput}
            autoCapitalize="none"
            placeholder={"Search"}
            placeholderTextColor={colors.secondary[400]}
            value={query}
            onFocus={handleSearchInputFocus}
            onBlur={handleSearchInputBlur}
            onChangeText={setQuery}
            selectionColor={colors.secondary[400]}
            className="w-full text-black"
            style={typography.subtitle1}
          />
          {query.length > 0 && (
            <Pressable
              style={styles.iconRightStyle}
              onPress={handleClearButtonPress}
            >
              <CloseIcon
                color={colors.black}
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            </Pressable>
          )}
        </Animated.View>
        <Animated.View
          className="relative px-[58] w-full justify-center"
          style={[styles.animatedContainer, titleBoxStyle]}
        >
          {!checkPlatform().isIOS && (
            <Pressable
              style={styles.iconLeftStyle}
              onPress={() => {
                props.navigation.dispatch(DrawerActions.openDrawer);
              }}
              hitSlop={8}
            >
              <MenuIcon
                width={ICON_SIZE}
                height={ICON_SIZE}
                color={colors.black}
              />
            </Pressable>
          )}
          <Text variant="h5Medium">{props.options.title}</Text>
          <Pressable
            style={styles.iconRightStyle}
            onPress={handleLeftButtonPress}
            hitSlop={8}
          >
            <SearchIcon
              width={ICON_SIZE}
              height={ICON_SIZE}
              color={colors.black}
            />
          </Pressable>
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    backgroundColor: colors.secondary[50],
  },
  animatedContainer: {
    paddingVertical: 20,
  },
  iconLeftStyle: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: 8 }],
    left: 12,
  },
  iconRightStyle: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: 8 }],
    right: 12,
  },
});

export default HeaderBar;
