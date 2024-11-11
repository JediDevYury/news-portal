import { Container } from "@/components/ui/container";
import { useUserStore } from "@/store/userStore";
import { checkRole } from "@/utils";

import { FlatList, Pressable, StyleSheet, Text } from "react-native";

import { useRouter } from "expo-router";

type ArticleProps = {
  id: number;
  title: string;
};

const Article = (props: ArticleProps) => {
  const router = useRouter();
  const { role } = useUserStore();

  return (
    <Pressable
      className="p-4"
      onPress={() => {
        router.push(`/news/${props.id}/article`);
      }}
      onLongPress={() => {
        if (!checkRole(role).isAdmin) return;
        router.push(`/news/${props.id}/edit`);
      }}
    >
      <Container padding={"small"}>
        <Text>{props.title}</Text>
      </Container>
    </Pressable>
  );
};

export default function News() {
  const { role } = useUserStore();

  const data = [
    {
      id: 1,
      title: "Article 1",
    },
    {
      id: 2,
      title: "Article 2",
    },
    {
      id: 3,
      title: "Article 3",
    },
  ];

  return (
    <>
      <FlatList
        data={data}
        style={styles.container}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Article {...item} />}
        numColumns={3}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "white",
  },
});
