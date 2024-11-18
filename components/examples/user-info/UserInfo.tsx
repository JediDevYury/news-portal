// src/App.tsx
import { RepositoryIssue } from "@/components/examples/repository-issue/RepositoryIssue";
import { Container } from "@/components/ui/container";
import { Loader } from "@/components/ui/loader";
import { Text } from "@/components/ui/text";
import { GET_USER_INFO } from "@/services/user";
import { useQuery } from "@apollo/client";

import React from "react";
import { Image, StyleSheet } from "react-native";

// Define TypeScript types for the query data
interface UserInfoData {
  viewer: {
    login: string;
    name: string;
    avatarUrl: string;
    bio: string;
  };
}

interface UserInfoVars {}

// Component to display the hooks info
export const UserInfo = () => {
  const { loading, error, data } = useQuery<UserInfoData, UserInfoVars>(
    GET_USER_INFO,
  );

  if (loading) return <Loader background={"primary"} color="black" />;

  if (error) return <Text variant="bodyMedium">Error: {error.message}</Text>;

  const { login, name, avatarUrl, bio } = data!.viewer;

  return (
    <Container className="flex-[1] justify-center items-center w-full">
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <Text variant="h3">{name}</Text>
      <Text variant="buttonLink">@{login}</Text>
      <Text variant="body2" style={styles.bio}>
        {bio}
      </Text>
      <RepositoryIssue
        name={"education-redux"}
        owner={"charleswein"}
        issue={1}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    marginBottom: 10,
  },
  bio: {
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
