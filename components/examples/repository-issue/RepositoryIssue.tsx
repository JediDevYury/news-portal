import { Button, ButtonText } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input, InputField, InputSlot } from "@/components/ui/inputs/input";
import { Loader } from "@/components/ui/loader";
import { Text } from "@/components/ui/text";
import { colors, typography } from "@/constants";
import { useAddReaction, useUpdateIssueTitle } from "@/services/hooks";
import { FIND_ISSUE_ID } from "@/services/repository";
import { useQuery } from "@apollo/client";

import React, { useState } from "react";

import AntDesign from "@expo/vector-icons/AntDesign";

interface RepositoryIssueData {
  repository: {
    issue: {
      id: string;
      title: string;
    };
  };
}

interface RepositoryIssueVars {
  name: string;
  owner: string;
  issue: number;
}

type RepositoryIssueProps = RepositoryIssueVars;

export const RepositoryIssue = (props: RepositoryIssueProps) => {
  const {
    loading,
    error,
    data: issueData,
  } = useQuery<RepositoryIssueData, RepositoryIssueVars>(FIND_ISSUE_ID, {
    variables: { ...props },
  });

  const { handlerAddReaction, reaction } = useAddReaction(
    issueData?.repository.issue.id ?? "1",
  );
  const [title, setTitle] = useState("");

  const { handleUpdateTitle } = useUpdateIssueTitle(
    issueData?.repository.issue.id ?? "1",
    title,
  );

  if (loading) return <Loader background={"primary"} color="black" />;

  if (error) return <Text variant="bodyMedium">Error: {error.message}</Text>;

  return (
    <Container>
      <Text variant="body">{`${issueData?.repository.issue.title}${reaction}`}</Text>
      <Button
        size="md"
        className="my-4"
        onPress={async () => {
          await handlerAddReaction("HOORAY");
        }}
      >
        <ButtonText style={[typography.buttonMedium]}>
          {"Add Reaction"}
        </ButtonText>
      </Button>
      <Text
        variant="inputLabel"
        className="self-start text-secondary-700 my-[4]"
      >
        Title
      </Text>
      <Input>
        <InputField
          value={title}
          placeholder="Select new title"
          placeholderTextColor={colors.secondary[400]}
          style={typography.inputText}
          className="px-[8]"
          onChangeText={(text) => setTitle(text)}
        />
        <InputSlot className="mr-[8]" onPress={() => setTitle("")}>
          {title && (
            <AntDesign name="close" size={16} color={colors.secondary[500]} />
          )}
        </InputSlot>
      </Input>
      <Button
        size="md"
        variant={!title ? "outline" : "solid"}
        className="my-4"
        onPress={handleUpdateTitle}
        disabled={!title}
      >
        <ButtonText style={[typography.buttonMedium]}>
          Update Issue Title
        </ButtonText>
      </Button>
    </Container>
  );
};
