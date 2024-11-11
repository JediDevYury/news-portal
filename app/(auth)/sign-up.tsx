import { Button, ButtonText } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CustomLink } from "@/components/ui/link";
import { typography } from "@/constants";

import React from "react";

import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();

  const signUp = () => {
    router.push("/(auth)/sign-in");
  };

  return (
    <Container>
      <Button size="md" className="w-1/2 my-4" onPress={signUp}>
        <ButtonText style={[typography.buttonMedium]}>{"Sign Up"}</ButtonText>
      </Button>

      <CustomLink style={[typography.buttonLink]} href="/(auth)/sign-in">
        Move to Sign In
      </CustomLink>
    </Container>
  );
}
