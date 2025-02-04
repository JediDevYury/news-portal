import { Button, ButtonText } from "@/components/ui/button";
import {
  CustomTextInput,
  EmailInput,
  PasswordInput,
} from "@/components/ui/inputs";
import { CustomLink } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { colors, typography } from "@/constants";
import { signUpFormSchema, SignUpFormSchema } from "@/forms";
import { useUserStore } from "@/store/userStore";
import { zodResolver } from "@hookform/resolvers/zod";

import React, { ComponentRef, useMemo, useRef } from "react";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

import { useRouter } from "expo-router";

const styles = StyleSheet.create({
  keyboardAwareScrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
});

export default function SignUp() {
  const router = useRouter();
  const { setIsAuthenticatedUser } = useUserStore();
  const inputRefs = useRef<Record<string, ComponentRef<typeof TextInput>>>({});

  const defaultValues = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    }),
    [],
  );

  const methods = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<SignUpFormSchema> = (data) => {
    const listOfValues = Array.from(Object.values(data));
    const isPasswordValid = data.password === data.repeatPassword;

    if (listOfValues.every(Boolean) && isPasswordValid) {
      setIsAuthenticatedUser(true);
      router.push("/");
    }
  };

  const onError: SubmitErrorHandler<SignUpFormSchema> = (errors) => {
    const firstErrorField = Object.keys(errors)[0];

    inputRefs.current[firstErrorField].focus();
  };

  return (
    <KeyboardAwareScrollView
      bottomOffset={20}
      contentContainerStyle={styles.keyboardAwareScrollViewContainer}
    >
      <Image source={require("@/assets/images/logo.png")} />
      <Text variant="h4Medium">Sign Up</Text>
      <View testID="form" className="w-full gap-[26]">
        <FormProvider {...methods}>
          <CustomTextInput name="firstName" inputRefs={inputRefs} />
          <CustomTextInput name="lastName" inputRefs={inputRefs} />
          <EmailInput />
          <PasswordInput name="password" inputRefs={inputRefs} />
          <PasswordInput name="repeatPassword" inputRefs={inputRefs} />
        </FormProvider>
      </View>
      <View className="w-full items-center gap-[16]">
        <Button
          className="w-full"
          size="md"
          onPress={methods.handleSubmit(onSubmit, onError)}
        >
          <ButtonText style={[typography.buttonMedium]}>Sign Up</ButtonText>
        </Button>
        <CustomLink style={[typography.buttonLink]} href="/(auth)/sign-in">
          Already have an account?
        </CustomLink>
      </View>
    </KeyboardAwareScrollView>
  );
}
