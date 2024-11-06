import { cva } from "class-variance-authority";

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

// Create the button styles using tva
const buttonStyles = cva("", {
  variants: {
    size: {
      small: "px-2 py-1",
      medium: "px-2 py-1",
      large: "px-6 py-3",
    },
    variant: {
      primary: "bg-brand-100",
      secondary: "bg-brand-200",
      outline: "border border-gray-500",
    },
  },
  defaultVariants: {
    size: "medium",
    variant: "primary",
  },
});

export default buttonStyles;
