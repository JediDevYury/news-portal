import { Button, ButtonText } from "@/components/ui/button";
import { useUserStore } from "@/store/userStore";

import { View } from "react-native";

import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();
  const { setIsAuthenticatedUser } = useUserStore();

  const login = () => {
    setIsAuthenticatedUser(true);
    router.push("/");
  };

  return (
    <View className="flex-1 justify-center items-center gap-2">
      <Button size="md" variant="solid" action="primary" onPress={login}>
        <ButtonText>Login</ButtonText>
      </Button>
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={() => router.replace("/(auth)/sign-up")}
      >
        <ButtonText>Sign Up</ButtonText>
      </Button>
    </View>
  );
}
