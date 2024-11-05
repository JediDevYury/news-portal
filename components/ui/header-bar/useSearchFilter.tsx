import { useSearchFilterStore } from "@/store/searchFilterStore";

import { useCallback, useRef, useState } from "react";
import { TextInput } from "react-native";

export const useSearchFilter = () => {
  const { query, setQuery } = useSearchFilterStore();
  const [searchInputHasFocus, setSearchInputHasFocus] = useState(false);

  const refSearchInput = useRef<TextInput>(null);

  const handleSearchInputFocus = () => {
    setSearchInputHasFocus(true);
  };

  const handleSearchInputBlur = () => {
    setSearchInputHasFocus(false);
  };

  const handleLeftButtonPress = useCallback(() => {
    const { current: input } = refSearchInput;

    if (searchInputHasFocus && input) {
      input.blur();
      setQuery("");
      return;
    }

    input?.focus();
    setSearchInputHasFocus(true);
  }, [searchInputHasFocus]);

  const handleClearButtonPress = () => {
    setQuery("");
  };

  return {
    query,
    setQuery,
    searchInputHasFocus,
    refSearchInput,
    handleSearchInputFocus,
    handleSearchInputBlur,
    handleLeftButtonPress,
    handleClearButtonPress,
  };
};
