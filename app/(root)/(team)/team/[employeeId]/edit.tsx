import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function EditEmployeeProfile() {
  const { employeeId } = useLocalSearchParams();

  return (
    <View className="justify-center items-center h-full">
      <Text>{`Employee: {employeeId}`}</Text>
    </View>
  );
}
