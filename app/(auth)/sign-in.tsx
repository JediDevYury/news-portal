import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";
import { useUserStore } from "@/store/userStore";

import { Pressable } from "react-native";

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
      <Pressable
        onPress={login}
        className="mb-[4] py-[4] px-[8] border-2 border-brand-100 bg-brand-100 rounded"
      >
        <Text variant="body" className={"text-white"}>
          Login
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.push("/(auth)/sign-up");
        }}
      >
        <Text variant="body">Move to Sign Up</Text>
      </Pressable>
    </Container>
  );
}
