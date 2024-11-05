import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";

import { Pressable } from "react-native";

import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();

  const signUp = () => {
    console.warn("Sign up...");
  };

  return (
    <Container>
      <Pressable
        onPress={signUp}
        className="mb-[4] py-[4] px-[8] border-2 border-brand-100 bg-brand-100 rounded"
      >
        <Text variant="body" className={"text-white"}>
          Registration
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push("/(auth)");
        }}
      >
        <Text variant="body">Move to sign in</Text>
      </Pressable>
    </Container>
  );
}
