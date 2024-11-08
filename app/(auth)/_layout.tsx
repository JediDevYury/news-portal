import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{
          title: "Login",
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          title: "Registration",
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
