import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function EditNewsArticle() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>{`Edit News Article: ${id}`}</Text>
    </View>
  );
}
