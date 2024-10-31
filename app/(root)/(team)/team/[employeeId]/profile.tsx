import { View, Text } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function EmployeeProfile() {
  const { employeeId } = useLocalSearchParams();

  return (
    <View className="justify-center items-center h-full">
      <Text>Employee: {employeeId}</Text>
    </View>
  );
}
