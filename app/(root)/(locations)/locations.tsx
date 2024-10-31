import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

type LocationProps = {
  id: number;
  title: string;
};

const Location = (props: LocationProps) => {
  return (
    <Pressable className="h-full py-4 px-4">
      <View className="justify-center items-center">
        <Text>{props.title}</Text>
      </View>
    </Pressable>
  );
};

export default function Locations() {
  const data = [
    {
      id: 1,
      title: "Location 1",
    },
    {
      id: 2,
      title: "Location 2",
    },
    {
      id: 3,
      title: "Location 2",
    },
  ];

  return (
    <FlatList
      data={data}
      className="flex-1 bg-secondary-50"
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Location {...item} />}
      numColumns={3}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 12,
  },
});
