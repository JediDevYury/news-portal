import { Button, ButtonText } from "@/components/ui/button";

import { Text, View } from "react-native";

import { useRouter } from "expo-router";

export default function SignUp() {
  const router = useRouter();

  const signUp = () => {
    console.log("Sign up...");
  };

  return (
    <View className="flex justify-center items-center h-full">
      <Text>Registration</Text>
      <Button size="md" variant="solid" action="primary" onPress={signUp}>
        <ButtonText>Sign Up</ButtonText>
      </Button>
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={() => router.replace("/(auth)/sign-in")}
      >
        <ButtonText>Sign In</ButtonText>
      </Button>
    </View>
  );
}
