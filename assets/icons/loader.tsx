import * as React from "react";
import { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path, SvgProps } from "react-native-svg";

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const LoaderIcon = (props: SvgProps) => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    // Infinite rotation animation
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <AnimatedSvg fill="none" {...props} style={animatedStyle}>
      <Path
        fill="#000"
        d="M32 5.833a26.666 26.666 0 1 0 0 53.333 26.666 26.666 0 0 0 0-53.333Zm0 48a21.333 21.333 0 1 1 0-42.666 21.333 21.333 0 0 1 0 42.666Z"
        opacity={0.5}
      />
      <Path
        fill="#fff"
        d="M53.333 32.5h5.334A26.667 26.667 0 0 0 32 5.833v5.334A21.333 21.333 0 0 1 53.333 32.5Z"
      />
    </AnimatedSvg>
  );
};
export default LoaderIcon;
