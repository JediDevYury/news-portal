import { FieldError } from "react-hook-form";

export const isFormError = (error: FieldError | undefined) => !!error;

export const camelCaseToTitle = (input: string): string => {
  return input
    .replace(/([A-Z])/g, " $1") // Add a space before each uppercase letter
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
};
