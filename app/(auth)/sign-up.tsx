import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";

import { Pressable } from "react-native";

import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();

  const signUp = () => {
    console.log("Sign up...");
  };

  return (
    <Container>
      <Text variant="body">Registration</Text>
      <Pressable
        onPress={() => {
          signUp();
          router.push("/(auth)");
        }}
      >
        <Text variant="body">Move to sign in</Text>
      </Pressable>
    </Container>
  );
}
