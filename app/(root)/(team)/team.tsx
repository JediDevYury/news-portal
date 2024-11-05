import { Container } from "@/components/ui/container";
import { useUserStore } from "@/store/userStore";
import { checkRole } from "@/utils";

import { FlatList, Pressable, StyleSheet, Text } from "react-native";

import { useRouter } from "expo-router";

type EmployeeProfileProps = {
  id: number;
  title: string;
};

const EmployeeProfile = (props: EmployeeProfileProps) => {
  const router = useRouter();
  const { role } = useUserStore();

  return (
    <Pressable
      className="p-4"
      onPress={() => {
        router.push(`/team/${props.id}/profile`);
      }}
      onLongPress={() => {
        if (!checkRole(role).isAdmin) return;
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
  const data = [
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

  return (
    <FlatList
      data={data}
      className="flex-1 bg-white"
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <EmployeeProfile {...item} />}
      numColumns={3}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 12,
  },
});
