import { Text } from "@/components/ui/text";

import React from "react";
import { FieldError } from "react-hook-form";

export const ErrorMessage = ({ error }: { error: FieldError | undefined }) => {
  return (
    error && (
      <Text variant="helperText" className="mt-[4] text-danger-300">
        {error.message}
      </Text>
    )
  );
};

ErrorMessage.displayName = "ErrorMessage";
