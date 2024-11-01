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
      <Text variant="body">Login</Text>
      <Pressable
        onPress={() => {
          login();
          router.push("/(auth)/sign-up");
        }}
      >
        <Text variant="body">Move to Sign Up</Text>
      </Pressable>
    </Container>
  );
}
