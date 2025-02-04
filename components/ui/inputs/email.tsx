import { ErrorMessage } from "@/components/ui/inputs/error-message";
import { Input, InputField, InputSlot } from "@/components/ui/inputs/input";
import { InputLabel } from "@/components/ui/inputs/input-label";
import { colors, typography } from "@/constants";
import { camelCaseToTitle, isFormError } from "@/forms";

import React, { useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

import { EmailOutlineIcon } from "@/assets/icons";

export const EmailInput = () => {
  const { control, reset } = useFormContext();

  const isError = useCallback(isFormError, []);
  const nameToTitle = useCallback(camelCaseToTitle, []);
  const resetOnClear = useCallback(
    (name: string) => {
      return () => {
        reset({
          [name]: "",
        });
      };
    },
    [reset],
  );

  return (
    <Controller
      control={control}
      name="email"
      render={({ field: { onChange, value, name }, fieldState: { error } }) => {
        return (
          <View>
            <InputLabel label={nameToTitle(name)} isError={isError(error)} />
            <Input variant={isError(error) ? "error" : "outline"}>
              <InputSlot className="ml-2">
                <EmailOutlineIcon width={24} height={24} />
              </InputSlot>
              <InputField
                placeholder={nameToTitle(name)}
                placeholderTextColor={colors.secondary[400]}
                style={typography.inputText}
                className="px-[8]"
                value={value}
                onChangeText={onChange}
              />
              {!!value && (
                <InputSlot className="mx-[4]" onPress={resetOnClear(name)}>
                  <AntDesign
                    name="close"
                    size={16}
                    color={colors.secondary[500]}
                  />
                </InputSlot>
              )}
            </Input>
            <ErrorMessage error={error} />
          </View>
        );
      }}
    />
  );
};
