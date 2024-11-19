import { Container } from "@/components/ui/container";

import { FlatList, Pressable, Text } from "react-native";

type LocationProps = {
  id: number;
  title: string;
};

const locations = [
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
  return (
    <FlatList
      data={locations}
      className="flex-1 bg-white"
      contentContainerClassName={"p-[12]"}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Location {...item} />}
      numColumns={3}
    />
  );
}
