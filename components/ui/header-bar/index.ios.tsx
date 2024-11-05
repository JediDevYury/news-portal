import { Text } from "@/components/ui/text";
import { colors, ICON_SIZE } from "@/constants";

import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ViewProps,
} from "react-native";

import { SearchIcon } from "@/assets/icons";
import CloseIcon from "@/assets/icons/close";

import { useSearchFilter } from "./useSearchFilter";

type Props = ViewProps & Pick<BottomTabHeaderProps, "options" | "navigation">;

const HeaderBar = (props: Props) => {
  const {
    query,
    setQuery,
    handleClearButtonPress,
    handleLeftButtonPress,
    handleSearchInputFocus,
    handleSearchInputBlur,
    refSearchInput,
  } = useSearchFilter();

  return (
    <>
      <View className="mb-[10]">
        <View style={styles.headerTitleContainer}>
          <Text variant="h6Medium">{props.options.title}</Text>
        </View>
        <View style={styles.searchBarContainer}>
          <Pressable onPress={handleLeftButtonPress} className="p-[4]">
            <SearchIcon width={20} height={20} color={colors.secondary[400]} />
          </Pressable>
          <TextInput
            ref={refSearchInput}
            style={styles.searchInput}
            placeholder="Search"
            value={query}
            placeholderTextColor={colors.secondary[400]}
            selectionColor={colors.black}
            onChangeText={setQuery}
            onBlur={handleSearchInputBlur}
            onFocus={handleSearchInputFocus}
          />
          {query.length > 0 && (
            <Pressable onPress={handleClearButtonPress}>
              <CloseIcon
                width={ICON_SIZE}
                height={ICON_SIZE}
                color={colors.secondary[400]}
              />
            </Pressable>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerTitleContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    backgroundColor: colors.secondary[50],
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 4,
    marginHorizontal: 10,
    backgroundColor: colors.secondary[100],
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
});

export default HeaderBar;
