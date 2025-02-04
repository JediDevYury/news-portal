import { useState } from "react";
import { LayoutChangeEvent } from "react-native";

export const useHandleLayout = () => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height, width } = event.nativeEvent.layout;
    setDimensions({
      height,
      width,
    });
  };

  return {
    ...dimensions,
    handleLayout,
  };
};
