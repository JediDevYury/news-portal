import {
  ADD_REACTION_TO_ISSUE,
  UPDATE_ISSUE_TITLE,
} from "@/services/repository";
import { useMutation } from "@apollo/client";

import { useMemo, useState } from "react";

interface AddReactionToIssueData {
  addReactionToIssue: {
    reaction: {
      content: string;
    };
    subject: {
      id: string;
    };
  };
}

interface AddReactionToIssueVars {
  content: string;
  subjectId: string;
}

const reactionToEmoji = {
  HOORAY: "🎉",
  HEART: "❤️",
  LAUGH: "😂",
  THUMBS_UP: "👍",
  THUMBS_DOWN: "👎",
};

export const useAddReaction = (id: string) => {
  const [reaction, setReaction] = useState("");
  const [addReaction] = useMutation<
    AddReactionToIssueData,
    AddReactionToIssueVars
  >(ADD_REACTION_TO_ISSUE, {
    onCompleted: (data) => {
      console.log("Added Reaction To Issue", {
        data,
      });
    },
  });

  const handlerAddReaction = async (reaction: keyof typeof reactionToEmoji) => {
    if (typeof id !== "string") return;

    const subjectId = id?.toString();

    setReaction(reactionToEmoji[reaction]);

    await addReaction({
      variables: {
        subjectId,
        content: reaction,
      },
    });
  };

  return useMemo(
    () => ({
      handlerAddReaction,
      reaction,
    }),
    [reaction],
  );
};

interface UpdateIssueTitleData {
  updateIssue: {
    issue: {
      id: string;
      title: string;
    };
  };
}

interface UpdateIssueTitleVars {
  issueId: string;
  title: string;
}

export const useUpdateIssueTitle = (issueId: string, title: string) => {
  const [updateIssue] = useMutation<UpdateIssueTitleData, UpdateIssueTitleVars>(
    UPDATE_ISSUE_TITLE,
    {
      onCompleted: (data) => {
        console.log("Title successfully updated", {
          data,
        });
      },
      onError: (error) => {
        console.error("Error updating title", {
          error,
        });
      },
    },
  );

  const handleUpdateTitle = () => {
    updateIssue({
      variables: { issueId, title },
    });
  };

  return useMemo(
    () => ({
      handleUpdateTitle,
    }),
    [title],
  );
};
