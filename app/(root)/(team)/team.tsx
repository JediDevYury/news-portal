import { Container } from "@/components/ui/container";
import { useUserStore } from "@/store/userStore";
import { useCheckRole } from "@/utils";

import { FlatList, Pressable, Text } from "react-native";

import { useRouter } from "expo-router";

type EmployeeProfileProps = {
  id: number;
  title: string;
};

const team = [
  {
    id: 1,
    title: "Employee 1",
  },
  {
    id: 2,
    title: "Employee 2",
  },
  {
    id: 3,
    title: "Employee 2",
  },
];

const EmployeeProfile = (props: EmployeeProfileProps) => {
  const router = useRouter();
  const { role } = useUserStore();
  const { isAdmin } = useCheckRole(role);

  return (
    <Pressable
      className="p-4"
      onPress={() => {
        router.push(`/team/${props.id}/profile`);
      }}
      onLongPress={() => {
        if (!isAdmin) return;
        router.push(`/team/${props.id}/edit`);
      }}
    >
      <Container padding="small">
        <Text>{props.title}</Text>
      </Container>
    </Pressable>
  );
};

export default function Team() {
  return (
    <FlatList
      data={team}
      className="flex-1 bg-white"
      contentContainerClassName="p-4"
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <EmployeeProfile {...item} />}
      numColumns={3}
    />
  );
}
