import { cva } from "class-variance-authority";

export type ContainerVariants = {
  padding: "default" | "small" | "medium" | "large";
  background: "primary" | "secondary" | "white";
};

export const containerStyles = cva("flex-1 justify-center items-center", {
  variants: {
    padding: {
      default: "p-0",
      small: "p-2",
      medium: "p-4",
      large: "p-8",
    },
    background: {
      primary: "bg-secondary-100",
      secondary: "bg-secondary-50",
      white: "bg-white",
    },
  },
  defaultVariants: {
    padding: "medium",
    background: "primary",
  },
});
