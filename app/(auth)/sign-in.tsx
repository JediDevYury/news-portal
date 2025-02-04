import { Button, ButtonText } from "@/components/ui/button";
import { EmailInput, PasswordInput } from "@/components/ui/inputs";
import { CustomLink } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { colors, typography } from "@/constants";
import { loginFormSchema, LoginFormSchema } from "@/forms";
import { useUserStore } from "@/store/userStore";
import { zodResolver } from "@hookform/resolvers/zod";

import React, { useMemo } from "react";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Alert, Image, StyleSheet, View } from "react-native";
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

export default function SignIn() {
  const router = useRouter();
  const { setIsAuthenticatedUser, user } = useUserStore();

  const defaultValues = useMemo(
    () => ({
      email: "",
      password: "",
    }),
    [],
  );

  const methods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues,
    mode: "onSubmit", // Validate on form submission
    reValidateMode: "onChange", // Clear validation errors when inputs changes
  });

  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
    if (!data.email || !data.password) return;

    setIsAuthenticatedUser(true);
    router.push("/");
  };

  const onError: SubmitErrorHandler<LoginFormSchema> = (errors) => {
    Alert.alert("On Error", JSON.stringify(errors));
  };

  return (
    <KeyboardAwareScrollView
      bottomOffset={20}
      contentContainerStyle={styles.keyboardAwareScrollViewContainer}
    >
      <Image source={require("@/assets/images/logo.png")} />
      <Text variant="h4Medium">Log in</Text>
      <View testID="form" className="w-full gap-[24]">
        <FormProvider {...methods}>
          <EmailInput />
          <PasswordInput name="password" />
        </FormProvider>
      </View>
      <View className="w-full items-center gap-[16]">
        <Button
          className="w-full"
          size="md"
          onPress={methods.handleSubmit(onSubmit, onError)}
        >
          <ButtonText style={[typography.buttonMedium]}>Login</ButtonText>
        </Button>
        <CustomLink style={[typography.buttonLink]} href="/(auth)/sign-up">
          Don’t have an account?
        </CustomLink>
      </View>
    </KeyboardAwareScrollView>
  );
}
