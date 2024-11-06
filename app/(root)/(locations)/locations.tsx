import { Container } from "@/components/ui/container";

import { FlatList, Pressable, StyleSheet, Text } from "react-native";

type LocationProps = {
  id: number;
  title: string;
};

const Location = (props: LocationProps) => {
  return (
    <Pressable className="p-4">
      <Container padding="small">
        <Text>{props.title}</Text>
      </Container>
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
      className="flex-1 bg-white"
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
