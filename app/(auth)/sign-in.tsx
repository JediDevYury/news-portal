import { Button, ButtonText } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CustomLink } from "@/components/ui/link";
import { typography } from "@/constants";
import { useUserStore } from "@/store/userStore";

import React from "react";

import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  const { setIsAuthenticatedUser } = useUserStore();

  const login = () => {
    setIsAuthenticatedUser(true);
    router.push("/");
  };

  return (
    <Container className="items-center">
      <Button size="md" className="w-1/2 my-4" onPress={login}>
        <ButtonText style={[typography.buttonMedium]}>{"Login"}</ButtonText>
      </Button>
      <CustomLink style={[typography.buttonLink]} href="/(auth)/sign-up">
        Move to Sign Up
      </CustomLink>
    </Container>
  );
}
