import { Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function NewsArticle() {
  const { articleId } = useLocalSearchParams();

  return (
    <View className="justify-center items-center h-full">
      <Text>{`Article: ${articleId}`}</Text>
    </View>
  );
}
