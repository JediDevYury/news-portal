import { Container } from "@/components/ui/container";
import { Input, InputField, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { colors, typography } from "@/constants";

import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

import { KeyIcon } from "@/assets/icons";

export const PasswordInput = () => {
  return (
    <Container className="justify-start items-start">
      <Text variant="inputLabel" className="text-secondary-700 my-[4]">
        Password
      </Text>
      <Input>
        <InputSlot className="ml-[8]">
          <KeyIcon width={24} height={24} color={colors.secondary[500]} />
        </InputSlot>
        <InputField
          placeholder="Password"
          placeholderTextColor={colors.secondary[400]}
          style={typography.inputText}
          className="px-[8]"
        />
        <InputSlot className="mx-[4]">
          <AntDesign name="close" size={16} color={colors.secondary[500]} />
        </InputSlot>
        <InputSlot className="mr-[8]">
          <Ionicons
            name="eye-off-outline"
            size={24}
            color={colors.secondary[500]}
          />
        </InputSlot>
      </Input>
    </Container>
  );
};
