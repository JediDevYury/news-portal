import { Text } from "@/components/ui/text";

import React from "react";

type InputLabelProps = {
  label: string;
  isError?: boolean;
};

export const InputLabel = ({ isError = false, label }: InputLabelProps) => {
  return (
    <Text
      variant="inputLabel"
      className={`${isError ? "text-danger-300" : "text-secondary-700"} my-[4]`}
    >
      {label}
    </Text>
  );
};

InputLabel.displayName = "InputLabel";
