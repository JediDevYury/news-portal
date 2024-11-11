import { Container } from "@/components/ui/container";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { colors, typography } from "@/constants";

import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";

import { PlusIcon } from "@/assets/icons";

export const TextInputExample = () => {
  return (
    <Container className="justify-start items-start">
      <Text variant="inputLabel" className="text-secondary-700 my-[4]">
        Category
      </Text>
      <Input>
        <InputSlot className="ml-2">
          <PlusIcon width={24} height={24} fill={colors.secondary[500]} />
        </InputSlot>
        <InputField
          placeholder="Select news category"
          placeholderTextColor={colors.secondary[400]}
          style={typography.inputText}
          className="px-[8]"
        />
        <InputSlot className="mr-[8]">
          <AntDesign name="close" size={16} color={colors.secondary[500]} />
        </InputSlot>
      </Input>
    </Container>
  );
};
