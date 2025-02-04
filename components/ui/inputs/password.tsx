import { ErrorMessage } from "@/components/ui/inputs/error-message";
import { Input, InputSlot } from "@/components/ui/inputs/input";
import { InputLabel } from "@/components/ui/inputs/input-label";
import { colors, typography } from "@/constants";
import { camelCaseToTitle, isFormError } from "@/forms";

import React, { MutableRefObject, useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

import { KeyIcon } from "@/assets/icons";

type PasswordInputProps = {
  name: string;
  inputRefs?: MutableRefObject<Record<string, TextInput>>;
};

export const PasswordInput = ({ inputRefs, name }: PasswordInputProps) => {
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
      name={name}
      render={({ field: { onChange, value, name }, fieldState: { error } }) => (
        <View>
          <InputLabel label={nameToTitle(name)} isError={isError(error)} />
          <Input variant={isError(error) ? "error" : "outline"}>
            <InputSlot className="ml-[8]">
              <KeyIcon width={24} height={24} color={colors.secondary[500]} />
            </InputSlot>
            <TextInput
              ref={(ref) => {
                if (!ref || !inputRefs) return;
                inputRefs.current[name] = ref;
              }}
              placeholder={nameToTitle(name)}
              placeholderTextColor={colors.secondary[400]}
              style={typography.inputText}
              className="flex-1 text-typography-900 py-auto px-3 placeholder:text-typography-500 h-full ios:leading-[0px] web:cursor-text web:data-[disabled=true]:cursor-not-allowed"
              value={value}
              onChangeText={onChange}
            />
            <InputSlot className="mx-[4]" onPress={resetOnClear(name)}>
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
          <ErrorMessage error={error} />
        </View>
      )}
    />
  );
};
