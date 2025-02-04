import { ErrorMessage } from "@/components/ui/inputs/error-message";
import { Input, InputSlot } from "@/components/ui/inputs/input";
import { InputLabel } from "@/components/ui/inputs/input-label";
import { colors, typography } from "@/constants";
import { camelCaseToTitle, isFormError } from "@/forms";

import React, { MutableRefObject, useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

import { UserIcon } from "@/assets/icons";

type TextInputProps = {
  name: string;
  inputRefs: MutableRefObject<Record<string, TextInput>>;
};

export const CustomTextInput = ({ inputRefs, name }: TextInputProps) => {
  const { control, clearErrors } = useFormContext();

  const isError = useCallback(isFormError, []);
  const nameToTitle = useCallback(camelCaseToTitle, []);
  const clearOnFocus = useCallback(
    (name: string) => {
      return () => {
        clearErrors(name);
      };
    },
    [clearErrors],
  );

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name }, fieldState: { error } }) => {
        return (
          <View>
            <InputLabel label={nameToTitle(name)} isError={isError(error)} />
            <Input variant={isError(error) ? "error" : "outline"}>
              <InputSlot className="ml-2">
                <UserIcon width={24} height={24} />
              </InputSlot>
              <TextInput
                ref={(ref) => {
                  if (!ref) return;
                  inputRefs.current[name] = ref;
                }}
                placeholder={nameToTitle(name)}
                placeholderTextColor={colors.secondary[400]}
                style={typography.inputText}
                className={
                  "flex-1 text-typography-900 py-auto px-3 placeholder:text-typography-500 h-full ios:leading-[0px] web:cursor-text web:data-[disabled=true]:cursor-not-allowed"
                }
                value={value}
                onChangeText={onChange}
                onFocus={clearOnFocus(name)}
              />
              <InputSlot
                className="mr-[8]"
                onPress={() => {
                  onChange("");
                  clearErrors(name);
                }}
              >
                <AntDesign
                  name="close"
                  size={16}
                  color={colors.secondary[500]}
                />
              </InputSlot>
            </Input>
            <ErrorMessage error={error} />
          </View>
        );
      }}
    />
  );
};
