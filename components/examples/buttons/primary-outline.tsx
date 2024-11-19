import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
import { typography } from "@/constants";

import React from "react";

import { UploadIcon } from "@/assets/icons";

export const PrimaryOutlineButton = () => {
  return (
    <Button action="primary" variant="outline" className="w-1/2 my-[4]">
      <ButtonIcon fill="red" as={UploadIcon} size="lg" />
      <ButtonText style={[typography.buttonMedium]}>
        {`Select Files`}
      </ButtonText>
    </Button>
  );
};
