import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          title: "Login",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          title: "Registration",
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
