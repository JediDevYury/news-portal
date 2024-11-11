import { Button, ButtonText } from "@/components/ui/button";
import { typography } from "@/constants";

import React from "react";

export const SecondaryOutlineButton = () => {
  return (
    <Button
      action="secondary"
      variant="outline"
      size="md"
      className="w-1/2 my-2"
    >
      <ButtonText style={[typography.buttonMedium]}>
        {`Cancel`.toUpperCase()}
      </ButtonText>
    </Button>
  );
};
